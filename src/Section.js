import Question from "./Question";
import "./Home.css"
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

function Section(props){

    const QA = props.data;

    let listItem =    Object.entries(QA)
            .map( ([name, answers]) =>
                <MDBListGroupItem key = {name}><Question question = {name}
                              answer1 = {answers[0]}
                              answer2 = {answers[1]}
                              inactive = {answers[2]}
                                  id   = {answers[3]}
                />
                </MDBListGroupItem> );


    console.log(listItem)
    return(
        <MDBListGroup className={"mid-button-child"}>
            {listItem}
        </MDBListGroup>

    );
}

export default Section