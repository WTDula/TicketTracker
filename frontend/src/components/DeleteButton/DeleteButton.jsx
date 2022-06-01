import React, { useState } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import Button from '@mui/material/Button';


const DeleteButton = (props) => {

    const [user, token] = useAuth()

    async function handleDelete(e) {
        e.preventDefault()
        let confirmation = window.confirm(`Are you sure you want to delete:\nId: ${props.ticket.id}\nName: ${props.ticket.name}\nDescription: ${props.ticket.description}`)
        if(confirmation){
            let request = await axios.delete(`http://127.0.0.1:8000/api/tickets/${props.ticket.id}/`, {
                headers: {
                  Authorization: "Bearer " + token,
                },
            })
        }
        props.fetchTickets()
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
                    }}
                onClick={handleDelete}
            >
                DELETE TICKET {props.ticket.id}
            </Button>
        </div>
     );
}
 
export default DeleteButton;