import React, { useState }  from 'react'; 
import { Modal , Button } from 'react-bootstrap';
import { DONE_STATUS, INPROGRESS_STATUS, TODO_STATUS } from '../constants/constants';


function EditModal({ show, setShow, editItem, editValue, handleChange, onUpdate, addTask }) {

  const [title, setTitle] = useState("");
  const [status, setStatus] = useState(TODO_STATUS);

  console.log("show" , show)
  console.log("edit value" , editValue)

  console.log("title" , editItem.title)

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleStatusChange(event) {
    setStatus(event.target.value);
  }

  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
            {editItem.title? editItem.title: "Add a task"}
            </Modal.Title>
       </Modal.Header>
       <Modal.Body>
        {editItem.title?
          <textarea 
            style={{ width: '100%', padding: '10px' }}
            value={editValue}
            onChange={handleChange}
            rows="4"
          />
        :
        <div>
            <p>Title</p>
            <input type="text" 
              value={title}
              onChange={handleTitleChange}
            /> 
            <p>Status</p>
            <select name="states" value={status} onChange={handleStatusChange}>
              <option value={TODO_STATUS}>Todo</option>
              <option value={INPROGRESS_STATUS}>In progress</option>
              <option value={DONE_STATUS}>Done</option>
            </select>
        </div>
        }
        </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={addTask? () => {
            addTask(title, status);
            setShow(false);
            setTitle("");
            setStatus(TODO_STATUS);
          }
          :() => onUpdate(editItem, editValue)}>Save</Button>
        <Button onClick={() => setShow(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditModal;