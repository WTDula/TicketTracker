import React, { useState } from 'react';


const SearchBar = (props) => {

    const [searchField, setSearchField] = useState("")

    function handleSubmit(event){
        event.preventDefault()
        let filteredTickets = props.tickets.filter((ticket) => {
            if(searchField === ""){
                // return props.tickets
            }
            else if(
                ticket.name.toLowerCase().includes(searchField.toLowerCase())  
                // ticket.status.toLowerCase().includes(searchField.toLowerCase()) ||
                // ticket.assigned_to.last_name.toLowerCase().includes(searchField.toLowerCase()) ||
                // ticket.assigned_to.first_name.toLowerCase().includes(searchField.toLowerCase()) ||
                // ticket.posted_by.last_name.toLowerCase().includes(searchField.toLowerCase()) ||
                // ticket.posted_by.first_name.toLowerCase().includes(searchField.toLowerCase()) ||
                // ticket.deadline.includes(searchField)
            ){
                return true
            }
        })
        console.log('filtered ticket list from searchbar',filteredTickets)
        props.setTickets(filteredTickets)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            {console.log('Tickets within SearchBar: ', props.tickets)}
            <h2>Search Ticket Database</h2>
            <input type="text" placeholder='Search' value={searchField} onChange={event => setSearchField(event.target.value)} />
            <button type='submit'>Click to Search</button>
        </form>
     );
}
 
export default SearchBar;