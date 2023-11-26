import React from 'react';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import { HashRouter, Route, Routes } from "react-router-dom"
import HomePage from './components/Pages/Home';
import SignInPage from './components/Pages/SignIn';
import SignUpPage from './components/Pages/SignUp';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/login' element={<SignInPage/>}/>
            <Route path='/register' element={<SignUpPage/>}/>
          </Routes>
        <Footer/>
      </div>
    </HashRouter>
  );
}

export default App;
