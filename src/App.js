import "./App.css";
import { Footer } from './Partials/Footer';
import {Header} from './Partials/Header';
import {ToDo} from'./ToDo/ToDo';
import {Blog} from './Blog/Blog';
import {UsingAPIs} from "./UsingAPIs";


function App() {
  return (
    <div className="App">     
      <Header/>
      <UsingAPIs/>
      <Footer/>    
    </div>
  );
}

export default App;
