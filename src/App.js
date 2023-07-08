import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
   <>
    <Button variant="primary" onClick={handleShow}>
        click
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>form</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className='title'>name</div>
          <input type="text"/>

          <div className='title'>last name</div>
          <input type="text"/>

          <div className='title'>email</div>
          <input type="text"/>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
   </>
  );
}

export default App;
