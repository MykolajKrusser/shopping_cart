import React from 'react';
import classes from './Header.css';
import Nav from '../Nav/Nav';
import Logo from '../UI/Logo/Logo';


const header = (props)=>(
    <header className={classes.Header}>
        <Logo/>
        <div>
            Online Market
        </div>
        <Nav/>
    </header>
);

export default header;