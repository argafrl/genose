import { FormControl, Menu, MenuItem } from "@material-ui/core";
import { Button, Form, Navbar } from "react-bootstrap";
import '../pages/Info.scss';
import { Link } from 'react-router-dom';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import { useState } from "react";

const BaseArea = (props) => {
    const title = props.title;
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
            <div className="Navbar">
                <Navbar variant="dark" className="Navbar" expand='true'>
                    <Link to="/">
                        <Navbar.Brand >
                            <h2>GeNose</h2>
                        </Navbar.Brand>
                    </Link>
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
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                        </div>
                    </Form>
                </Navbar> 
            </div>
    );
}
 
export default BaseArea;