import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import useAuth from '../../hooks/useAuth';


const CreateButton = (props) => {

    const [show, setShow] = useState(false)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState(0)
    const [user, token] = useAuth()
    const [timeStamp, setTimeStamp] = useState(Date())

    function handleSubmit(event){
        event.preventDefault()
        let newTicket = {
            name: name,
            priority: priority,
            description: description,
            posted_by: user.id,
            deadline: timeStamp,
        }
        props.createTicket(newTicket)
    }


    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        e.preventDefault()
        setShow(true);
    }

    return ( 
        <div>
            <button onClick={handleShow}>Create New Ticket</button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    {console.log(user.id)}
                    <h2>Create New Ticket</h2>
                    <form onSubmit={handleSubmit}>
                        <label>Name</label>
                        <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
                        <label>Description</label>
                        <input type="textarea" value={description} onChange={(event) => setDescription(event.target.value)}/>
                        <label>Priority</label>
                        <span> 1 (least urgent)</span>
                        <input type="range" min={1} max={3} value={priority} onChange={(event) => setPriority(event.target.value)}/>
                        <span> 3 (most urgent)</span>
                        <label>Date</label>
                        <input type="date" value={timeStamp} onChange={(event) => setTimeStamp(event.target.value)} />
                        <button type='submit' onClick={handleClose}>Create</button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
     );
}
 
export default CreateButton;