import Navbar from "./Navbar";
import bg from "../assets/images/bgcopy.png"

const Home = () => {
    return(
        <>
            <Navbar/>
            <img src={bg} height="100%" width="100%"></img>
        </>
    )

    // return (
    //     <>
    //         <h1>You are in the Home page!</h1>
    //         <a href="/signup">Signup</a>
    //         <a href="/login">Login</a>
    //     </>
    // )
}

export default Home