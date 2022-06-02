import React, { useState, useEffect } from "react";
import CustomerFilter from "../../components/CustomerFilter/CustomerFilter";
import TicketCard from "../../components/TicketCard/TicketCard";
import TicketTable from "../../components/TicketTable/TicketTable";
import useAuth from "../../hooks/useAuth";

const CustomerPage = (props) => {

  const [ticketFilter, setTicketFilter] = useState("All")
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    const showFinishedList = (ticketFilter) => {
      let ticketList
      if(ticketFilter === "All"){
        ticketList = props.tickets
      }
      else if(ticketFilter === "Completed"){
        ticketList = tickets.filter(t => t.is_finished === true)
      }
      else{
        ticketList = tickets.filter(t => t.is_finished === false)
      }
      setTickets(ticketList)
    }
    showFinishedList(ticketFilter)
  }, [ticketFilter])

  useEffect(() =>{
    setTickets(props.tickets)
  }, [props.tickets])
  
  const [user, token] = useAuth();

  return (
    <div className="container">
      <h1>Welcome to Ticket Tracker, {user.first_name}!</h1>
      <div className="filter-div">
        <CustomerFilter setTicketFilter={setTicketFilter}/>
      </div>
      {tickets && <TicketCard tickets={tickets} />}
      {/* {tickets && <TicketTable tickets={tickets} fetchTickets={props.fetchTickets}/>} */}
    </div>
  );
};

export default CustomerPage;
