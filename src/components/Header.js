import React from 'react';
import './Header.css';
import { BiUserCircle } from "react-icons/bi";

export default function Header() {
    return (
        <div className='header'>
            <h3 className='title'>ShopForMe</h3>
                <ul className='login'>
                    <BiUserCircle size='1.5em'/>
                    <li className='username'>Username</li>
                    <li className="logout">Log Out</li>
                </ul>
        </div>
    )
}
