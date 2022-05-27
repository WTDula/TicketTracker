import React, { useState, useEffect } from "react";
import Filter from "../../components/Filter/Filter";
import TicketTable from "../../components/TicketTable/TicketTable";
import useAuth from "../../hooks/useAuth";

// import axios from "axios";
// basic template for setting up EngineerPage and AdminPage

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
  //const tickets = useContext(TicketContext)

  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      <div className="filter-div">
        <Filter name={"All"} setTicketFilter={setTicketFilter}/>
        <Filter name={"Active"} setTicketFilter={setTicketFilter}/>
        <Filter name={"Completed"} setTicketFilter={setTicketFilter}/>
      </div>
      {tickets && <TicketTable tickets={tickets} fetchTickets={props.fetchTickets}/>}
    </div>
  );
};

export default CustomerPage;
