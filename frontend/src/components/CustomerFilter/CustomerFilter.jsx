import React from 'react';

const CustomerFilter = (props) => {

    return ( 
        <select onChange={event => props.setTicketFilter(event.target.value)}>
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Active">Active</option>
        </select>
     );
}
 
export default CustomerFilter;