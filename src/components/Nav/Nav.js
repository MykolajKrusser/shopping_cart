import React from 'react';
import classes from './Nav.css';
import NavItem from './NavItem/NavItem';

const navigation = (props)=>(
    <nav className={classes.Nav}>
        <NavItem link='/' exact>nav 1</NavItem>
        <NavItem link='/nav2'>nav 2</NavItem>
        <NavItem link='/nav3'>nav 3</NavItem>
    </nav>
);

export default navigation;