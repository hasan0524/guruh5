import React, { Component } from 'react'
import './state.css'

export default class State extends Component {
    constructor(props){
        super(props)
       this.state = {
           name: 'Enter your name',
           count: 0,
          

       }
    }
    render() {
        const increament =()=>{
            this.setState({count: this.state.count + 1})
        
        }
        
        const decreament =()=> {
            if (this.state.count>0) {
                this.setState({count: this.state.count - 1})
            }
            
        }

        const change =()=>{
            this.setState({ism:this.state.ism})
        }
                return (
                   
            <div className='obshiy' >{this.props.kerak}
              <h1 onClick={increament}>+</h1>
              <h1>{this.state.count}</h1>
              <h1 onClick={decreament}>-</h1>
              
             
              
            </div>
        )
    }
}