import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import "./Home.css"

function Submit(props){

    return (
        <MDBTable className={"w-50 p-3 mid-button-child"}>
            <MDBTableHead>
                <tr>
                    <th scope='col'>Question</th>
                    <th scope='col'>Your Answer</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                <tr>
                    <th scope='row'>Default</th>
                    <td>Cell</td>
                </tr>

            </MDBTableBody>
        </MDBTable>
    );
}
export default Submit