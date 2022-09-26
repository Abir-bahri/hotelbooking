import React from 'react'
import {Navigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { logout } from '../redux/actions/userAction';

const Profile = () => {
    const isAuth=useSelector((state)=>state.authReducer.isAuth)
    const user = useSelector(state => state.authReducer.user)
    const dispatch=useDispatch()
 
    return (
        <div>
           { isAuth ?  <div>   
           <h2>profile name</h2>
       
           <button onClick={()=>dispatch(logout())}>logout</button></div>: <Navigate to='/login'/>}
        </div>
    )
}

    
   

export default Profile
