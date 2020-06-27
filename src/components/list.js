import React, { useEffect, useState } from 'react';
import CurrencyList from './list/CurrencyList';
import classes from './List.module.css';

const BASE_URL = 'https://api.exchangeratesapi.io/latest'

function List() {
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [currencyValues, setCurrencyValues] = useState([])

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
        setCurrencyValues([data.base, ...Object.values(data.rates)])
      })
  }, [])

  return (
    <div className={classes.listWrapper}>
      <CurrencyList
        currencyValues={currencyValues}
        currencyOptions={currencyOptions} />
    </div>
  );
}

export default List;
