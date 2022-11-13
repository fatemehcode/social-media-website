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
import{QueryClient,QueryClientProvider}from '@tanstack/react-query';
export const AppContext=createContext();
function App() {
  const [username,setUsername]=useState('Fahimeh');
  const client=new QueryClient({defaultOptions:{
    queries:{
      refetchOnWindowFocus:false,
      //refetchInterval:1000,
    }
  }});
  return (
    <div className="App">     
      <AppContext.Provider value={{username}}> 
        <QueryClientProvider client={client}>
             
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
        </QueryClientProvider>
      </AppContext.Provider>    
    </div>
  );
}

export default App;
