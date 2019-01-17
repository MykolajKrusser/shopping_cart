import React from 'react';
import classes from './Logo.css';
import img from '../../../assets/img/shopping-cart.svg';

const logo = (props)=>(
    <img src={img} alt='logo' className={classes.Logo}/>
);

export default logo;