import React, { useState } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';


const DeleteButton = (props) => {

    const [user, token] = useAuth()

    async function handleDelete(e) {
        e.preventDefault()
        let confirmation = window.confirm(`Are you sure you want to delete:\n id: ${props.ticket.id}\nname: ${props.ticket.name}\ndescription: ${props.ticket.description}`)
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
            <button onClick={handleDelete}>Delete Ticket {props.ticket.id}</button>
        </div>
     );
}
 
export default DeleteButton;