import React from 'react';

const Filter = (props) => {

    const displayOptions = () => {
        props.options.forEach(element => {
            return <option value={`${element}`}>{element}</option>
        });
    }


    return ( 
        <select onChange={event => props.setTicketFilter(event.target.value)}>
            {displayOptions()}
        </select>
     );
}
 
export default Filter;