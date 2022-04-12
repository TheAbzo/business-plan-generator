import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Thankyou() {
    return(
        <div className={"m-4"}>
            <h1 className={"black center"}>Your answers are submitted successfully</h1>
            <div>
                <MDBBtn className='mx-2 mid-button-child' color='info'>
                    <Link className='text-white'  to="/">Back to the home page</Link>
                </MDBBtn>
            </div>
        </div>
    );
}
export default Thankyou