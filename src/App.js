import './App.css';
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Notes from './components/Notes'
import Todo from './components/Todo'
import axios from 'axios';
import { useEffect, useState } from 'react'
import {baseURL, config} from './services'
import {Route, Link, Switch} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      <Route path='/notes'>
        <Notes />
      </Route>
      <Route path='/todo'>
        <Todo />
      </Route>
      <Route path='/:404'>
        <h2>You are on the wrong page!</h2>
        <Link to='/'>Go back home!</Link>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
