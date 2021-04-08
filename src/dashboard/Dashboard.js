import logo from '../logo.svg';
import './Dashboard.css';
import {connect} from 'react-redux';
import {startAction} from '../reducers/actions/StartAction';
import {stopAction}  from '../reducers/actions/StopAction';
import { useState } from "react";
import React from 'react'; 
import { Modal , Button } from 'react-bootstrap';
import StatusDropdown from '../common/StatusDropDown';
import TaskBoard from '../dashboard/TaskBoard';

function Dashboard(props) {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [save , setSave] = useState(null)
  function handleShow() {    
    setShow(true);
    // here we need to connect store and access array in store and update it
    

  }

  function handleSave(){
    //here i will update status of the task 
  }
  function onClick(){
    return props.rotating ?props.stopAction():props.startAction()
  }

  // function handleCreateTask(){
  //   props.createTask({name , status})

  // }
  // onChange={handleTitleChnage}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={"App-logo" + (props.rotating ? "" : "App-logo-paused")} alt="logo" onClick={onClick} />
      </header>   
      <Button variant="primary"className='create' onClick={handleShow}>
              Create Task
      </Button>
      <TaskBoard/>
      <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header >
            <Modal.Title>Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <textarea title="Title" placeholder='Title' ></textarea>
            <textarea title="Description" placeholder='Description' ></textarea>
            <StatusDropdown  
                title="Select Status"
                save={Option}
              />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer >
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
  // createTask: () => dispatch(createTask)
});
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
