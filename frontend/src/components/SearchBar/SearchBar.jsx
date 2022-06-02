import React, { useState } from 'react';
import Button from '@mui/material/Button';


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
            <h3>Search Ticket Database</h3>
            <input type="text" placeholder='Search' value={searchField} onChange={event => setSearchField(event.target.value)} />
            <Button 
                type='submit'
                style={{
                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                    border: 0,
                    borderRadius: 3,
                    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                    color: 'white',
                    marginBottom: '1px',
                    height: '20px',
                    }}
            >
                CLICK TO SEARCH
            </Button>
        </form>
     );
}
 
export default SearchBar;