import { CircularProgress, Dialog, DialogActions, DialogTitle, Grid } from '@material-ui/core';
import "./Home.scss";
import { Link, Redirect } from 'react-router-dom';
import HomeNavbar from '../component/HomeNavbar';
import Footer from '../component/Footer';
import { useEffect, useState } from 'react';
import { useAuth } from '../config/Auth';
import genose from '../api/genose';


const Home = () => {
    const {authTokens} = useAuth();
    const [hasil, setHasil] = useState('');
    const [showHasil, setShowHasil] = useState(false);
    const [showHasilRedirect, setShowHasilRedirect] = useState(false);
    const [showBody, setShowBody] = useState(false);

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(async () => {
        console.log(authTokens);
        const resGenose = await genose.get(`user/get-user`,{
            headers: {jwtoken: authTokens}
        });
        console.log(authTokens);
        const hasilTes = resGenose.data.data.hasil_tes;
        setHasil(hasilTes);
        if (hasilTes === 'Positif' || hasilTes === 'Negatif'){
            setShowHasil(true);
            setShowBody(true);
        }
    },[])


    const handleHasil = (e) =>{
        e.preventDefault();
        if (showHasil){
            setShowHasilRedirect(true);  
        } else {
            console.log('belum login bro');
            setOpen(true);
        }
    }

    if(showHasilRedirect){
        return <Redirect to={"/hasil"} />
    }

    return (
        <div className="Home">
            <HomeNavbar />
            {hasil === '' && <div className="circularTengah"><CircularProgress color="primary" /> </div>}
            {hasil && <div className="Body">
                <Grid container spacing={0}>
                    <Grid item xs={6} square className="block atas">
                        <div className="content" id="info">
                            <h2>Informasi Seputar Genose</h2>
                            <p>GeNose merupakan syarat wajib bagi penumpang kereta api sebagai salah satu alternatif alat yang dapat mendeteksi virus Covid-19 dengan harga yang lebih terjangkau. Untuk saat ini, GeNose hanya dioperasikan di beberapa stasiun di pulau Jawa.</p>  
                            {/* <Link to="/info" class="tombol selengkapnya">
                                Selengkapnya
                            </Link> */}
                            <Link to="/info">
                                <button className="tombol hasil">Selengkapnya</button>
                            </Link>
                        </div>
                    </Grid>
                    <Grid item xs={6} square className="atasKanan">
                        <div className="overlay" />
                    </Grid>
                    <Grid item xs={6} square className="block bawah">
                    <div className="content" id="hasil">
                        <form onSubmit={handleHasil}>
                        <h2>Lihat Hasil Pemeriksaan GeNose</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet a odio volutpat posuere nulla eget pharetra, tincidunt. Ut pellentesque accumsan sed gravida vitae massa massa ut. Consectetur cras suspendisse eget neque.</p>
                        {/* <a class="tombol hasil" href="/">Lihat Hasil</a> */}
                        <button className="tombol hasil" type="submit">Lihat Hasil</button>
                        {/* <Link to="/hasil" class="tombol hasil">Lihat Hasil</Link> */}
                        </form>
                        <Dialog
                            fullWidth
                            maxWidth='sm'
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                            className="dialog"
                        >
                            <DialogTitle id="alert-dialog-title" className="titleDialog">
                                <h2>Anda belum melakukan pemeriksaan</h2>
                            </DialogTitle>
                            <DialogActions className="action">
                            {/* <Button onClick={handleClose} color="primary">
                                Kembali
                            </Button> */}
                            <button onClick={handleClose} className="tombolDialog">Kembali</button>
                            </DialogActions>
                        </Dialog>
                    </div>
                    </Grid>
                    <Grid item xs={6} square className="block bawah bawah-putih">
                    <div className="content" id="jadwal">
                        <h2>Atur Jadwal Pemeriksaan GeNose</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet a odio volutpat posuere nulla eget pharetra, tincidunt. Ut pellentesque accumsan sed gravida vitae massa massa ut. Consectetur cras suspendisse eget neque.</p>
                        {/* <a class="tombol hasil" href="/">Atur Jadwal</a> */}
                        {/* <Link to="/jadwal" class="tombol jadwal">
                        Atur Jadwal</Link> */}
                        <Link to="/jadwal">
                            <button className="tombol hasil">Atur Jadwal</button>
                        </Link>
                    </div>
                    </Grid>
                </Grid>
                <Footer />
            </div>}
        </div>
        
    );
}
 
export default Home;