import React from 'react';
import {NavLink} from 'react-router-dom';

import classes from './ProdNav.css';

const ProdNav = (props)=>(
    <NavLink
        className={classes.ProdNav}
        activeClassName={classes.Active}
        to={props.link} 
        exact={props.exact}
    >
    {props.children}
    </NavLink>
);

export default ProdNav;