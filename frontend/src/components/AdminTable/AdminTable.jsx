import React, { useState, useEffect } from 'react';


const AdminTable = (props) => {

    const [tickets, setTickets] = useState([])

    useEffect(() => {
        setTickets(props.tickets)
    }, [props.tickets])

    //display a table showing each engineer and what tickets are assigned to them then
    //show unassigned tickets using arrays in arrays

    return ( 
        <table>
            <thead>
                <tr>
                    <th>Engineer</th>
                    <th>Status</th>
                    <th>Description</th>
                    <th>Assigned To</th>
                    <th>Posted By</th>
                    <th>Deadline</th>
                    <th>Completed?</th>
                </tr>
            </thead>
            <tbody>
                {tickets.map((ticket, index) => {
                    return (
                        <tr key={index}>
                            <td>{ticket.name}</td>
                            <td>{ticket.status}</td>
                            <td>{ticket.description}</td>
                            <td>{ticket.assigned_to.last_name}, {ticket.assigned_to.first_name}</td>
                            <td>{ticket.posted_by.last_name}, {ticket.posted_by.first_name}</td>
                            <td>{ticket.deadline}</td>
                            <td>{ticket.is_finished ? "Yes" : "No"}</td>
                            
                        </tr>
                    )
                })}
            </tbody>
        </table>  
     );
}
 
export default AdminTable;