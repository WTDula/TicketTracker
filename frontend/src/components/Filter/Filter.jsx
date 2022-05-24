import React, { useState } from 'react';

const Filter = (props) => {
    return ( 
        <div>
            <button onClick={props.setTicketFilter(props.name)}>{props.name.toUpperCase()}</button>
        </div>
     );
}
 
export default Filter;