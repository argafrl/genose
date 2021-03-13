import React, { useState } from 'react';
import { Box, Grid, TextField, Paper, InputAdornment} from '@material-ui/core';
import { Link } from 'react-router-dom';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import { useAuth } from "../config/Auth";
import genose from "../api/genose";
import './LupaPass.scss';
import './Signup.scss';
import MainCarousel from '../component/MainCarousel';

const LupaPass = () => {

    const [Email, setEmail] = useState("");
    const {setAuthTokens} = useAuth();

    const handleSignup = async(e) => {
        e.preventDefault();
        await genose.post("/user/register", {
            email: Email,
        })
        await genose.post("/user/login", {
            email: Email
        }).then((res) => {
            res.status === 200 && setAuthTokens(res.data.data.access_token);
            // setLoggedIn(true);
        })
    }

    return (
        <div className="login">
            <div className="pattern">
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
 
export default LupaPass;