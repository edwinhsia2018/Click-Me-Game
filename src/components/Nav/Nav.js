import React from 'react';
import './Nav.css';

const Nav = props => (
    <nav className="navbar navbar-default" >
        <ul>
            <h1 className="brand">Click Me Game</h1>
            <ul>Click on an image to begin! <strong>Current Score: {props.score} | Highest Score: {props.highScore} </strong> </ul>
        </ul>
    </nav>
);


export default Nav;