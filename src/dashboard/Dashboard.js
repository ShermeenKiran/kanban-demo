import './Dashboard.css';
import React, { useState } from 'react'; 
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { changeStatusAction } from '../actions/changeStatusAction';
import { changeTitleAction } from '../actions/changeTitleAction';
import { addAction } from '../actions/addAction';
import TaskBoard from '../Taskboard/TaskBoard';
import TaskModal from '../common/TaskModal';

function Dashboard(props) {
  // boolean to control "edit task" modal
  const [editModalShow, setEditeditModalShow] = useState(false);
  // boolean to control "add task" modal
  const [addModalShow, setAddModalShow]       = useState(false);
  // string to set to value of task being edited.
  const [editValue, setEditValue] = useState("");
  // object of task being edited.
  const [editItem, setEditItem] = useState({ 
    _id: null,
    title: null,
    status: null,  
  });

  // when edit button has been clicked
  function onEdit(item) {
    // set values and open modal.
    console.log("item" , item)
    if(item && item.title){
      setEditItem(item);
      setEditValue(item.title);
      setAddModalShow(true);
    }
    else
    setAddModalShow(true)
  }
  function onMove(id, status) {
    props.changeStatusAction(id, status);
  }

  // when the task has been updated by clicking "save" in edit modal.
  function onUpdate(editItem, editValue) {
    // clear edit values/items.
    setEditeditModalShow(false);
    setEditValue("");
    setEditItem({ 
      _id: null,
      title: null,
      status: null,  
    });

    props.changeTitleAction(editItem._id, editValue);
  }

  function handleChange(event) {
    setEditValue(event.target.value)
  }

  function addTask(title, status) {
    props.addAction(title, status);
  }

  return (
    <div className="App">
      {/*Model will be used for both add new task and update existing*/}
      <TaskModal 
        show={addModalShow?addModalShow:editModalShow}
        setShow={setAddModalShow?setAddModalShow:setEditeditModalShow}
        editItem={editItem}
        editValue={editValue}
        handleChange={handleChange}
        onUpdate={onUpdate}
        addTask={addTask}
      />

      <h1 style={{ marginBottom: '20px' }}> Kanban Board </h1>
      <Button 
        variant="success" 
        onClick={() => setAddModalShow(true)}
        style={{ marginBottom: '20px' }}
      >
        Add
      </Button>

      <TaskBoard
        onEdit={onEdit}
        onMove={onMove}
      />
    </div>
  );
}

const mapStateToProps = state =>({
  ...state
});

const mapDispatchToProps = dispatch  => ({
  changeStatusAction: (id, status) => dispatch(changeStatusAction(id, status)),
  changeTitleAction: (id, title) => dispatch(changeTitleAction(id, title)),
  addAction: (title, status) => dispatch(addAction(title, status)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
