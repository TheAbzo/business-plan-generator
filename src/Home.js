import ParticlesBg from "particles-bg";
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
    return(
        <div>
            <MDBBtn className='mx-2 mid-button-child' color='info'>

                <Link className='text-white'  to="/first-section">Generate Business Plan</Link>
            </MDBBtn>
            {/*{    <MDBBtn type='submit' className='mb-4' block>*/}
            {/*   */}
            {/*</MDBBtn>*/}
        </div>
    );

}
export default Home