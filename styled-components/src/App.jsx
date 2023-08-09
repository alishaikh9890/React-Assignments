import './App.css';
import React from "react";

import {Button} from "./Components/Button"


function App() {

const [theme, setTheme] = React.useState("gr")

  return (
    <div className="App">
    <br/>
     <Button theme={theme}>INCREASE</Button>
     
     <Button theme = {theme}>DECREASE</Button>

     <br/>
     <br/>


     <button onClick={() => setTheme(theme === "gr" ? "bl" : "gr")}>Change Theme</button>
  
    </div>
  );
}

export default App;
