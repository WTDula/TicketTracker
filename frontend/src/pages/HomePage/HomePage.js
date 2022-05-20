import React, { createContext, useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

import CustomerPage from "../CustomerPage/CustomerPage";
import EngineerPage from "../EngineerPage/EngineerPage";
import TicketModeratorPage from "../TicketModeratorPage/TicketModeratorPage";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  
  const [user, token] = useAuth();
  // const TicketContext = createContext();
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/tickets/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setTickets(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchTickets();
  }, [token]);

  const determinePage = () => {
    if(!user.is_engineer && !user.is_moderator){//is_engineer false, is_moderator false, user is a customer
      return <CustomerPage tickets={tickets} />
    }
    else if(user.is_engineer && !user.is_moderator){//is_engineer true, is_moderator false, user is an engineer
      return <EngineerPage tickets={tickets}/>
    }
    else if(user.is_moderator){//is_moderator true, user is ticketmoderator
      return <TicketModeratorPage tickets={tickets}/>
    }
  }

  return (
    // <TicketContext.Provider value={tickets}>
      <div className="container">
        {determinePage()}
      </div>
    // </TicketContext.Provider>
  );
};

export default HomePage;
