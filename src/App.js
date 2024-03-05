
import './App.css';
import About from './Components/About';
import Alerts from './Components/Alerts';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, {useState} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        message: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
    <Alerts alert={alert}/>
    <div className="container my-3">
    <Switch>
    {/* /users --> Component 1
        /users/home --> Component 2 */}
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <Textform showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>
          </Route>
    </Switch>
    </div>
    </Router>
    </> 
  
  );
}

export default App;
