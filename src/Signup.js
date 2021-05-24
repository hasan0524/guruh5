import React, { Component } from 'react'
import   './Signup.css'
export default class Signup extends Component {
    render() {
        return (
            <div className='p4'>
                <div className='l1'><h1>Welcome</h1></div>
                <p>Signup into your account</p>
            <div  className='q1'>
            <div className='f4'>    <h1>Sign Up</h1></div>
            < div className='d2'>
             <input type="text"placeholder='Full Name'></input> <br></br><br></br>
             <input type="text" placeholder='E-mail'></input><br></br><br></br>
             <input type="password" placeholder='Password'></input>
             </ div><br></br><br></br>
             <button className='W3'>SIGN UP</button>
            </div>
            <p>Already have an account?</p> <button className='c'>Log in</button>
            </div>
        )
    }
}