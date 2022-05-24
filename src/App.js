import Crud from './Crud';
import React from 'react';
import View from './View';
import {Route,Routes} from 'react-router-dom';

import './App.css';

function App()  
{
  return (
    <>
    <Routes>
      <Route path='/' element={<Crud/>}> </Route>
      <Route path='/View' element={<View/>}></Route>
    </Routes>
    </>
 
  )
}


export default App;
