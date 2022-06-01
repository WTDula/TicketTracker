import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const CreateButton = (props) => {

    const [open, setOpen] = useState(false);
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState(1)
    const [user, token] = useAuth()
    const [timeStamp, setTimeStamp] = useState(Date())

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      }

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


    const handleClose = () => setOpen(false);
    const handleOpen = (e) => {
        e.preventDefault()
        setOpen(true);
    }

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
                CREATE NEW TICKET
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Create New Ticket
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <form onSubmit={handleSubmit} className='ml-2'>
                            <div>
                                <label>Name: </label>
                                <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
                            </div>
                            <div>
                                <label>Description: </label>
                                <textarea value={description} onChange={(event) => setDescription(event.target.value)}/>
                            </div>
                            <div>
                                <label>Priority: </label>
                                <span> 1 (least urgent)</span>
                                <input type="range" min={1} max={3} value={priority} onChange={(event) => setPriority(event.target.value)}/>
                                <span> 3 (most urgent)</span>
                            </div>
                            <div>
                                <label>Due Date: </label>
                                <input type="date" value={timeStamp} onChange={(event) => setTimeStamp(event.target.value)} />
                            </div>
                            <button type='submit' onClick={handleClose}>Create</button>
                            <button  onClick={handleClose}>Cancel</button>
                        </form>
                    </Typography>
                </Box>
            </Modal>
        </div>
     );
}
 
export default CreateButton;