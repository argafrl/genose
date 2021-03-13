import './Info.scss';
import './Jadwal.scss';
import './Admin.scss';
import GlobalNavbar from '../component/GlobalNavbar';
import { Dialog, DialogActions, DialogTitle, InputAdornment, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import DetailPemesanan from '../component/DetailPemesanan';
import { useEffect, useState } from 'react';
import tiket from '../api/tiket';
import { useAuth } from '../config/Auth';
import genose from '../api/genose';
import 'moment/locale/id'
import moment from 'moment';

const Admin = () => {
    const [isi, setIsi] = useState(false);
    const [showTiket, setShowTiket] = useState(false);
    const [showDetail, setShowDetail] = useState(false);
    const [showTanyaHasil, setShowTanyaHasil] = useState(false);
    const [selectedDate, handleDateChange] = useState(new Date());
    const [tanggalLahir, setTanggalLahir] = useState('');
    const [location, setLocation] = useState([]);
    const [kodeTiket, setKodeTiket] = useState('');
    const [id, setId] = useState('');
    const [nama, setNama] = useState('');
    const [tanggalBerangkat, setTanggalBerangkat] = useState('');
    const [stasiunAwal, setStasiunAwal] = useState('');
    const [jamBerangkat, setJamBerangkat] = useState('');
    const [stasiunTujuan, setStasiunTujuan] = useState('');
    const [jamSampai, setJamSampai] = useState('');
    const [hasil, setHasil] = useState('');
    const { authTokens } = useAuth();
    // const [periksa, setPeriksa] = useState('');
    const [jamPeriksa, setJamPeriksa] = useState('');
    const gabungPeriksa = moment(selectedDate).format('YYYY-MM-DD') + jamPeriksa;
    const [jamDataPeriksa, setJamDataPeriksa] = useState('');
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setIsi(false);
        setShowTiket(false);
        setShowDetail(false);
    };

    useEffect(async () => {
        // console.log(kodeTiket);
        const resGenose = await genose.get(`user/get-user`,{
            headers: {jwtoken: authTokens}
        });
        setId(resGenose.data.data._id)
    },[])

    const fetchTiket = async (e) => {
        e.preventDefault()
        console.log(kodeTiket);
        const res = await tiket.get(`show/${kodeTiket}`);
        console.log(res);
        setKodeTiket(res.data._id);
        setNama(res.data.nama);
        moment.locale('id');
        setTanggalLahir(
            res.data.tanggalLahir ?
            moment(res.data.tanggalLahir).format('LL') : '')
        setTanggalBerangkat(moment(res.data.jamBerangkat).format('LL'));
        setStasiunAwal(res.data.stasiunAwal);
        setJamBerangkat(moment(res.data.jamBerangkat).format('LT'));
        setStasiunTujuan(res.data.stasiunTujuan);
        setJamSampai(moment(res.data.jamSampai).format('LT'));
        setShowTiket(true);
        setShowDetail(true);
        const resGenose = await genose.get(`user/get-user`,{
            headers: {jwtoken: authTokens}
        });
        setLocation(resGenose.data.data.tempat_tes);
        setJamDataPeriksa(resGenose.data.data.jadwal_tes);
        // setTanggalLahir(moment(resGenose.data.data.tanggal_lahir));
        console.log(resGenose.data);
        setShowTiket(true);
        // setPeriksa(moment(selectedDate).format("YYYY-MM-DD").toString());
    }

    const handleShowTanyaHasil = () => {
        setShowTanyaHasil(true);
    }

    const handleSubmitHasilPositif = () => {
        setHasil('Positif');
    }

    const handleSubmitHasilNegatif = () => {
        setHasil('Negatif');
    }

    const handlePemeriksaan = async (e) => {
        e.preventDefault()
        console.log(id);
        await genose.post("user/set-hasil-tes",{
            tiket_user: kodeTiket,
            hasil_tes: hasil
        }).then((res) => {
            setOpen(true);
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }

    const handleHasil = () => {
        setIsi(true)
    }
    return (
        <div className="admin">
            <GlobalNavbar />
            <div className="body">
                <div className="container-body">
                    <h2>Atur Jadwal<br />Pemeriksaan GeNose</h2>
                    {isi === false && <div className="wrapper">
                        <div className="wrapper-box">
                            <form onSubmit={fetchTiket} action="#form-fetch-tiket" id="#form-fetch-tiket">
                            <h3>Kode Pemesanan Tiket</h3>
                            <div className="detail-border-atas" />
                            <TextField 
                            fullWidth
                            id="outlined-basic" 
                            variant="outlined"
                            InputProps={{
                                endAdornment: <InputAdornment position="start"><SearchIcon className="textfield-icon" /></InputAdornment>,
                            }}
                            onChange={(e) => setKodeTiket(e.target.value)}
                            />
                            {/* <button className="btn-masuk" type="submit">Cari</button> */}
                            <div className="tombol-wrapper">
                            <button className="tombol hasil" type="submit">Masukkan Kode Tiket</button>
                            </div>
                            </form>
                        </div>
                        <div className="wrapper-box" style={{ display: showTiket ? "block" : "none" }}>
                            <h3>Detail Pemesanan Tiket</h3>
                            <div className="detail-border-atas" />
                            <div style={{ display: showDetail ? "block" : "none" }}>
                                <DetailPemesanan title="Kode Pemesanan Tiket" content={kodeTiket} />
                                <DetailPemesanan title="Nama" content={nama} />
                                <DetailPemesanan title="Tanggal Lahir" content={tanggalLahir.toString()} />
                                <DetailPemesanan title="Tanggal Keberangkatan" content={tanggalBerangkat} />
                                <DetailPemesanan title="Stasiun Awal" content={stasiunAwal}/>
                                <DetailPemesanan title="Jam Berangkat" content={jamBerangkat} />
                                <DetailPemesanan title="Stasiun Akhir" content={stasiunTujuan} />
                                <DetailPemesanan title="Jam Sampai" content={jamSampai} />
                            </div>
                        </div>
                        <div className="wrapper-box"  style={{ display: showTiket ? "block" : "none" }}>
                            <h3>Detail Pemeriksaan</h3>
                            <div className="detail-border-atas" />
                            <div className="detail-pemesanan-border-hasil">
                                <DetailPemesanan title="Lokasi" content={location} />
                                <DetailPemesanan title="Tanggal" content={moment(jamDataPeriksa).format('LL')} />
                                <DetailPemesanan title="Jam" content={moment(jamDataPeriksa).format('LT') + " - " + moment(jamDataPeriksa).add(1, 'hours').format('LT')} />
                            </div>
                        </div>
                        <div style={{ display: showTiket ? "block" : "none" }}>
                        <div className="wrapper-box biru-admin tombol-wrapper tombol-pertanyaan">
                            <h3 className="biru-h3-admin">Apakah pengguna sudah melakukan tes?</h3>
                            <button className="tombol hasil" onClick={handleShowTanyaHasil}>Sudah</button>
                        </div>
                        <div className="wrapper-box biru-admin tombol-wrapper tombol-pertanyaan" style={{ display: showTanyaHasil ? "flex" : "none" }}>
                            <h3 className="biru-h3-admin">Apakah hasil pengguna?</h3>
                            <form onSubmit={handleHasil}>
                                <div className="button-wrapper">
                                    <button className="tombol hasil" type="submit" onClick={handleSubmitHasilPositif}>Positif</button>
                                    <button className="tombol hasil" type="submit" onClick={handleSubmitHasilNegatif}>Negatif</button>
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>}
                    {isi && <div className="wrapper">
                        <div className="wrapper-box">
                            <DetailPemesanan title="Kode Pemesanan Tiket" content={kodeTiket} />
                            <DetailPemesanan title="Nama" content={nama} />
                            <DetailPemesanan title="Tanggal Pemeriksaan" content={moment(jamDataPeriksa).format('LL')} />
                            <DetailPemesanan title="Lokasi Pemeriksaan" content={location} />
                            <DetailPemesanan title="Hasil" content={hasil} />
                            
                            {/* <DetailPemesanan title="Berlaku Sampai" content="14.45" /> */}
                        </div>
                        <form onSubmit={handlePemeriksaan}>
                            <div className="tombol-wrapper tombol-hasil-pemeriksaan">
                                <button className="tombol hasil" type="submit">Upload</button>
                            </div>
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
                                <h2>Hasil pemeriksaan telah berhasil di upload</h2>
                            </DialogTitle>
                            <DialogActions className="action">
                                <button onClick={handleClose} className="tombolDialog">Kembali ke menu pencarian</button>
                            </DialogActions>
                        </Dialog>
                    </div>}
                </div>
            </div>
        </div>
    );
}
 
export default Admin;