import React, { Component } from 'react'
import './login.css'   
import lo from './lo/alo.jpg'

export default class Login extends Component {
    render() {
        return (
            <div className='asos'>
                <h1>Welcome back</h1>
                <p>Login back into your account</p>
                <div className='rasm'><img src={lo} alt="xato" width='50px'></img></div>
            <div  className='mar'>
               <div className='a'>
                  <div className='log'>Log in</div> 
                   <br></br><br></br>
                <input type="text" placeholder='E-maiil'></input> <br></br><br></br>
                <input type="password" placeholder='Password'></input>
            <div  className='qa'><p>Forgot Password?</p></div>
       <div className=''> <button  className='but'> LOGIN</button></div>
        </div> 
                  </div>
                  <p>Don't have an account yet? </p><button className='join' onClick>Join Now</button>
                  </div>
        )
    }
}