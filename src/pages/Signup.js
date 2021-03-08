import React, { useState } from 'react';
import { Box, Grid, TextField, Paper, Checkbox, InputAdornment} from '@material-ui/core';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
    DatePicker
  } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import '../pages/Login.scss';
import '../pages/Signup.scss';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import KELUARGA from '../assets/image/keluarga1.png';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import EventIcon from '@material-ui/icons/Event';

const Signup = () => {
    const [selectedDate, handleDateChange] = useState(new Date());
    const [selectedMonth, handleMonthChange] = useState(new Date());
    const [selectedYear, handleYearChange] = useState(new Date());

    return (
        <div className="login">
            <div className="globalStyles">
                <Grid container spacing={0}>
                <Grid item xs={6} component={Paper} square className="boxKiri boxKiri-signup">
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
                    />
                    {/* <p className="tanggal-judul">Masukkan Tanggal Lahir</p> */}
                    <Grid container spacing={1} className="tanggal-wrapper">
                        {/* <Grid item className="tanggal">
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <DatePicker
                                    disableToolbar
                                    label="Hari"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    inputVariant="outlined"
                                    focused
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    style={{float:"left", maxWidth: "130px"}}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid item className="tanggal">
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                               <DatePicker
                                    views={["month"]}
                                    label="Bulan"
                                    value={selectedMonth}
                                    onChange={handleMonthChange}
                                    inputVariant="outlined"
                                    focused
                                    style={{maxWidth: "276px"}}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid item className="tanggal">
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                               <DatePicker
                                    views={["year"]}
                                    label="Tahun"
                                    value={selectedYear}
                                    onChange={handleYearChange}
                                    inputVariant="outlined"
                                    focused
                                    style={{maxWidth: "130px"}}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid> */}
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
                    <Link to="/" className="btn-masuk">
                        Daftar
                    </Link>
                    <div className="signup">
                        <Link to="/login">
                            Kembali ke Login
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
 
export default Signup;