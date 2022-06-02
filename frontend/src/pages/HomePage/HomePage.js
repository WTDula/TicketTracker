import React, { createContext, useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

import CustomerPage from "../CustomerPage/CustomerPage";
import EngineerPage from "../EngineerPage/EngineerPage";
import TicketModeratorPage from "../TicketModeratorPage/TicketModeratorPage";
import SearchBar from "../../components/SearchBar/SearchBar";
import CreateButton from "../../components/CreateButton/CreateButton";

const HomePage = () => {

  const [user, token] = useAuth();
  const [update, setUpdate] = useState(1.4);
  const [tickets, setTickets] = useState([]);

  const createTicket = async (newTicket) => {
    try {
      let response = await axios.post("http://127.0.0.1:8000/api/tickets/", newTicket, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
    } catch (error) {
      console.log(error.response.data)
    }
    fetchTickets()
  }

  const fetchTickets = async () => {
    try {
      let response = await axios.get("http://127.0.0.1:8000/api/tickets/", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      setTickets(response.data)
    }
    catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {

    fetchTickets();
  }, [token]);

  const determinePage = () => {
    if(!user.is_engineer && !user.is_moderator){//is_engineer false, is_moderator false, user is a customer
      return <CustomerPage tickets={tickets} fetchTickets={fetchTickets}/>
    }
    else if(user.is_engineer && !user.is_moderator){//is_engineer true, is_moderator false, user is an engineer
      return <EngineerPage tickets={tickets} fetchTickets={fetchTickets}/>
    }
    else if(user.is_moderator){//is_moderator true, user is ticketmoderator
      return <TicketModeratorPage tickets={tickets} fetchTickets={fetchTickets}/>
    }
  }

  return (
    <div className="container">
      {determinePage()}
      <CreateButton createTicket={createTicket} tickets={tickets} fetchTickets={fetchTickets}/>
    </div>
  );
};

export default HomePage;
