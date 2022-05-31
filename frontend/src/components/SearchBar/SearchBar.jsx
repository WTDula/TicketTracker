import React, { useState } from 'react';


const SearchBar = (props) => {

    const [searchField, setSearchField] = useState("")

    function handleSubmit(event){
        event.preventDefault()
        let filteredTickets = props.tickets.filter((ticket) => {
            if(searchField === ""){
                props.fetchTickets()
            }
            else if(
                ticket.name.toLowerCase().includes(searchField.toLowerCase())  ||
                ticket.status.toLowerCase().includes(searchField.toLowerCase()) ||
                ticket.assigned_to.last_name.toLowerCase().includes(searchField.toLowerCase()) ||
                ticket.assigned_to.first_name.toLowerCase().includes(searchField.toLowerCase()) ||
                ticket.posted_by.last_name.toLowerCase().includes(searchField.toLowerCase()) ||
                ticket.posted_by.first_name.toLowerCase().includes(searchField.toLowerCase()) ||
                ticket.deadline.includes(searchField)
            ){
                return true
            }
        })
        props.setTickets(filteredTickets)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <h2>Search Ticket Database</h2>
            <input type="text" placeholder='Search' value={searchField} onChange={event => setSearchField(event.target.value)} />
            <button type='submit'>Click to Search</button>
        </form>
     );
}
 
export default SearchBar;