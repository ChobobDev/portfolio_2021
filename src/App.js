import React, {useState, useEffect} from 'react';
import b_logo from './b_logo.png'
import './App.css';
import Desktop from './Desktop.js';
import HashLoader from "react-spinners/HashLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(()=> {
      setLoading(false)
    }, 6000)
  },[])
  return (
    <div className="App">
      {
        loading ?
        <div className="loading_screen">
          <img src={b_logo}  alt="b_logo" className="b_logo" />
          <HashLoader
          color={"#be29ec"} 
          loading={loading} 
          size={30} 
          />

        </div>

        :

        <div className="post-load">
          <Desktop/>
        </div>

      }
     
    </div>
  );
}

export default App;
