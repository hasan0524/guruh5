import React, { Component } from 'react'
import Login from './Login'
import './appstyle.css'
import  Form from './Components/index'
// import './Signup.css'
import Fruit from './fruit'
import lo from './lo/123.jpg'
import ok from './lo/ok.jpg'
import State from './State'
var teachers = [

  {ID: 1, name: 'hasan', status: 'teacher'},
  {ID: 2, name: 'jahongir', status: 'teacher'},
  {ID: 3, name: 'xolmat', status: 'teacher'},
  {ID: 4, name: 'teshavoy', status: 'teacher'},
  {ID: 5, name: 'boltavoy', status: 'teacher'},
  {ID: 6, name: 'erkin', status: 'teacher'},
  {ID: 7, name: 'qulmat', status: 'teacher'},


]

export default class App extends Component {
  render() {
    return (
      <div className='main'> 
  {/* <Fruit  
  src={lo}
  title="Mol go'shti"
  price="80,000 so'm"
  
   />
  <Fruit
  src={ok}
  title='Banan'
  price="15,000 so'm"
  />
  <Fruit
  src='https://media.gettyimages.com/photos/closeup-of-cucumber-against-white-background-picture-id1127912081?s=612x612'
  title='Svejiy bodring'
  price="10,000 so'm"
  />
  <Fruit
  src='https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX8600658.jpg '
  title='Mandarin'
  price="70,000 so'm"
  />
  <Fruit
  src='https://i.pinimg.com/originals/ff/a5/32/ffa5326c9af1852703782c32e6340f28.jpg '
  title='Qulupnay'
  price="30,000 so'm"
  />
  <Fruit
  src='https://image.shutterstock.com/image-photo/ripe-peach-fruit-slice-leaf-260nw-1575604471.jpg'
  title='Shaftoli'
  price="20,000 so'm"
  />
<State/> */}
<Form/>
</div>
    )
  }
}