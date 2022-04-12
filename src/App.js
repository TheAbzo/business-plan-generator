import './App.css';
import React, {useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home"
import Question from "./Question"
import Section from "./Section";
import ParticlesBg from "particles-bg";



function App() {


    // radio button choices, disabled, id, default choice
    const [data, setData] = useState({"Is your salary above 1000$?":["yes","no",false,0],
        "Is your salary above 2000?":["yes","no",false,1,"yes"],
        "Is your salary above 3000?":["yes","no",false,2,"yes"],
        "Is your salary above 4000?":["yes","no",false,3,"yes"],
        "Is your salary above 5000?":["yes","no",false,4,"yes"]});

    function changeState(id, val) {
        data[id] = val
        setData(data)
        console.log("app updated")
        console.log(data)
    }
    const sliceAt = 3;
    const dataArr = Object.entries(data);
    const obA = Object.fromEntries(dataArr.slice(0, sliceAt));
    const obB = Object.fromEntries(dataArr.slice(sliceAt));

  return (
      <div>
          <ParticlesBg type="circle" bg={true} />
          <Routes>
              <Route exact path = "/" element = {<Home/>}/>
              <Route path = "/first-section" element={ <Section data = {obA} changeState = {changeState} />}/>
              <Route path = "/second-section" element={ <Section data={ obB} changeState = {changeState} />}/>
          </Routes>
      </div>
  );
}

export default App;
