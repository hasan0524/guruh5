import React, { Component } from 'react'
import {AiFillEdit} from 'react-icons/ai';
import {AiFillCaretDown}from 'react-icons/ai';

import './Table.css'
// import {AiOutlineSearch} from 'react-icons/ai';

export default class Table extends Component {
    render() {
        return (
            <div>
          
                <table border='1'>
                <tr>
                <th>Name </th>
                <th>Email  </th>
                <th>Date</th>
                <th>Record</th>
                  <th>Location</th>
                  <th>Best Song</th>
                </tr>
                <tr>
                <td>ASAP Rocky      </td>
               <div className='al'>    <td>flacko@asapmob.com  <AiFillEdit size='1.5em'color='green'/></td></div>
                  <td>03/20/2017</td>
                   <td>AT.LONG.LAST ASAP</td>
                   <td>NY/NYC</td>
                    <td>L$D</td>
                </tr>
            <tr>
             <td>Bran New </td>
            <div className='al'> <td>jesselayce@brandwrk.com <AiFillEdit size='1.5em'color='green'/></td></div>
              <td>12/08/2017</td>
               <td>Robinson Cruso</td>
                <td>Long Island, NY</td>
                 <td>Millstone</td>
            </tr>
            <tr>
            <td>Childish Gambino   </td>
          <div className='al'>    <td>Donald@Childishgambino.com <div className='a4'><AiFillEdit size='1.5em'color='green' /></div></td></div>
            <td>08/06/2017</td>
            <td>Because the iternet</td>
            <td>Atlanta, GA</td>
            <td>3005</td>
            </tr>
                </table>
            </div>
        )
    }
}

