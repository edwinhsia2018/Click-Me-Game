import React from 'react';
import './Nav.css';

const Nav = props => (
    <nav className="jumbotron text-center" >
        <ul>
            <h1 className="display-4 text-center"><strong>Lord of the Rings - Click Me Game</strong></h1>
            <br></br>
            <ul>Click on an image to begin! <strong>Current Score: {props.score} | Highest Score: {props.highScore} </strong> </ul>
        </ul>
    </nav>
);


export default Nav;
