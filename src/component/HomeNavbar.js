import { FormControl, Menu, MenuItem } from '@material-ui/core';
import { Form, Nav, Navbar } from 'react-bootstrap';
import "../pages/Home.scss";
import { Link, NavLink } from 'react-router-dom';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import { useEffect, useState } from 'react';
import { useAuth } from '../config/Auth';
import genose from '../api/genose';

const HomeNavbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const {setAuthTokens} = useAuth();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const Logout = () => {
        setAuthTokens();
        localStorage.clear();
    }
    
    return (
        <div className="Navbar">
            <Navbar variant="dark" className="Navbar">
                <Link to="/">
                    <Navbar.Brand >
                        <h2>GeNose</h2>
                    </Navbar.Brand>
                </Link>
                <Nav className="mx-auto">
                    <NavLink to='/info' className="mr-5 ml-n5 navlink"><Nav active>Informasi</Nav></NavLink>                
                    <NavLink to='/jadwal' className="navlink"><Nav active>Atur Jadwal</Nav></NavLink> 
                    <NavLink to='/hasil' className="ml-5 mr-5 navlink"><Nav active>Hasil Pemeriksaan</Nav></NavLink>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <div>
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
                        color="inherit"
                        >
                        <AccountCircle fontSize="large" style={{ color: 'white' }} />
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem><Link to="/profile" className="menuItem">Profile</Link></MenuItem>
                        <MenuItem onClick={Logout} to="/">Logout</MenuItem>       
                    </Menu>
                    </div>
                </Form>
            </Navbar> 
        </div>
    );
}
 
export default HomeNavbar;