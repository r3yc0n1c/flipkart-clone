import bgImage from "../assets/images/Untitled.jpeg";
import React, { useRef, useState } from "react";
import Auth from "../services/auth";
import { Typography, Grid, Box, TextField, Button } from "@mui/material";
import {useNavigate} from "react-router-dom"



const LogIn = () => {
    const email = useRef(), password = useRef()
    const nav= useNavigate();
    const handleLogIn = () => {
        const data = {
            email: email.current.value,
            pswd: password.current.value
        }
        console.log(data)
        Auth.login(data)
        alert("Login Successful")
        //to do: redirect to the login page
    }
    
    return <>

        <Grid
            container
            spacing={0}
            align="center"
            justify="center"
            style={
                { backgroundColor: "white", minHeight: "100vh" }
            }
        >
            <Grid
                item
                xs={3.5}
                style={
                    { backgroundColor: "#5D0170", color: "white", fontFamily: "Roboto", padding: "30pt" }
                }
            >
                <Typography
                    variant="body1"
                    sx={{ fontSize: "30px", lineHeight: "80px", fontWeight: "500", fontStyle: "normal" }}
                >
                    Hey User! <br/> Happy to see you back!
                </Typography>

                <Typography
                    variant="body1"
                    sx={{ fontSize: "20px", lineHeight: "27px", fontWeight: "400", fontStyle: "normal", color: "#dbdbdb" }}
                >
                    Log In with your email to get started
                </Typography>

                <Box
                    component="img"
                    src={require("../assets/images/435.jpg")}
                    sx={{ height: "250px", width: "250px", mt: 33.5 }}
                >
                </Box>

                {/* <img src="https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg"></img> */}

            </Grid>

            <Grid
                item
                xs={8.5}
                style={
                    { backgroundImage:`url(${bgImage})`,backgroundSize: "contain", color: "white", fontFamily: "Roboto", padding: "30pt" }
                }
            >
                <Box
                    // color="black"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    backgroundColor="white"
                    margin="50px"
                    height="75vh"
                    width="40vw"
                >

                    <TextField
                        label="Enter your Email"
                        type="email"
                        variant="standard"
                        inputRef={email}
                        style={{ width: 450, marginBottom: 10 }}
                    />

                    <TextField
                        label="Enter your password"
                        type="password"
                        variant="standard"
                        inputRef={password}
                        style={{ width: 450, marginBottom: 10 }}
                    />

                    <Typography
                        variant="body1"
                        sx={{ color: "grey", fontSize: "13px", margin: "25px" }}
                    >
                        By continuing, you agree to Flipkart's 
                        <a href="https://www.flipkart.com/pages/terms" target="_blank" style={{textDecoration: "none"}}> Terms of Use </a> and 
                        <a href="https://www.flipkart.com/pages/privacypolicy" target="_blank" style={{textDecoration: "none"}}> Privacy Policy.</a>
                    </Typography>

                    <Button
                        variant="contained"
                        onClick={handleLogIn}
                        sx={{
                            color: "white",
                            backgroundColor: "orange",
                            width: 350,
                            height: 45,
                            margin: "15px",
                            ':hover':{bgcolor:"orange"}
                        }}
                    >
                        Login
                    </Button>

                    <Button
                        variant="contained"
                        onClick={()=>{
                            nav("/signup")
                        }}
                        sx={{
                            color: "orange",
                            backgroundColor: "white",
                            width: 350,
                            height: 45,
                            textTransform: "none",
                            margin: "15px",
                            ':hover':{bgcolor:"white"}
                        }}
                    >
                        New User? Sign Up!
                    </Button>
                </Box>
                {/* <img src="https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg"></img> */}
            </Grid>
        </Grid>
    </>
}

export default LogIn