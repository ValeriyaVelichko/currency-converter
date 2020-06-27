import React from 'react'
import classes from './Background.module.css';
import { NavLink } from 'react-router-dom';

export default function Background(props) {

  return (
    <div className={classes.contentWrapper}>
      <h1>currency app</h1>
      <div className={classes.controlls}>
        <NavLink to="/" className={classes.button}>Home</NavLink>
        <NavLink to="/currencyconverter" className={classes.button}>Converter</NavLink>
        <NavLink to="/currencylist" className={classes.button}>List</NavLink>
      </div>
    </div>
  )
}
