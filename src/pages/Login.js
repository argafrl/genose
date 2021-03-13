import React, { useState } from 'react';
import { Box, FormControlLabel, Grid, TextField, Paper, Checkbox, InputAdornment} from '@material-ui/core';
import '../pages/Login.scss';
import {Redirect} from "react-router-dom";
import { Link } from 'react-router-dom';
import {useAuth} from "../config/Auth";
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import genose from '../api/genose';
import MainCarousel from '../component/MainCarousel';

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
            res.status === 200 && setAuthTokens(res.data.data.jwtoken)
            setLoggedIn(true)
            console.log(res);
      }).catch(err => {
            console.log(err);
      })
      }
    
      if(isLoggedIn){
        return <Redirect to={"/"} />
      }
        
    return (
        <div className="login">
            <div className="pattern">
                <Grid container spacing={0}>
                <Grid item xs={6} component={Paper} square className="boxKiri">
                    <Box
                    onSubmit={handleLogin}
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
                                <Link to="/lupapass" variant="body2">
                                Lupa Password?
                                </Link>
                            </div>
                            {/* <a class="btn-masuk" href="/">Masuk</a> */}
                            <button className="btn-masuk" type="submit">
                                Masuk
                            </button>
                            <div className="signup">
                                <Link to="/signup">
                                Belum punya akun? Daftar
                                </Link>
                            </div>
                        </Box>                  
                    </Box>
                </Grid>
                <Grid item xs={6} className="boxKanan" >
                    <MainCarousel />
                </Grid>
                </Grid>
            </div>
        </div>
    );
}
 
export default Login;