import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar'; 
import TextForm from './components/TextForm';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [altmode, setAltMode] = useState("dark");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setalert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setmode("dark");
      setAltMode("light");
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setmode('light');
      setAltMode("dark");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar title='TextUtils' mode={mode} altmode={altmode} toggleMode={toggleMode}></Navbar>
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
          <TextForm heading="The text can go here" altmode={altmode} showAlert={showAlert} />
            {/* <Route exact path="/about" element={<About />} /> */}
            
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
