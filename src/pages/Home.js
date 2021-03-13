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

    const [open, setOpen] = useState(false);
    
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(async () => {
        // console.log(authTokens);
        const resGenose = await genose.get(`user/get-user`,{
            headers: {jwtoken: authTokens}
        });
        const hasilTes = resGenose.data.data.hasil_tes;
        setHasil(resGenose.data.data.hasil_tes);
        if (hasilTes === 'Positif' || hasilTes === 'Negatif'){
            setShowHasil(true);
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
            {hasil !== '' && <div className="Body">
                <Grid container spacing={0}>
                    <Grid item xs={6} square className="block atas">
                        <div className="content" id="info">
                            <h2>Informasi Seputar Genose</h2>
                            <p>GeNose merupakan syarat wajib bagi penumpang kereta api sebagai salah satu alternatif alat yang dapat mendeteksi virus Covid-19 dengan harga yang lebih terjangkau. Untuk saat ini, GeNose hanya dioperasikan di beberapa stasiun di pulau Jawa.</p>
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
                        <p>Anda harus melakukan pemriksaan jadwal terlebih dahulu sebelum mendapatkan hasil pemeriksaan. Untuk melakukan pemeriksaan, anda bisa mengatur lokasi dan jadwal pada fitur atur jadwal. Hasil pemeriksaan yang akan anda diterima adalah hasil pemeriksaan digital.</p>
                        <button className="tombol hasil" type="submit">Lihat Hasil</button>
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
                            <button onClick={handleClose} className="tombolDialog">Kembali</button>
                            </DialogActions>
                        </Dialog>
                    </div>
                    </Grid>
                    <Grid item xs={6} square className="block bawah bawah-putih">
                    <div className="content" id="jadwal">
                        <h2>Atur Jadwal Pemeriksaan GeNose</h2>
                        <p>Di dalam fitur ini anda dapat menetapkan lokasi dan jadwal pemeriksaan sesuai dengan keinginan anda. Setiap jam pada setiap harinya memiliki maksimal kapasitas pemeriksa agar tidak terjadinya kerumunan.</p>
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