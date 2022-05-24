import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import DeleteButton from "../DeleteButton/DeleteButton";
import EditButton from "../EditButton/EditButton";

const TicketTable = ({tickets}) => {

    const [user, token] = useAuth()

    const checkEngineer = () => {
        if(user.is_engineer || user.is_moderator){
            return <EditButton />
        }
    }

    const checkModerator = () => {
        if(user.is_moderator){
            return <DeleteButton />
        }
    }


    return (

        <table>
            {console.log('tickets within tickettable', tickets)}
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
                            {checkEngineer()}
                            {checkModerator()}
                        </tr>
                    )
                })}
            </tbody>
        </table>  

     );
}
 
export default TicketTable;