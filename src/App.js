import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




function App() {
  const [btn, setbtn] = useState('Enable Dark Mode')
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.background = "#032845"
      setbtn('Disable Dark Mode')
      showAlert(" Dark Mode has been Activated", "success")
      document.title = "TextUtils - Dark Mode";
    }
    else {
      setMode("light")
      document.body.style.background = "white"
      setbtn("Enable Dark Mode")
      showAlert(" Light Mode has been Activated", "success")
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} btn={btn} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />}>

          </Route>
          <Route exact path="/" element={<Textform heading="Enter your Text to analyse!" mode={mode} showAlert={showAlert} />}>

          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
