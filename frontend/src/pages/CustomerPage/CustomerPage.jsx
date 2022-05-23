import React from "react";
import TicketTable from "../../components/TicketTable/TicketTable";
// import { useEffect, useState, useContext } from "react";
import useAuth from "../../hooks/useAuth";

// import axios from "axios";
// basic template for setting up EngineerPage and AdminPage

const CustomerPage = ({tickets}) => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  
  const [user, token] = useAuth();
  //const tickets = useContext(TicketContext)

  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      {tickets && <TicketTable tickets={tickets}/>}
    </div>
  );
};

export default CustomerPage;
