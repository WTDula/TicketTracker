import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
  


const TicketCard = (props) => {

    const [expanded, setExpanded] = useState(-1)
    const [tickets, setTickets] = useState([])

    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
      })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      }));

    const handleExpandClick = i => {
        setExpanded(expanded ===  i ? -1 : i);
    }

    useEffect(() => {
        setTickets(props.tickets)
    }, [props.tickets])

    return ( 
        <div>
            {tickets.map((ticket, index) => {
                return (
                    <Card sx={{ 
                        width: 275,
                        display: 'inline-block',
                        bgcolor: '#515151',
                        color: 'white',
                        margin: 1,
                    }} key={index}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} gutterBottom>
                                Posted By: {ticket.posted_by.last_name}, {ticket.posted_by.first_name}
                            </Typography>
                            <Typography variant="h5" component="div">
                                {ticket.name}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }}>
                                Assigned To: {ticket.assigned_to.last_name}, {ticket.assigned_to.first_name}
                            </Typography>
                            <Typography variant="body2">
                                Priority: {ticket.priority === 3 ? "High" : ticket.priority === 2 ? "Medium" : "Low"}
                                <br />
                                Status: {ticket.status}
                                <br />
                                Deadline: {ticket.deadline}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            {/* {user.is_engineer || user.is_moderator ? <EditButton ticket={ticket} fetchTickets={props.fetchTickets}/> : <></>}
                            {user.is_moderator ? <DeleteButton ticket={ticket} fetchTickets={props.fetchTickets}/> : <></>} */}
                            <ExpandMore
                                
                                onClick={() => handleExpandClick(index)}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded === index} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>Description:</Typography>
                                <Typography paragraph>
                                    {ticket.description}
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                )
            })}
        </div>
     );
}
 
export default TicketCard;