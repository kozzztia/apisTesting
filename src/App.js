import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";
import {fetchImages} from "./apis";

function App() {
  useEffect(()=>{
    fetchImages()
  })
  return (
    <div className="App">


    </div>
  );
}

export default App;
