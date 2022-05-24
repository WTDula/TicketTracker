import React from 'react';

const Filter = (props) => {
    return ( 
        <div>
            <button onClick={() => props.setTicketFilter(props.name)}>{props.name}</button>
        </div>
     );
}
 
export default Filter;