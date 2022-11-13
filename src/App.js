import "./App.css";
import React, { useState,createContext } from 'react';

import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {Navbar} from './Partials/Navbar';
import { Footer } from './Partials/Footer';
import {Header} from './Partials/Header';
import {ToDo} from'./Pages/ToDo/ToDo';
import {Blog} from './Pages/Blog/Blog';
import {UsingAPIs} from "./Pages/UsingAPIs";
import {Home} from './Pages/Home';
import { TopComponent } from "./Pages/useContextSample/TopComponent";

export const AppContext=createContext();
function App() {
  const [username,setUsername]=useState('Fahimeh');
  return (
    <div className="App">     
      <AppContext.Provider value={{username}}>      
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/ToDo" element={<ToDo/>} />
            <Route path="/Blog" element={<Blog/>} />          
            <Route path="/UsingAPIs" element={<UsingAPIs/>}/>
            <Route path="/TopComponent" element={<TopComponent/>}/>
            <Route path="*" element={<h1>Page not Found</h1>}/>

          </Routes>          
        </Router>      
        <Footer/>
      </AppContext.Provider>    
    </div>
  );
}

export default App;
