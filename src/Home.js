import ParticlesBg from "particles-bg";
import { MDBBtn } from 'mdb-react-ui-kit';
import "./Home.css";

function Home() {
    return(
        <div>
          <ParticlesBg type="circle" bg={true} />
            <MDBBtn className='mx-2 mid-button-child' color='info'>
                Generate Business Plan
            </MDBBtn>
            {/*<MDBBtn className='mx-2' color='dark'>*/}
            {/*    Dark*/}
            {/*</MDBBtn>*/}
        </div>
    );

}
export default Home