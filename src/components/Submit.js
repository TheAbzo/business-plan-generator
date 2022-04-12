import {MDBTable, MDBTableHead, MDBTableBody, MDBListGroupItem, MDBBtn} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import "../styles/Home.css"

function Submit(props){

    const QA = props.data;
    let x = Object.entries(QA)

    console.log(props.data)
    let listItem =  Object.entries(QA)
        .map( ([name, answers]) =>
            <tr key={name}>
                <th scope='row'>{name}</th>
                <td>{x[answers[3]][1][4]}</td>
            </tr>
             );

    function sendData(){
        fetch('http://localhost:3001/',{
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(props.data)
        }).then(()=>{
            alert("Your answers are submitted successfully")
        })
    }

    return (
        <div>
            <MDBTable className={"w-50 p-3 mid-button-child"}>
                <MDBTableHead>
                    <tr>
                        <th scope='col'>Question</th>
                        <th scope='col'>Your Answer</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {listItem}
                </MDBTableBody>
                <MDBBtn className='submit-button w-25' color='info'>
                    <Link onClick={sendData} className='text-white'  to={props.link}>Submit</Link>
                </MDBBtn>
            </MDBTable>
        </div>
    );
}
export default Submit