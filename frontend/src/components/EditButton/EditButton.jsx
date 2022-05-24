import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import axios from 'axios';


const EditButton = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        e.preventDefault()
        setShow(true);
    }

    function handleSubmit(event){
        event.preventDefault()
        let newTicket = {
            name: name,
            priority: priority,
            description: description,
            status: status,
            deadline: timeStamp,
            is_finished: isFinished
        }
        
    }



    return ( 
        <div>
            <button onClick={handleShow}>Edit</button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Ticket</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                    
                    
                        <button type="submit">Save</button>
                        <button onClick={handleClose}>Close</button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
     );
}
 
export default EditButton;