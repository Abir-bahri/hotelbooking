
// import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


const Navbar = () => {
  return (
    <div className="Navbar">
      
    
    
<nav>
<div className="navContainer">

<Box sx={{ mx: "160px ", width:600, mb:5 }}>
{/* { <Box sx={{ justifyContent: 'space-between' }}/>} */}
<Box sx={{ m: "10px" }} >  



<Button variant="contained"><Link className="NavbarBtn" to="/">Home</Link></Button>

<Button variant="contained"><Link className="NavbarBtn" to="/register">Register</Link></Button>
<Button variant="contained"><Link className="NavbarBtn" to="/login">Login</Link></Button>

<Button variant="contained"><Link className="NavbarBtn" to="/profile">Profile</Link></Button></Box>
</Box>
{/* </Box> */}



</div>



</nav>

      </div>
  )
}

export default Navbar

