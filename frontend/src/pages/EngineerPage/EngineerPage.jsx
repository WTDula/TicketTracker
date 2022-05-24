import React, { useState, useEffect } from 'react';
import TicketTable from '../../components/TicketTable/TicketTable';
import useAuth from '../../hooks/useAuth';
import Filter from '../../components/Filter/Filter';


const EngineerPage = (props) => {

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
              console.log('tickets inside engineerpage useffect', tickets)
            ticketList = tickets.filter(t => t.assigned_to === user.id)
            console.log(user.id)
            console.log(ticketList)
          }
          else(
            ticketList = tickets.filter(t => t.is_finished === false)
          )
          setTickets(ticketList)
        }
        showFinishedList(ticketFilter)
      }, [ticketFilter])
    
      useEffect(() =>{
        setTickets(props.tickets)
      }, [props.tickets])

    return ( 
        <div>
            <h1>Home Page for Engineer {user.username}!</h1>
                <Filter name={"All"} setTicketFilter={setTicketFilter}/>
                <Filter name={"My Tickets"} setTicketFilter={setTicketFilter}/>
                <Filter name={"Tickets by Priority"} setTicketFilter={setTicketFilter}/>

            {tickets && <TicketTable tickets={tickets}/>}
        </div>
     );
}
 
export default EngineerPage;