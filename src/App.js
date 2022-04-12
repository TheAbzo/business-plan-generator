import './App.css';
import React, {useState} from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home"
import Submit from "./Submit";
import Section from "./Section";
import ParticlesBg from "particles-bg";



function App() {


    // radio button choices, disabled, id, default choice
    const [data, setData] = useState({"Is your salary above 1000$?":["yes","no",false,0, "yes"],
        "Is your bank balance above 70k $?":["yes","no",false,1,"yes"],
        "Do you have any debts?":["yes","no",false,2,"yes"],
        "Do you have any assests?":["yes","no",false,3,"yes"],
        "Is your salary above 5000?":["yes","no",false,4,"yes"]});
    const [, forceRender] = useState({});

    function changeState(id, val) {
        console.log(data[id][4], "hhhsahah")
        data[id][4] = val

        console.log("app updated")
        console.log(data)

        if(id === "Do you have any assests?" && val === "no"){
            console.log("we disable last question")
            console.log(data[id][2],"dsadasdddadshasaaa")
            data["Is your salary above 5000?"][2] = true
            console.log(data)
        }else {
            data["Is your salary above 5000?"][2] = false
        }

        console.log(data[id][2],"dsadasdddadshasaaa")
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
              <Route path = "/first-section" element={ <Section data = {obA} changeState = {changeState} />}/>
              <Route path = "/second-section" element={ <Section data= {obB} changeState = {changeState} />}/>
              <Route path = "/submit" element={ <Submit />}/>
          </Routes>
      </div>
  );
}

export default App;
