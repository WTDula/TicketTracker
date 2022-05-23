import React, { useState } from 'react';
import TicketTable from '../../components/TicketTable/TicketTable';


const TicketModeratorPage = ({tickets}) => {
    return ( 
        <div>
            hello moderator
            <TicketTable tickets={tickets} />
        </div>
     );
}
 
export default TicketModeratorPage;