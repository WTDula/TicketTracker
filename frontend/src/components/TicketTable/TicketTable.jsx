import React, {useEffect, useState} from "react";
import useAuth from "../../hooks/useAuth";
import DeleteButton from "../DeleteButton/DeleteButton";
import EditButton from "../EditButton/EditButton";
import "./TicketTable.css"

const TicketTable = (props) => {

    const [user, token] = useAuth()
    const [update, setUpdate] = useState(1)
    const [tickets, setTickets] = useState([])

    const reloadPage = () => {
        setUpdate(Math.random * 10)
    }
    

    useEffect(() => {
        setTickets(props.tickets)
    }, [props.tickets])

    return (
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
                            {user.is_engineer || user.is_moderator ? <EditButton ticket={ticket} fetchTickets={props.fetchTickets}/> : <></>}
                            {user.is_moderator ? <DeleteButton ticket={ticket} fetchTickets={props.fetchTickets}/> : <></>}
                        </tr>
                    )
                })}
            </tbody>
        </table>  
     );
}
 
export default TicketTable;