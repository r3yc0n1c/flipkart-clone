import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar">
            <div><Link to ="/">Home</Link></div>    
            <div><Link to ="/login">Login</Link></div>    
            <div><Link to ="/signup">SignUp</Link></div>    
            <div><Link to ="/profile">Profile</Link></div>    
        </div>
    )
}

export default Navbar