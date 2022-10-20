import { useRef } from "react";
import Auth from "../services/auth";
import { Grid } from "@mui/material";


const SignUp = () => {
    const name = useRef(), email = useRef(), password = useRef()
    const signup = () => {
        const data = {
            email: email.current.value,
            name: name.current.value,
            pswd: password.current.value
        }
        console.log(data)
        Auth.signup(data)
        alert("Signup Successful")  
        //to do: redirect to the login page
    }
    return <>
        {/* <input type="text" placeholder="Enter your name" ref={name} />
        <input type="email" placeholder="Enter your email" ref={email} />
        <input type="password" placeholder="Enter your password" ref={password} />
        <input type="submit" onClick={signup} /> */}
        <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item xs={6}>
                asd
            </Grid>
        </Grid>
    </>
}

export default SignUp