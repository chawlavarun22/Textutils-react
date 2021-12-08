import './App.css';
//import About from './Component/About';
import Formbar from './Component/Formbar';
import Navbar from './Component/Navbar';
import React , {useState} from 'react';
import Alert from './Component/Alert';
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null)
  const showAlert =(message,type) => {setAlert ({
      message : message,
      type : type
  })
   setTimeout(() => {
     setAlert(null);
     }, 1000);
  }
   const toggleMode = () => {
     if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'lightblue';
      showAlert("Dark Mode is Enabled","Secondary")
     }
     else{setMode('light');
     document.body.style.backgroundColor = 'white';
     showAlert("Light mode is Enabled","Primary")
    }
   }
  return (
    <>
    <Navbar mode={mode}
    toggleMode = {toggleMode}/>
    <Alert alert={alert}/>
          <Formbar showAlert={showAlert} heading="Enter your text here"/>
    </>
  );
}

export default App;
