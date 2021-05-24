import React, { Component } from 'react'

export default class Olma extends Component {
    render() {
        return (
            <div>
                <div>ID:{this.props.ID}</div>
                <div>name:{this.props.name}</div>
                <div>status:{this.props.status}</div>
            </div>
        )
    }
}
