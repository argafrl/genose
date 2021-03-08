import { FormControl, Grid, Menu, MenuItem } from '@material-ui/core';
import { Form, Nav, Navbar, Button } from 'react-bootstrap';
import "./Home.scss";
import LOVE from "../assets/image/love.png";
import { Link, NavLink } from 'react-router-dom';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import { useEffect, useState } from 'react';

const Home = () => {
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

    var axios = require('axios');

    var config = {
    method: 'get',
    url: 'https://user-api-genose.herokuapp.com/user/users',
    headers: { }
    };

    useEffect(() => {
        axios
            .get("https://user-api-genose.herokuapp.com/user/users")
            .then(response => console.log(response));
    },[])
    axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    });

    return (
        <div className="Home">
            <div className="Navbar">
                <Navbar variant="dark" className="Navbar">
                    <Link to="/">
                        <Navbar.Brand >
                            <h2>GeNose</h2>
                        </Navbar.Brand>
                    </Link>
                    <Nav className="mx-auto">
                        <NavLink to='/info' className="mr-5 navlink"><Nav active>Informasi</Nav></NavLink>                
                        <NavLink to='/jadwal' className="mr-5 navlink"><Nav active>Atur Jadwal</Nav></NavLink> 
                        <NavLink to='/hasil' className="mr-5 navlink"><Nav active>Hasil Pemeriksaan</Nav></NavLink>
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
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                    </div>
                </Form>
            </Navbar> 
            </div>
            <div className="Body">
                <Grid container spacing={0}>
                    <Grid item xs={6} square className="block atas">
                        <div className="content" id="info">
                            <h2>Informasi Seputar Genose</h2>
                            <p>GeNose merupakan syarat wajib bagi penumpang kereta api sebagai salah satu alternatif alat yang dapat mendeteksi virus Covid-19 dengan harga yang lebih terjangkau. Untuk saat ini, GeNose hanya dioperasikan di beberapa stasiun di pulau Jawa.</p>  
                            <Link to="/info" class="tombol selengkapnya">
                                Selengkapnya
                            </Link>
                        </div>
                    </Grid>
                    <Grid item xs={6} square className="atasKanan">
                        <div className="overlay" />
                    </Grid>
                    <Grid item xs={6} square className="block bawah">
                    <div className="content" id="hasil">
                        <h2>Lihat Hasil Pemeriksaan GeNose</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet a odio volutpat posuere nulla eget pharetra, tincidunt. Ut pellentesque accumsan sed gravida vitae massa massa ut. Consectetur cras suspendisse eget neque.</p>
                        <a class="tombol hasil" href="/">Lihat Hasil</a>
                    </div>
                    </Grid>
                    <Grid item xs={6} square className="block bawah bawah-putih">
                    <div className="content" id="jadwal">
                        <h2>Atur Jadwal Pemeriksaan GeNose</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet a odio volutpat posuere nulla eget pharetra, tincidunt. Ut pellentesque accumsan sed gravida vitae massa massa ut. Consectetur cras suspendisse eget neque.</p>
                        <a class="tombol hasil" href="/">Atur Jadwal</a>
                    </div>
                    </Grid>
                </Grid>
                <div className="footer">
                    <img src={LOVE} alt=""/>
                    <h4>Made With Love<br />Group 9</h4>
                </div>
            </div>
        </div>
        
    );
}
 
export default Home;