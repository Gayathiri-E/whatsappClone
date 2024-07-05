import React from 'react'
import Login from './components/login'
import "./App.css"
import {useStateValue} from "./components/contextApi/StateProvider"

const App=() =>{
const [{user}] =useStateValue();

  return (
    <div className='app'>
      {!user ?
      <Login/>:
      <h1>Loggedin</h1>
      }
    </div>
  );
};

export default App