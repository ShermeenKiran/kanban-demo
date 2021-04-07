import logo from '../logo.svg';
import './Dashboard.css';
import {connect} from 'react-redux';
import {startAction} from '../reducers/actions/StartAction';
import {stopAction}  from '../reducers/actions/StopAction';
import { useState } from "react";
import React from 'react'; 
import { Button} from 'react-bootstrap';
import Modal from 'react-modal';

function Dashboard(props) {

  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  function onClick(){
    return props.rotating ?props.stopAction():props.startAction()
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={"App-logo" + (props.rotating ? "" : "App-logo-paused")} alt="logo" onClick={onClick} />
      </header>
      
      <Button variant="primary"className='create' onClick={handleShow}>
      Create Task
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
    </div>
    
  );
}

const mapStateToProps = state =>({
  ...state
});

const mapDispatchToProps = dispatch => ({
  startAction: () => dispatch(startAction),
  stopAction: () => dispatch(stopAction)
});
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
