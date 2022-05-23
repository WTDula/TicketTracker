import React, { useState } from 'react';
import TicketTable from '../TicketTable/TicketTable';


const CustomerFilter = (props) => {


    const showActive = () => {
        const activeTickets = props.tickets.filter(t => t.is_finished === false)
        console.log(activeTickets)
        return <TicketTable tickets={activeTickets} />
    }

    const showCompleted = () => {
        const completedTickets = props.tickets.filter(t => t.is_finished === true)
        console.log(completedTickets)
        return <TicketTable tickets={completedTickets} />
    }

    return ( 
        <div>
            <button onClick={showActive}>Show Active Tickets</button>
            <button onClick={showCompleted}>Show Completed Tickets</button>
        </div>
     );
}
 
export default CustomerFilter;