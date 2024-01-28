import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Signup from './Signup.jsx';
import Login from './Login.jsx';
export const App = () => {

  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route exact path="/signup" element={<Signup />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
};