import React, { Component } from 'react'
import Login from './Login'
import Signup from './Signup'

export default class Render extends Component {
    constructor(props){
        super(props)
        this.state={
            auth: false
        }
    }
    render() {
        if (this.state.auth) {
            return(<div>
                <Login/>
                <button onClick={()=>this.setState({auth:!this.state.auth})}>Join now</button>
            </div>
            )
            
        } else{
        return (
            <div>
                
                <Signup/>
                <button onClick={()=>this.setState({auth:!this.state.auth})}>Log in</button>  
            </div>
        )
    }
    }}
