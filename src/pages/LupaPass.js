import React, { useState } from 'react';
import { Box, Grid, TextField, Paper, InputAdornment} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import KELUARGA from '../assets/image/keluarga1.png';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import { useAuth } from "../config/Auth";
import genose from "../api/genose";
import './LupaPass.scss'

const LupaPass = () => {

    const [Email, setEmail] = useState("");
    const {setAuthTokens} = useAuth();
    const [isLoggedIn, setLoggedIn] = useState(false);

    const handleSignup = async(e) => {
        e.preventDefault();
        await genose.post("/user/register", {
            email: Email,
        })
        await genose.post("/user/login", {
            email: Email
        }).then((res) => {
            res.status === 200 && setAuthTokens(res.data.data.access_token);
            setLoggedIn(true);
        })
    }

    return (
        <div className="lupa-pass">
            <div className="globalStyles">
                <Grid container spacing={0}>
                <Grid item xs={6} component={Paper} square className="boxKiri boxKiri-signup">
                <Box
                    onSubmit={handleSignup}
                    sx={{
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}
                > 
                    <div className="title">
                    <h2>Lupa Password?</h2>
                    <p>Masukkan email anda dan kami akan mengirim link untuk menghapus password anda</p>
                    </div>          
                    <Box
                    component="form"
                    noValidate
                    sx={{
                        width: '100%', // Fix IE11 issue.
                        mt: 1,
                    }}
                    >
                    <TextField
                        margin="normal"
                        fullWidth
                        id="email"
                        variant="outlined"
                        label="E-mail"
                        placeholder="example@gmail.com"
                        name="email"
                        autoComplete="email"
                        focused
                        InputLabelProps={{
                        shrink: true,
                        }}
                        inputProps={{style: {padding: 20}}}
                        InputProps={{
                            endAdornment: <InputAdornment position="start"><AlternateEmailIcon className="textfield-icon" /></InputAdornment>,
                        }}
                        className="textfield"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {/* <button className="btn-masuk" type="submit">
                        Daftar
                    </button> */}
                    <div className="tombolLupa">
                            <div className="tombol-wrapper">
                                <Link to="/login">
                                    <button className="tombol tipis" type="submit">Kembali</button>
                                </Link>
                            </div>
                            <div className="tombol-wrapper">
                                <button className="tombol" type="submit">Kirim</button>
                            </div>
                    </div>
                    {/* <div className="tombol-wrapper">
                        <button className="tombol" type="submit">Kirim</button>
                    </div> */}
                    {/* <div className="signup">
                        <Link to="/login">
                            Kembali ke Login
                        </Link>
                    </div> */}
                    </Box>
                </Box>
                </Grid>
                <Grid item xs={6} className="boxKanan" >
                <div className="pattern">
                    <Carousel className="carousel" indicators='false'>
                        <Carousel.Item>
                            <div className="content-carousel">
                                <div className="lingkaran">
                                    <img
                                    className="d-block"
                                    src={KELUARGA}
                                    alt="First slide"
                                    />
                                </div>                          
                            </div>                 
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="content-carousel">
                                <h2>Kenapa sih harus pakai GeNose?</h2>
                                <p>Kelebihan pemeriksaan GeNose C19 selain murah, tidak sakit untuk digunakan. GeNose sendiri juga merupakan buatan anak bangsa. Jadi tunggu apa lagi ayo daftar!</p>
                                <Link to="/signup" className="btn-masuk">
                                    Daftar
                                </Link>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="content-carousel">
                                <h2>Apa itu GeNose?</h2>
                                <p>GeNose merupakan syarat wajib bagi penumpang kereta api sebagai salah satu alternatif alat yang dapat mendeteksi virus Covid-19 dengan harga yang lebih terjangkau. Untuk saat ini, GeNose hanya dioperasikan di beberapa stasiun di pulau Jawa. </p>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
                </Grid>
                </Grid>
            </div>
        </div>
    );
}
 
export default LupaPass;