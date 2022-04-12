import './App.css';
import React, {useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";
import ParticlesBg from "particles-bg";
import { MDBBtn } from 'mdb-react-ui-kit';


function App() {
  return (
      // <div>
      //   <ParticlesBg type="circle" bg={true} />
      //     <MDBBtn className='text-dark' color='light'>
      //         Light
      //     </MDBBtn>
      //     <MDBBtn className='mx-2' color='dark'>
      //         Dark
      //     </MDBBtn>
      //   <h1> Hello </h1>
      // </div>
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
