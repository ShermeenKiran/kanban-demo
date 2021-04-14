import { Modal , Button } from 'react-bootstrap';

function EditModal({ show, setShow, editItem, editValue, handleChange, onUpdate }) {
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {editItem.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <textarea 
          style={{ width: '100%', padding: '10px' }}
          value={editValue}
          onChange={handleChange}
          rows="4"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={() => onUpdate(editItem, editValue)}>Save</Button>
        <Button onClick={() => setShow(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditModal;