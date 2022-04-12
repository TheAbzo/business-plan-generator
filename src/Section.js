import Question from "./Question";
import "./Home.css"
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

function Section(props){

    const QA = props.data;

    function changeParent(keyD,valueD){
        props.changeState(keyD,valueD)
        console.log("section updated")
    }
    let x = Object.entries(QA)
    let listItem =    Object.entries(QA)
            .filter(([name, answers]) => {
                if(answers[3] == 2 && x[0][1][4] == "no") return false; return [name, answers];} )
            .map( ([name, answers]) =>
                <MDBListGroupItem key = {name}><Question question = {name}
                              answer1 = {answers[0]}
                              answer2 = {answers[1]}
                              inactive = {answers[2]}
                                  id   = {answers[3]}
                     changeGrandParent = {changeParent}
                />
                </MDBListGroupItem> );

    //filter gray items, if answer of 4th question is No, 5th question is greyed
    // console.log(x[0][1][4],"hello")
    if (x[0][1][4] == "no"){
        console.log(x[0][1][4],"helooooooooooooo")
    }
    // console.log(listItem)
    return(
        <MDBListGroup className={"mid-button-child"}>
            {listItem}
        </MDBListGroup>

    );
}

export default Section