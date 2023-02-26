import { Link } from "react-router-dom"
import { Box, AppBar, Toolbar, IconButton, Typography, TextField, Button } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ setSearchQuery }) => (
  <form>
    <TextField
      id="search-bar"
      className="text"
      onInput={(e) => {
        setSearchQuery(e.target.value);
      }}
      // label="Enter a city name"
      variant="outlined"
      placeholder="Search..."
      size="small"
      sx={{
        // "& .MuiInputLabel-root": {bgcolor: "white", color: 'white'},//styles the label
        bgcolor: "white",
        "& .MuiOutlinedInput-root": {
          "& > fieldset": { border: "none" },
        },
      }}


    />
    <IconButton type="submit" aria-label="search" sx={{bgcolor:"white", borderRadius: 0, "&:hover":{bgcolor: "white"} }}>
      <SearchIcon style={{ fill: "#1976D2" }} />
    </IconButton>
  </form>
);

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
      <AppBar position="static" sx={{ textTransform: "capitalize", height: 55 }}>
        <Toolbar>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Flipkart
          </Typography>

          <SearchBar />


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