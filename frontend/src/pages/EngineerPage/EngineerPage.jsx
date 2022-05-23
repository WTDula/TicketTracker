import React, { useState } from 'react';
import TicketTable from '../../components/TicketTable/TicketTable';


const EngineerPage = ({tickets}) => {
    return ( 
        <div>
            hello engineer
            <TicketTable tickets={tickets}/>
        </div>
     );
}
 
export default EngineerPage;