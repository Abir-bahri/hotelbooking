import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"

import Profile from "./pages/Profile"
import Navbar from "./components/Navbar"
import HomeMiddle from './pages/HomeMiddle';
import List from "./components/list/List";
import Hotel from "./pages/hotel/Hotel";
import Hotel2 from "./pages/hotel/Hotel2";
import Hotel3 from './pages/hotel/Hotel3';
import AddedHotel from './components/addedhotel/AddedHotel';





function App() {
  return (
    <div>
      

<BrowserRouter>

      <Navbar/>
    
     <Routes>
       <Route path="/" element={<><Home/><HomeMiddle/></>}>home</Route>

       
       <Route path="/register" element={<Register/>}>register</Route>
       <Route path="/login" element={<Login/>}>login</Route>
       
       <Route path="/profile" element={<Profile/>}>profile</Route>
       <Route path="/hotel" element={<List/>}></Route>
       <Route path="/hotel/tabarka" element={<Hotel/>}></Route>
       <Route path="/hotel/hammamet" element={<Hotel2/>}></Route>
       <Route path="/hotel/sousse" element={<Hotel3/>}></Route>
       <Route path="/hotel/desc4" element={<Hotel/>}></Route>
       <Route path="/hotel/addedhotel" element={<AddedHotel/>}></Route>

     </Routes>
     
     </BrowserRouter>
     
 
    
     
 
  
     
    </div>
  );
}

export default App;
