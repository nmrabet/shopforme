import React from 'react';
import './Header.css';
import { BiUserCircle } from "react-icons/bi";
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <div className='header'>
            <Link to='/'><h3 className='title'>ShopForMe</h3></Link>
                <ul className='login'>
                    <BiUserCircle size='1.5em'/>
                    <li className='username'>Username</li>
                    <li className="logout">Log Out</li>
                </ul>
        </div>
    )
}
