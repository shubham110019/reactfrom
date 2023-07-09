import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
   <>
    <button variant="primary" onClick={handleShow}>
        click
      </button>

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
      </Modal>
   </>
  );
}

export default App;
