import { MDBRadio, MDBBtnGroup, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import "./Home.css"

function Question(props) {


    function onChangeValue(e){
        console.log(e.target.name)
        console.log(e.target.value)
        console.log(e.target.id)
        //call function in parent that handle change and sends the data we want to change
        props.changeGrandParent(props.question,e.target.value)

        //then check conditions to show and hide

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