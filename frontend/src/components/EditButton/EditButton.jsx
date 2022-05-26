import React, { useState, useEffect } from 'react';
import Modal from "react-bootstrap/Modal";
import axios from 'axios';
import useAuth from '../../hooks/useAuth';


const EditButton = (props) => {

    const [user, token] = useAuth()
    const [show, setShow] = useState(false);
    const [name, setName] = useState("")
    const [priority, setPriority] = useState(1)
    const [description, setDescription] = useState("")
    const [status, setStatus] = useState("")
    const [deadline, setDeadline] = useState(Date())
    const [isFinished, setIsFinished] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        e.preventDefault()
        setShow(true);
    }

    async function handleSubmit(event){
        event.preventDefault()
        let newTicket = {
            name: name,
            priority: priority,
            description: description,
            status: status,
            deadline: deadline,
            is_finished: isFinished
        }
        let request = axios.put(`http://127.0.0.1:8000/api/tickets/${props.ticket.id}/`, newTicket, {
            headers: {
              Authorization: "Bearer " + token,
            },
        })
    }
    useEffect(() => {
        setName(props.ticket.name)
        setPriority(props.ticket.priority)
        setDescription(props.ticket.description)
        setStatus(props.ticket.status)
        setDeadline(props.ticket.deadline)
        setIsFinished(props.ticket.is_finished)
    }, [props.ticket.name, props.ticket.priority, props.ticket.description, props.ticket.status, props.ticket.deadline, props.ticket.is_finished])


    return ( 
        <div>
            <button onClick={handleShow}>Edit</button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Update Ticket</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder={props.ticket.name} onChange={event => setName(event.target.value)} />
                        <div>
                            <p>Priority</p>
                            <span> 1 (least urgent)</span>
                            <input type="range" min={1} max={3} onChange={event => setPriority(event.target.value)}/>
                            <span> 3 (most urgent)</span>
                        </div>
                        <textarea placeholder='Update Explanation' onChange={event => setDescription(event.target.value)}/>
                        <label>Status</label>
                        <select onChange={event => setStatus(event.target.value)}>
                            <option value="submitted">Submitted</option>
                            <option value="in progress">In Progress</option>
                            <option value="finished">Finished</option>
                        </select>
                        <label>Deadline</label>
                        <input type="date" value={deadline} onChange={event => setDeadline(event.target.value)} />
                        <div onChange={event => setIsFinished(event.target.value)}>
                            <label>Is the Ticket Finished?</label>
                            <input type="radio" value={true} />Yes
                            <input type="radio" value={false} />No
                        </div>
                        <button type="submit" onClick={handleClose}>Save</button>
                        <button onClick={handleClose}>Close</button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
     );
}
 
export default EditButton;