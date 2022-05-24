import React, { useState } from "react";
import Filter from "../../components/Filter/Filter";
import TicketTable from "../../components/TicketTable/TicketTable";
// import { useEffect, useState, useContext } from "react";
import useAuth from "../../hooks/useAuth";

// import axios from "axios";
// basic template for setting up EngineerPage and AdminPage

const CustomerPage = (props) => {

  const [ticketFilter, setTicketFilter] = useState("All")
  const [tickets, setTickets] = useState(props.tickets)

  const showFinishedList = (ticketFilter) => {
    let ticketList
    if(ticketFilter === "All"){
      setTickets(props.tickets)
    }
    else if(ticketFilter === "Completed"){
      ticketList = tickets.filter(t => t.is_finished === true)
    }
    else(
      ticketList = tickets.filter(t => t.is_finished === false)
    )
    console.log(ticketList)
    setTickets(ticketList)
}
  
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
      {showFinishedList(ticketFilter)}
      {tickets && <TicketTable tickets={tickets}/>}
    </div>
  );
};

export default CustomerPage;
