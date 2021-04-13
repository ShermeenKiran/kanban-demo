import logo from '../logo.svg';
import './Dashboard.css';
import {connect} from 'react-redux';
import {startAction} from '../reducers/actions/StartAction';
import {stopAction}  from '../reducers/actions/StopAction';
import { useState } from "react";
import React from 'react'; 
import { Modal , Button } from 'react-bootstrap';
import TaskBoard from '../dashboard/TaskBoard';
import {createTaskAction} from '../reducers/actions/CreateTaskAction';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function Dashboard(props) {
  const options = ["todo", "wip", "done"];
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [data, setData]  = useState({})

  function handleShow() {    
    setShow(true);
  }

  function handleSave(){
    //here i will update status of the task 
    console.log("title" , title)
    console.log("status", selectedOption)
    setData({id:11,title:title,status:selectedOption})
    handleClose();    
  }
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
      <TaskBoard/>
      <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header >
            <Modal.Title>Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <textarea title="Title" placeholder='Title' onChange={ e =>{setTitle(e.target.value)}}></textarea>
            <textarea title="Description" placeholder='Description' onChange={ e =>{setDescription(e.target.value)}}></textarea>
            <Dropdown options={options} onChange={option =>{ setSelectedOption(option.value)}} value={selectedOption} placeholder="Select an option" />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSave}>
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

const mapDispatchToProps = dispatch  => ({
   startAction: () => dispatch(startAction()),
   stopAction: () => dispatch(stopAction()),
   createTaskAction: () => dispatch(createTaskAction({id:11,title:title,status:status}))
});
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
