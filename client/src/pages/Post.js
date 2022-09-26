import * as React from "react";
import "./Post.css";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState,useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import back1 from "./back1.png";
import axios from 'axios';




function Copyright(props) {
  
  return (

    <Typography 
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Post (props) {
  const dispatch = useDispatch();
  const isAuth = useSelector((state)=>state.authReducer.isAuth)
  
  const [input, setInput] = useState({
    desc: "",
    title: "",
    img:"",
  });

  const handleSubmit = (e) => {
    dispatch(Post(input));
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate()
  useEffect(() => {
    if (isAuth) 
    navigate('/hotel');
  }, [isAuth]);


  //add hotel//
  const [newHotel,setNewHotel]=useState()

  const handleSave = () =>  
  {props.handleAddHotel(input)
    };
 
  const handleAdd = (e)=>setNewHotel ({...newHotel,[e.target.name]:e.target.value});

  return (
    

   
  <ThemeProvider  className="Post" img src={back1} alt =""
     
    theme={theme}>
      
    
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Post
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="desc"
              label="Description"
              name="desc"
              autoComplete="Description"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="title"
              label="Title"
              id="Title"
              autoComplete="Title"
              onChange={handleChange}
            />
          <form action="/action_page.php">
  <input type="file" id="myFile" name="img"/>
 
</form>
              
<Button onClick={handleAdd}  
fullWidth variant="contained"
sx={{ mt: 3, mb: 2 }}
            > < Link  className="homeBtn" to="/hotel"></Link>
              ADD
            </Button>
            <Grid container>
              
              
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
   
   
  );
}



