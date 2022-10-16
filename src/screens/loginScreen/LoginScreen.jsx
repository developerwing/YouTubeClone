import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../store/auth';
import {useNavigate} from "react-router-dom"
import './_loginScreen.scss'

const LoginScreen = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const accessToken = useSelector(state => state.user.auth.accessToken);
   const handleLogin = () => {
      dispatch(login())
   }

   useEffect(() => {
      console.log('acessToken', accessToken);
      if (accessToken) {
         navigate("/");
      }
   }, [dispatch, accessToken])



   return (
      <div className='login'>
         <div className='login__container'>
            <h2>Youtube Clone</h2>
            <img
               src='http://pngimg.com/uploads/youtube/youtube_PNG2.png'
               alt=''
            />
            <button onClick={handleLogin}>Login With google</button>
            <p>This Project is made using YOUTUBE DATA API</p>
         </div>
      </div>
   )
}

export default LoginScreen