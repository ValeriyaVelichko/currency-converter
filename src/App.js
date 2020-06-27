import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Converter from './components/navigation';
import List from './components/list';
import Background from './components/Background';


function App() {
  return (
    <BrowserRouter>
      <div className="appWrapper">
        <Background/>
        <Route path="/currencyconverter" render={() => <Converter />} />
        <Route path="/currencylist" render={() => <List />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
