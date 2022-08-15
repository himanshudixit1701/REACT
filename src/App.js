// import logo from './logo.svg';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, {useState} from 'react';


function App() {
  const [mode, setMode] = useState('light');  // weather dark mode i enabled or not
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      document.body.style.color = 'white';
    }
    else{
    		setMode('light');
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
  }
  return (
    <>
    {/* <Navbar title='TextUtils' aboutText='About TextUtils'/> */}
    {/* <Navbar/> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-5" >
      <Textform heading="Enter the text below to analyze" mode={mode}/> 
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;

