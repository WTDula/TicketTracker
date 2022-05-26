import React, { useState } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';


const DeleteButton = (props) => {

    const [user, token] = useAuth()

    const handleDelete = async () => {
        let request = await axios.delete(`http://127.0.0.1:8000/api/tickets/${props.ticket.id}`, {
            headers: {
              Authorization: "Bearer " + token,
            },
        })
    }

    return ( 
        <div>
            <button onClick={handleDelete}>Delete</button>
        </div>
     );
}
 
export default DeleteButton;