import './App.css';
import React, {useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home"
import Question from "./Question"



function App() {
  return (

      <Routes>
          <Route exact path = "/" element = {<Home/>}/>
          <Route path = "/first-section" element={ <Question question = "Is your salary above 1000$?" answer1 = "Yes" answer2 = "No" inactive = {false} />}/>
          {/*<Route path = "/sign-up" element={ <SignUp/>}/>*/}

          {/*/!* //other work *!/*/}
          {/*<Route exact path = "/user" element={ <InputVoice/>}/>*/}
      </Routes>

  );
}

export default App;
