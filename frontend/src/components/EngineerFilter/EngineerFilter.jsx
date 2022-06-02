import React from "react";

const EngineerFilter = (props) => {
    return ( 
        <select onChange={event => props.setTicketFilter(event.target.value)}>
            <option value="All">All</option>
            <option value="My Tickets">My Tickets</option>
            <option value="My Tickets by Priority">My Tickets by Priority</option>
        </select>
     );
}
 
export default EngineerFilter;