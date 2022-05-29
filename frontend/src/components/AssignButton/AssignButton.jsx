import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const AssignButton = (props) => {

    const [assignedTo, setAssignedTo] = useState("")
    const body = {
        "assigned_to" : assignedTo
    }
    const [user, token] = useAuth()

    async function handleSubmit(event) {
        event.preventDefault()
        try {
            let request = await axios.patch(`http://127.0.0.1:8000/api/tickets/${props.ticket.id}/`, body, {
                headers: {
                  Authorization: "Bearer " + token,
                },
            })
            console.log("Request data", request.data)
        } catch (error) {
            console.log(error.message)
        }
        props.fetchTickets()
    }

    return (
        <form onSubmit={handleSubmit}>
            <select onChange={event => setAssignedTo(event.target.value)}>
                <option value={3}>Ineer, Eng</option>
                <option value={9}>Wayne, Thomas</option>
                <option value={10}>Batman</option>
                <option value={11}>Eratortoo, Model</option>
            </select>
            <button type="submit">Assign</button>
        </form>
    )
}
 
export default AssignButton;