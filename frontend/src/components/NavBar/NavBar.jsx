import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext)
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <b>TicketTracker</b>
            </Link>
          </Typography>
          {user ? (
            <Button 
              style={{background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
              border: 0,
              borderRadius: 3,
              boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
              color: 'white',
              height: 48,
              padding: '0 30px'}}
              onClick={logoutUser}>
                Logout
            </Button>) : (
            <Button 
              style={{background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
              border: 0,
              borderRadius: 3,
              boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
              color: 'white',
              height: 48,
              padding: '0 30px'}}
              onClick={() => navigate("/login")}>
                Login
            </Button>
            )}
        </Toolbar>
      </AppBar>
    </Box>
    // <div className="navBar">
    //   <ul>
    //     <li>
    //       {user ? (
    //         <button onClick={logoutUser}>Logout</button>
    //       ) : (
    //         <button onClick={() => navigate("/login")}>Login</button>
    //       )}
    //     </li>
    //   </ul>
    // </div>
  );
};

export default Navbar;
