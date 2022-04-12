import { MDBRadio, MDBBtnGroup, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import "../styles/Home.css"

function Question(props) {


    function onChangeValue(e){
        props.changeGrandParent(props.question,e.target.value)
    }

    return(
        <div className="m-2">
            <MDBRow className='d-flex justify-content-center'>
            <h1> {props.question}</h1>
                <MDBCol md='10' >
                    <MDBBtnGroup className="mid-button-parent" onChange={onChangeValue}>
                        <MDBRadio  btn btnColor='info' id={props.id +'1'} name={props.id} wrapperTag='span' disabled={props.inactive} label={props.answer1} value={props.answer1} defaultChecked/>
                        <MDBRadio  btn btnColor='info' id={props.id +'2'} name={props.id} wrapperTag='span'  disabled={props.inactive} label={props.answer2} value={props.answer2} />
                    </MDBBtnGroup>
                </MDBCol>

            </MDBRow>
        </div>
    );
}
export default Question