import React, {useState} from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home"
import Submit from "./components/Submit";
import Section from "./components/Section";
import ParticlesBg from "particles-bg";


function App() {

    const [data, setData] = useState({"Is your salary above 1000$?":["yes","no",false,0, "yes"],
        "Is your bank balance above 70k $?":["yes","no",false,1,"yes"],
        "Do you have any debts?":["yes","no",false,2,"yes"],
        "Do you have any assests?":["yes","no",false,3,"yes"],
        "Is your salary above 5000?":["yes","no",false,4,"yes"]});
    const [, forceRender] = useState({});

    function changeState(id, val) {

        // changing radio button value
        data[id][4] = val

        //second page condition
        if(id === "Do you have any assests?" && val === "no"){
            data["Is your salary above 5000?"][2] = true
        }else {
            data["Is your salary above 5000?"][2] = false
        }

        //updating state
        setData(data);
        forceRender({});
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
              <Route path = "/first-section" element={ <Section data = {obA} changeState = {changeState} link = "/second-section" />}/>
              <Route path = "/second-section" element={ <Section data= {obB} changeState = {changeState} link = "/submit" />}/>
              <Route path = "/submit" element={ <Submit data = {data} link = "/ " />}/>
          </Routes>
      </div>
  );
}

export default App;
