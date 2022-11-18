import { Link } from "react-router-dom"
import { Box, AppBar, Toolbar, IconButton, Typography, Stack, Button } from "@mui/material"

const Navbar = () => {
  // return (
  //     <div className="navbar">
  //         <div><Link to ="/">Home</Link></div>    
  //         <div><Link to ="/login">Login</Link></div>    
  //         <div><Link to ="/signup">SignUp</Link></div>    
  //         <div><Link to ="/profile">Profile</Link></div>    
  //     </div>
  // )

  return (
    <Box sx={{ flexgrow: 1 }}>
      <AppBar position="static" sx={{ textTransform: "capitalize" }}>
        <Toolbar>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Flipkart
          </Typography>

          <Button color="inherit">User</Button>
          <Button color="inherit">Become a Seller</Button>
          <Button color="inherit">More</Button>
          <Button color="inherit">Cart</Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar