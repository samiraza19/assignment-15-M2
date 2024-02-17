import { Stack, Paper, Typography, Button } from "@mui/material";
import { Input_Component } from "../Components/Input_Component";
// import { credentials_data } from "../utils/credentials_data";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase_config";

const Login = () => {
  // let userdata = {}
  const [data, setData] = useState({});

  const navigate = useNavigate();

 
  const submitHandle = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, data.email, data.password)
  .then((userCredential) => {
    localStorage.setItem("isloggedin",true)
    // Signed in 
    const user = userCredential.user;
    navigate ('/')
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });

    
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
            Login
          </Typography>
          <Input_Component
            placeholder="Enter Email"
            type="email"
            id="email"
            onChange={(e) => setData({...data,email:e.target.value})}
            required={true}
          />
          <Input_Component
            placeholder="Enter Password"
            type="password"
            id="password"
            onChange={(e) => setData({...data,password:e.target.value})}
            required={true}
          />

          <Button
            // onClick={submitHandle}
            type="submit"
            sx={{ width: "100%", mt: 2 }}
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
          <div className="col-span-2 space-x-1 text-center">
            <span>Don't have an account </span>
            <Link to="/register" className="underline text-primary_color">
              Sign now
            </Link>
          </div>
        </Paper>
      </div>
    </Stack>
  );
};

export { Login };