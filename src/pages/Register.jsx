import { Stack, Paper, Typography, Button } from "@mui/material";
import { Input_Component } from "../Components/Input_Component";
// import { sign_up_data } from "../utils/sign_up_data";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase_config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const [data, setData] = useState({});

  const navigate = useNavigate();

  const onChangeHandle = (e) => {
    const { value, id } = e.target;
    setData({ ...data, [id]: value });
  };

  const submitHandle = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        navigate("/login")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

    // credentials_data
  };
  return (
    <Stack className="min-h-[100dvh] justify-center items-center">
      <div className="max-w-md">
        <Paper
          component="form"
          onSubmit={submitHandle}
          elevation={10}
          sx={{ px: 2, py: 3 }}
        >
          <Typography align="center" fontWeight="bold" variant="h5">
            Sign Up
          </Typography>
          <Input_Component
            placeholder="Enter First Name"
            type="text"
            id="firstname"
            onChange={onChangeHandle}
            required={true}
          />
          <Input_Component
            placeholder="Enter last Name"
            type="text"
            id="lastname"
            onChange={onChangeHandle}
            required={true}
          />
          <Input_Component
            placeholder="Enter Username"
            type="text"
            id="username"
            onChange={onChangeHandle}
            required={true}
          />
           <Input_Component
            placeholder="Enter Email"
            type="email"
            id="email"
            onChange={onChangeHandle}
            required={true}
          />
          <Input_Component
            placeholder="Enter Password"
            type="password"
            id="password"
            onChange={onChangeHandle}
            required={true}
          />
          <Button
            type="submit"
            sx={{ width: "100%", mt: 2 }}
            variant="contained"
            color="primary"
          >
            Submit
          </Button>

          <div className="col-span-2 space-x-1 text-center">
            <span>Already have an account </span>
            <Link to="/login" className="underline text-primary_color">
              Login now
            </Link>
          </div>
        </Paper>
      </div>
    </Stack>
  );
};

export { Register };
