import React, { Component } from 'react'
import './Map.css'
import {FaEllipsisV} from "react-icons/fa";

import { data } from './data'
export default class Map extends Component {
    render() {
        return (
            <div className='des'> 
                <table>
                    <tr>
                        <th><input type="checkbox"></input></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Record</th>
                        <th>Best song</th>
                        <th>Location</th>
                        <th>action</th>
                    </tr>
                    {
                        data.map((value, index)=>(
                            <tr>
                            <th><input type="checkbox"></input></th>
                                <td>HASAN</td>
                                <td className='email'>jason@bornegmail.com</td>
                                <td>19/05/2021</td>
                                <td>Best song</td>
                                <td>Silk Road</td>
                                <td>UZB</td>
                                <td><FaEllipsisV/></td>
                            </tr> 
                        ))
                    }
                    
                                        
                </table>
            </div>
        )
    }
}