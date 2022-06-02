import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import "./Statistics.css"

const Statistics = (props) => {

    const [tickets, setTickets] = useState([])
    const [user, token] = useAuth()


    const pastDeadlinePercent = () => {
        const ticketsAssignedToMe = tickets.filter(t => t.assigned_to.id === user.id)
        let countPastDeadline = 0
        const now = Date()
        ticketsAssignedToMe.forEach(ticket =>{
            if(ticket.deadline < now && !ticket.is_finished){
                countPastDeadline++
            }
        })
        if(countPastDeadline === 0){
            return 100
        }
        else{
            return Math.round((countPastDeadline / ticketsAssignedToMe.length) * 100)
        }
    }

    const completedOnTimePercent = () => {
        const ticketsAssignedToMe = tickets.filter(t => t.assigned_to.id === user.id)
        let countCompletedOnTime = 0
        const now = Date()
        ticketsAssignedToMe.forEach(ticket => {
            if(ticket.deadline < now && ticket.is_finished){//I don't know why this works but using > has countCompletedOnTime staying at 0
                countCompletedOnTime++
            }
        })
        if(countCompletedOnTime === 0){
            return 0
        }
        else{
            return Math.round((countCompletedOnTime / ticketsAssignedToMe.length) * 100)
        }
    }

    useEffect(() => {
        setTickets(props.tickets)
    }, [props.tickets])

    return ( 
        <div className='stat-container'>
            <p>Percentage of my tickets past deadline:    </p>
            {pastDeadlinePercent()}%
            <p>Percentage of my tickets completed on time:    </p>
            {completedOnTimePercent()}%
        </div>
     );
}
 
export default Statistics;