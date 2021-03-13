import React, { useState } from 'react';
import { Box, Grid, TextField, Paper, InputAdornment} from '@material-ui/core';
import {
    MuiPickersUtilsProvider,
    DatePicker
  } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import '../pages/Login.scss';
import '../pages/Signup.scss';
import { Link, Redirect } from 'react-router-dom';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import EventIcon from '@material-ui/icons/Event';
import { useAuth } from "../config/Auth";
import genose from "../api/genose";
import MainCarousel from '../component/MainCarousel';

const Signup = () => {
    const [selectedDate, handleDateChange] = useState(new Date());
    
    const [Nama, setNama] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const {setAuthTokens} = useAuth();
    const [isLoggedIn, setLoggedIn] = useState(false);

    const handleSignup = async(e) => {
        e.preventDefault();
        await genose.post("/user/register", {
            nama:  Nama,
            email: Email,
            tanggal_lahir: selectedDate,
            password: Password
        })
        await genose.post("/user/login", {
            email: Email,
            password: Password
        }).then((res) => {
            res.status === 200 && setAuthTokens(res.data.data.access_token);
            setLoggedIn(true);
        })
    }

    if(isLoggedIn){
        return <Redirect to={"/"} />
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
                    >
                    <TextField
                        margin="normal"
                        fullWidth
                        name="name"
                        label="Nama"
                        placeholder="Masukkan nama anda"
                        type="name"
                        id="name"
                        variant="outlined"
                        autoComplete="name"
                        autoFocus
                        focused
                        InputLabelProps={{
                        shrink: true,
                        }}
                        inputProps={{
                            style: {padding: 20}
                        }}
                        InputProps={{
                            endAdornment: <InputAdornment position="start"><AlternateEmailIcon className="textfield-icon" /></InputAdornment>,
                        }}
                        className="textfield"
                        onChange={(e) => setNama(e.target.value)}
                    />
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
                        inputProps={{style: {padding: 20}}}
                        InputProps={{
                            endAdornment: <InputAdornment position="start"><LockOpenIcon className="textfield-icon" /></InputAdornment>,
                        }}
                        className="textfield"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {/* <p className="tanggal-judul">Masukkan Tanggal Lahir</p> */}
                    <Grid container spacing={1} className="tanggal-wrapper">
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                            disableFuture
                            openTo="date"
                            format="dd/MM/yyyy"
                            label="Tanggal Lahir"
                            views={["year", "month", "date"]}
                            inputVariant="outlined"
                            focused
                            value={selectedDate}
                            onChange={handleDateChange}
                            InputProps={{
                                endAdornment: <InputAdornment position="start"><EventIcon className="textfield-icon" /></InputAdornment>,
                            }}
                            style={{marginTop: "20px", marginLeft: "4px", marginRight: "4px" , width:"100%"}}
                        />
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <button className="btn-masuk btn-daftar" type="submit">
                        Daftar
                    </button>
                    <div className="signup">
                        <Link to="/login">
                            Kembali ke Login
                        </Link>
                        {/* <p>{ moment(selectedDate).format('LL') }</p> */}
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
 
export default Signup;