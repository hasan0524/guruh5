import React, { Component } from 'react'
import './fruitstyle.css'
import lo from './lo/123.jpg'

export default class Fruit extends Component {
    render() {
        return (
            <div className='alo'>
                <img width='250px' src={this.props.src} ></img>
                <h3>{this.props.title}</h3>
                <h5>{this.props.price}</h5>
            </div>
        )
    }
}
