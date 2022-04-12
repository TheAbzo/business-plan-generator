import './App.css';
import React, {useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home"



function App() {
  return (

      <Routes>
          <Route exact path = "/" element = {<Home/>}/>
          {/*<Route path = "/sign-in" element={ <LogIn/>}/>*/}
          {/*<Route path = "/sign-up" element={ <SignUp/>}/>*/}

          {/*/!* //other work *!/*/}
          {/*<Route exact path = "/user" element={ <InputVoice/>}/>*/}
      </Routes>

  );
}

export default App;
