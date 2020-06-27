import React from 'react'
import classes from './CurrencyList.module.css';

export default function CurrencyList(props) {
  const {
    currencyOptions,
    currencyValues,
  } = props
  const value = currencyValues.map(value => (
    <tr key={value} value={value}>{value}</tr>
  ))
  const key =currencyOptions.map(option => (
    <tr key={option} value={option}>{option}</tr>
  ))
  return (
    <div className={classes.table}>
      <table cellspacing="0">
        <td className={classes.option}>{key}</td>
        <td  className={classes.value}>{value}</td>
      </table>
    </div>
  )
}
