import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import TicketTable from '../../components/TicketTable/TicketTable';
import AdminTable from '../../components/AdminTable/AdminTable';
import Filter from '../../components/Filter/Filter';
import Statistics from '../../components/Statistics/Statistics';


const TicketModeratorPage = (props) => {

    const [user, token] = useAuth()
    const [ticketFilter, setTicketFilter] = useState("All")
    const [tickets, setTickets] = useState([])

    useEffect(() => {
        const showFinishedList = (ticketFilter) => {
          let ticketList
          if(ticketFilter === "All"){
            ticketList = props.tickets
          }
          else if(ticketFilter === "My Tickets"){
            ticketList = tickets.filter(t => t.assigned_to.id === user.id)
          }
          else{
            const ticketsAssignedToMe = tickets.filter(t => t.assigned_to.id === user.id)
            ticketList = ticketsAssignedToMe.sort((t1, t2) => (t1.priority < t2.priority) ? 1 : -1)
            console.log("ticketList in order by priority ", ticketList)
          }
          setTickets(ticketList)
        }
        showFinishedList(ticketFilter)
      }, [ticketFilter])
    


    useEffect(() => {
        setTickets(props.tickets)
    }, [props.tickets])

    return ( 
        <div>
            <h1>Home Page for Moderator {user.username}!</h1>
              <Filter name={"All"} setTicketFilter={setTicketFilter}/>
              <Filter name={"My Tickets"} setTicketFilter={setTicketFilter}/>
              <Filter name={"My Tickets by Priority"} setTicketFilter={setTicketFilter}/>
            {tickets && <TicketTable tickets={tickets} />}
            <Statistics tickets={props.tickets} />
            <h2>Ticket Assignment</h2>

        </div>
     );
}
 
export default TicketModeratorPage;