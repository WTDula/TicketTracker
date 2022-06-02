import React, { useState, useEffect } from 'react';
import TicketTable from '../../components/TicketTable/TicketTable';
import useAuth from '../../hooks/useAuth';
import EngineerFilter from '../../components/EngineerFilter/EngineerFilter';
import Statistics from '../../components/Statistics/Statistics';
import SearchBar from '../../components/SearchBar/SearchBar';


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

    useEffect(() =>{
      setTickets(props.tickets)
    }, [props.tickets])

  return ( 
      <div>
          <h1>Dashboard for {user.first_name}!</h1>
          <div className='filter-search'>
            <EngineerFilter setTicketFilter={setTicketFilter}/>
            <SearchBar tickets={tickets} setTickets={setTickets} fetchTickets={props.fetchTickets}/>
          </div>
          {tickets && <TicketTable tickets={tickets}/>}
          <Statistics tickets={props.tickets} />
      </div>
    );
}
 
export default EngineerPage;