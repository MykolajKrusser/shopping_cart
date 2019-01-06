import React from 'react';
import classes from './Header.css';
import Nav from '../Nav/Nav';


const header = (props)=>(
    <header className={classes.Header}>
        <div>
            Online Market
        </div>
        <Nav/>
    </header>
);

export default header;