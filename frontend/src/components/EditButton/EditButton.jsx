import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const EditButton = (props) => {

    const [user, token] = useAuth()
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("")
    const [priority, setPriority] = useState(1)
    const [description, setDescription] = useState("")
    const [status, setStatus] = useState("")
    const [deadline, setDeadline] = useState(Date())
    const [isFinished, setIsFinished] = useState(false)

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: '#303030',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      }

    const handleClose = () => setOpen(false);
    const handleOpen = (e) => {
        e.preventDefault()
        setOpen(true);
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
        try{
            let request = await axios.put(`http://127.0.0.1:8000/api/tickets/${props.ticket.id}/`, newTicket, {
                headers: {
                Authorization: "Bearer " + token,
                },
            })
        }
        catch (error) {
            console.log(error.message)
        }
        props.fetchTickets()
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
            <Button
                style={{
                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                    border: 0,
                    borderRadius: 3,
                    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                    color: 'white',
                    marginBottom: '1px',
                    padding: '0 30px'}}
                onClick={handleOpen}
            >
                EDIT
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Update Ticket
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Name: </label>
                                <input type="text" placeholder={props.ticket.name} onChange={event => setName(event.target.value)} />
                            </div>
                            <div>
                                <label>Priority: </label>
                            </div>
                            <div>
                                <span> 1 (least urgent)</span>
                                <input type="range" min={1} max={3} onChange={event => setPriority(event.target.value)}/>
                                <span> 3 (most urgent)</span>
                            </div>
                            <div>
                                <label>Update Description: </label>
                                <textarea placeholder='Update Explanation' onChange={event => setDescription(event.target.value)}/>
                            </div>
                            <div>
                                <label>Status</label>
                                <select onChange={event => setStatus(event.target.value)}>
                                    <option value="submitted">Submitted</option>
                                    <option value="in progress">In Progress</option>
                                    <option value="finished">Finished</option>
                                </select>
                            </div>
                            <div>
                                <label>Deadline</label>
                                <input type="date" value={deadline} onChange={event => setDeadline(event.target.value)} />
                            </div>
                            <div onChange={event => setIsFinished(event.target.value)}>
                                <label>Is the Ticket Finished?</label>
                                <input type="radio" value={true} />Yes
                                <input type="radio" value={false} />No
                            </div>
                            <button type="submit" onClick={handleClose}>Save</button>
                            <button onClick={handleClose}>Close</button>
                        </form>
                    </Typography>
                </Box>
            </Modal>
        </div>
     );
}
 
export default EditButton;