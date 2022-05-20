import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";
import CustomerPage from "../CustomerPage/CustomerPage";
import EngineerPage from "../EngineerPage/EngineerPage";
import TicketModeratorPage from "../TicketModeratorPage/TicketModeratorPage";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  
  const [user, token] = useAuth();
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/tickets/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        console.log(response.data)
        setTickets(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchTickets();
  }, [token]);

  const determinePage = () => {
    if(!user.isEngineer && !user.isModerator){//isEngineer false, isModerator false, user is a customer
      return <CustomerPage />
    }
    else if(user.isEngineer && !user.isModerator){//isEngineer true, isModerator false, user is an engineer
      return <EngineerPage />
    }
    else if(user.isModerator){//isModerator true, user is ticketmoderator
      return <TicketModeratorPage />
    }
  }

  return (
    <div className="container">
      {determinePage()}
    </div>
  );
};

export default HomePage;
