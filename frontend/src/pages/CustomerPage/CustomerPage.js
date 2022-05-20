import React from "react";
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
      {tickets &&
        tickets.map((ticket) => (
          <p key={ticket.id}>
            Name: {ticket.name} Status: {ticket.status} Description: {ticket.description} Assigned to: {ticket.assigned_to.last_name}, {ticket.assigned_to.first_name} Posted By: {ticket.posted_by.last_name}, {ticket.posted_by.first_name}
          </p>
        ))}
    </div>
  );
};

export default CustomerPage;
