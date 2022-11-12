import "./App.css";
import { Footer } from './Partials/Footer';
import {Header} from './Partials/Header';
import {ToDo} from'./ToDo/ToDo';
//import {Blog} from './Blog/Blog';


function App() {
  return (
    <div className="App">     
      <Header/>
      <ToDo/>
      <Footer/>    
    </div>
  );
}

export default App;
