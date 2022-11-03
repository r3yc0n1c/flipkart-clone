import { Link } from "react-router-dom"
import { Box, AppBar, Toolbar, IconButton, Typography, Stack, Button} from "@mui/material"

const Navbar = () => {
    // return (
    //     <div className="navbar">
    //         <div><Link to ="/">Home</Link></div>    
    //         <div><Link to ="/login">Login</Link></div>    
    //         <div><Link to ="/signup">SignUp</Link></div>    
    //         <div><Link to ="/profile">Profile</Link></div>    
    //     </div>
    // )

    return(
        <Box sx={{flexgrow:1}}>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{flexgrow:1}}>Flipkart</Typography>
                {/* <Stack direction="row" spacing={2}> */}
                    <Button color="inherit">
                        Signup
                    </Button>
                    {/* <Button color="inherit">
                        Login
                    </Button>
                    <Button color="inherit">
                        Profile
                    </Button> */}
                {/* </Stack> */}
            </Toolbar>
        </AppBar>
        </Box>
    )
 }


// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// // import MenuIcon from '@mui/icons-material/Menu';

// export default function Navbar() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             asdasd
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             News
//           </Typography>
//           <Button color="inherit">Login</Button>
//           <Button color="inherit">Login</Button>
//           <Button color="inherit">Login</Button>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }

export default Navbar

