import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import AssignButton from '../AssignButton/AssignButton';


const AdminTable = (props) => {

    const [tickets, setTickets] = useState([])
    const [user, token] = useAuth()

    const engineerList = tickets.map(e => e.assigned_to.id)//an array of all user objects ids that are assigned to at least one ticket in tickets
    console.log("list of all engineers: ", engineerList)
    const distinctEngineers = [...new Set(engineerList)]
    console.log("list of distinct engineers ids: ", distinctEngineers)

    useEffect(() => {
        setTickets(props.tickets)
    }, [props.tickets])

    //display a table showing each engineer and what tickets are assigned to them then
    //show unassigned tickets using arrays in arrays
    
    const unassignedTickets = tickets.filter(t => t.assigned_to.id === 1)
    console.log("unassigned tickets: ", unassignedTickets)
    const assignedTickets = tickets.filter(t => t.assigned_to.id != 1).sort((t1, t2) => (t1.assigned_to.last_name > t2.assigned_to.last_name) ? 1 : -1)
    console.log("assigned tickets: ", assignedTickets)

    return ( 
        <div>
            <h2>Assigned Tickets</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Description</th>
                        <th>Assigned To</th>
                        <th>Posted By</th>
                        <th>Deadline</th>
                        <th>Completed?</th>
                    </tr>
                </thead>
                <tbody>
                    {assignedTickets.map((ticket, index) => {
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
            <h2>Unassigned Tickets</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Description</th>
                        <th>Assigned To</th>
                        <th>Posted By</th>
                        <th>Deadline</th>
                        <th>Completed?</th>
                    </tr>
                </thead>
                <tbody>
                    {unassignedTickets.map((ticket, index) => {
                        return (
                            <tr key={index}>
                                <td>{ticket.name}</td>
                                <td>{ticket.status}</td>
                                <td>{ticket.description}</td>
                                <td><AssignButton ticket={ticket} engineers={distinctEngineers} fetchTickets={props.fetchTickets}/></td>
                                <td>{ticket.posted_by.last_name}, {ticket.posted_by.first_name}</td>
                                <td>{ticket.deadline}</td>
                                <td>{ticket.is_finished ? "Yes" : "No"}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table> 
        </div>
    )
}
 
export default AdminTable;