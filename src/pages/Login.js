import React, { useEffect, useState } from 'react';
import { Box, FormControlLabel, Grid, TextField, Paper, Checkbox, InputAdornment} from '@material-ui/core';
import '../pages/Login.scss';
import {Redirect} from "react-router-dom";
import { Link } from 'react-router-dom';
import {useAuth} from "../config/Auth";
import KELUARGA from '../assets/image/keluarga1.png';
import { Carousel } from 'react-bootstrap';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import axios from 'axios';
import genose from '../api/genose';

const Login = () => {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const {setAuthTokens} = useAuth();
    const [isLoggedIn, setLoggedIn] = useState(false);

    const handleLogin= async(e) =>{
        e.preventDefault()
        await genose.post("/user/login",{
          email:Email,
          password:Password
      }).then((res) => {
          res.status === 200 && setAuthTokens(res.data.data.access_token)
          setLoggedIn(true)
      })
      }
    
      if(isLoggedIn){
        return <Redirect to={"/"} />
      }
        
    return (
        <div className="login">
            <div className="globalStyles">
                <Grid container spacing={0}>
                <Grid item xs={6} component={Paper} square className="boxKiri">
                    <Box
                    sx={{
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}
                    > 
                        <div className="title">
                            <h2>Selamat Datang</h2>
                            <p>Selamat datang di website informatif dan pemesanan pemeriksaan GeNose</p>
                        </div>          
                        <Box
                        component="form"
                        onSubmit={handleLogin}
                        noValidate
                        sx={{
                            width: '100%', // Fix IE11 issue.
                            mt: 1,
                        }}
                        // onSubmit={handleLogin}
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
                                autoFocus
                                focused
                                InputLabelProps={{
                                shrink: true,
                                }}
                                InputProps={{
                                    endAdornment: <InputAdornment position="start"><AlternateEmailIcon className="textfield-icon" /></InputAdornment>,
                                }}
                                className="textfield"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                margin="normal"
                                fullWidth
                                name="password"
                                label="Kata Sandi"
                                placeholder="Masukkan kata sandi anda"
                                type="password"
                                id="password"
                                variant="outlined"
                                autoComplete="current-password"
                                focused
                                InputLabelProps={{
                                shrink: true,
                                }}
                                InputProps={{
                                    endAdornment: <InputAdornment position="start"><LockOpenIcon className="textfield-icon" /></InputAdornment>,
                                }}
                                className="textfield"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <div className="forgot">
                                <Link href="#" variant="body2">
                                Forgot password?
                                </Link>
                            </div>
                            {/* <a class="btn-masuk" href="/">Masuk</a> */}
                            <Link to="/" className="btn-masuk" type="submit">
                                Masuk
                            </Link>
                            <div className="signup">
                                <Link to="/signup">
                                Belum punya akun? Daftar
                                </Link>
                            </div>
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
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lacinia eget tincidunt ac. Tortor urna, tortor eleifend orci, aliquam quis facilisis. Felis vitae aenean aliquet curabitur. Nulla maecenas mollis non at est rutrum sapien, faucibus. Egestas massa lacus donec et pellentesque nam tincidunt. Diam, eleifend volutpat ullamcorper varius massa. Velit nulla vel quis ultrices morbi.</p>
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
 
export default Login;