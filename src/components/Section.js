import {MDBBtn, MDBListGroup, MDBListGroupItem} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import Question from "./Question";
import "../styles/Home.css"


function Section(props){

    const QA = props.data;
    let x = Object.entries(QA)

    function changeParent(keyD,valueD){
        props.changeState(keyD,valueD)
        console.log("section updated")
    }

    let listItem =  Object.entries(QA)
            .filter(([name, answers]) => {
                if(answers[3] == 2 && x[0][1][4] == "no")
                    return false;
                return [name, answers];} )
            .map( ([name, answers]) =>
                <MDBListGroupItem key  = {name}><Question question = {name}
                              answer1  = {answers[0]}
                              answer2  = {answers[1]}
                              inactive = {answers[2]}
                                  id   = {answers[3]}
                     changeGrandParent = {changeParent}
                />
                </MDBListGroupItem> );

    return(
        <div>
            <MDBListGroup className={"mid-button-child "}>
                {listItem}
                <MDBBtn className='submit-button w-25' color='info'>
                    <Link className='text-white'  to={props.link}>next</Link>
                </MDBBtn>
            </MDBListGroup>
        </div>
    );
}

export default Section