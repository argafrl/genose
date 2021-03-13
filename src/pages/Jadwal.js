import './Info.scss';
import './Jadwal.scss';
import GlobalNavbar from '../component/GlobalNavbar';
import { Link } from 'react-router-dom';
import { FormControl, Grid, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import DetailPemesanan from '../component/DetailPemesanan';
import { useState } from 'react';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import tiket from '../api/tiket';
import { useAuth } from '../config/Auth';
import Footer from '../component/Footer';
import genose from '../api/genose';
import 'moment/locale/id'
import moment from 'moment';

const Jadwal = () => {
    const [isi, setIsi] = useState(false);
    const [showTiket, setShowTiket] = useState(false);
    const [showDetail, setShowDetail] = useState(false);
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
    const { authTokens } = useAuth();
    // const [periksa, setPeriksa] = useState('');
    const [jamPeriksa, setJamPeriksa] = useState('');
    const gabungPeriksa = moment(selectedDate).format('YYYY-MM-DD') + jamPeriksa;
    const [jamDataPeriksa, setJamDataPeriksa] = useState('');
    const locations = [
        'Stasiun Pasar Senen',
        'Stasiun Gambir',
        'Stasiun Bandung',
        'Stasiun Cirebon',
        'Stasiun Semarang Tawang',
        'Stasiun Yogyakarta',
        'Stasiun Solo Balapan',
        'Stasiun Surabaya Pasarturi',
    ]

    const jamPemeriksaan = [
        { 
            key: '1',
            data: '07.00 - 08.00',
            value: 'T07:00:00.000Z'
        },
        { 
            key: '2',
            data: '08.00 - 09.00',
            value: 'T08:00:00.000Z'
        },
        { 
            key: '3',
            data: '09.00 - 10.00',
            value: 'T09:00:00.000Z'
        },
        { 
            key: '4',
            data: '10.00 - 11.00',
            value: 'T10:00:00.000Z'
        },
        { 
            key: '5',
            data: '11.00 - 12.00',
            value: 'T11:00:00.000Z'
        },
        { 
            key: '6',
            data: '12.00 - 13.00',
            value: 'T12:00:00.000Z'
        },
        { 
            key: '7',
            data: '13.00 - 14.00',
            value: 'T13:00:00.000Z'
        },
        { 
            key: '8',
            data: '14.00 - 15.00',
            value: 'T14:00:00.000Z'
        },
        { 
            key: '9',
            data: '15.00 - 16.00',
            value: 'T15:00:00.000Z'
        },
        { 
            key: '10',
            data: '16.00 - 17.00',
            value: 'T16:00:00.000Z'
        },
        { 
            key: '11',
            data: '17.00 - 18.00',
            value: 'T17:00:00.000Z'
        },
        { 
            key: '12',
            data: '18.00 - 19.00',
            value: 'T18:00:00.000Z'
        },
    ]

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const fetchTiket = async (e) => {
        e.preventDefault()
        console.log(kodeTiket);
        const res = await tiket.get(`show/${kodeTiket}`);
        console.log(res);
        setId(res.data._id);
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
        // setPeriksa(moment(selectedDate).format("YYYY-MM-DD").toString());
    }

    const handleLokasiJadwal = async (e) => {
        e.preventDefault()
        await genose.post("user/atur-jadwal",{
            tiket_user: kodeTiket,
            jadwal_tes: gabungPeriksa,
            tempat_tes: location
        },{ 
            headers: {jwtoken: authTokens}
        }).then((res) => {
            setIsi(true);
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }

    // const handleParseJamPeriksa = (data) => {
    //     const [parseJarakJamPeriksa, parseJamPeriksa] = data.split('T');  
    //     setJarakDataPeriksa(parseJarakJamPeriksa);
    //     setJamDataPeriksa(parseJamPeriksa);
    // }

    // useEffect(async () => {
    //     // const res = await tiket.get(`show/6038b0e7bef03d0020ed2946`);
        
    //     // setId(res.data._id);
    //     // setNama(res.data.nama);
    //     // setTanggalLahir(res.data.tanggalLahir);
    //     // setStasiunAwal(res.data.stasiunAwal);
    //     // setJamBerangkat(res.data.jamBerangkat);
    //     // setStasiunTujuan(res.data.stasiunTujuan);
    //     // setJamSampai(res.data.jamSampai);
    //     // console.log(res);
    //     console.log(authTokens);
    //     const resGenose = await genose.get(`user/get-user`,{
    //         headers: {jwtoken: authTokens}
    //     });
    //     setTanggalLahir(resGenose.data.tanggal_lahir);
    //     console.log(resGenose.data);
    //     setShowTiket(true);
    // },[])

    // const handleLocationChangeMultiple = (event) => {
    //     const { options } = event.target;
    //     const value = [];
    //     for (let i = 0, l = options.length; i < l; i += 1) {
    //       if (options[i].selected) {
    //         value.push(options[i].value);
    //       }
    //     }
    //     setLocation(value);
    // };
    return (
        <div className="jadwal">
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
                            {/* <p>{selectedDate.toString()}</p> */}
                            {/* <p>{ moment(selectedDate).format('YYYY-MM-DD') }</p>
                            <p>{periksa}</p>
                            <p>{gabungPeriksa}</p>
                            <p>{location}</p> */}
                            {/* <p>{jarakDataPeriksa}</p>
                            <p>{jamDataPeriksa}</p>
                            {console.log(jamPeriksa)} */}
                            <p>{jamDataPeriksa}</p>
                            <div className="detail-border-atas" />
                            <div style={{ display: showDetail ? "block" : "none" }}>
                                <DetailPemesanan title="Kode Pemesanan Tiket" content={id} />
                                <DetailPemesanan title="Nama" content={nama} />
                                <DetailPemesanan title="Tanggal Lahir" content={tanggalLahir.toString()} />
                                <DetailPemesanan title="Tanggal Keberangkatan" content={tanggalBerangkat} />
                                <DetailPemesanan title="Stasiun Awal" content={stasiunAwal}/>
                                <DetailPemesanan title="Jam Berangkat" content={jamBerangkat.toString()} />
                                <DetailPemesanan title="Stasiun Akhir" content={stasiunTujuan} />
                                <DetailPemesanan title="Jam Sampai" content={jamSampai.toString()} />
                            </div>
                        </div>
                        <div className="wrapper-box" style={{ display: showTiket ? "block" : "none" }}>
                            <h3>Tetapkan Lokasi dan Jadwal</h3>
                            <div className="detail-border-atas" />
                            <form onSubmit={handleLokasiJadwal}>
                            <Grid container spacing={0}>
                                <Grid item xs={4} className="grid-lokasi-jadwal">
                                    <div className="detail-lokasi">
                                        <p className="judul">Lokasi Pemeriksaan</p>
                                        <FormControl variant="outlined" style={{margin: "10px", minWidth: 250,}}>
                                            <InputLabel id="demo-simple-select-outlined-label">Pilih lokasi pemeriksaan</InputLabel>
                                            <Select
                                            labelId="demo-simple-select-outlined"
                                            id="demo-simple-select"
                                            label="Pilih lokasi pemeriksaan"
                                            value={location}
                                            onChange={handleLocationChange}
                                            >
                                                <MenuItem value="" disabled>
                                                    Lokasi Pemeriksaan
                                                </MenuItem>
                                                {locations.map((location) => (
                                                <MenuItem key={location} value={location}>
                                                    {location}
                                                </MenuItem>
                                            ))}
                                            </Select>
                                        </FormControl>
                                    </div>
                                </Grid>
                                <Grid item xs={4} className="grid-lokasi-jadwal">
                                    <div className="detail-lokasi">
                                        <p className="judul">Hari Pemeriksaan</p>
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <DatePicker
                                            disablePast
                                            disableToolbar
                                            variant="inline"
                                            openTo="date"
                                            format="yyyy-MM-dd"
                                            label="Pilih tanggal pemeriksaan"
                                            views={["year", "month", "date"]}
                                            inputVariant="outlined"
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            style={{margin: "10px" , minWidth: 250}}
                                        />
                                        </MuiPickersUtilsProvider>
                                    </div>
                                </Grid>
                                <Grid item xs={4} className="grid-lokasi-jadwal tanpa-grid">
                                    <div className="detail-lokasi">
                                        <p className="judul">Jam Pemeriksaan</p>
                                        <FormControl variant="outlined" style={{margin: "10px",minWidth: 250,}}>
                                            <InputLabel>Pilih jam pemeriksaan</InputLabel>
                                            <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Pilih jam pemeriksaan"
                                            value={jamPeriksa}
                                            onChange={(e) => {
                                                setJamPeriksa(e.target.value);
                                                jamPemeriksaan.filter(jam => jam.value === e.target.value).map(filteredJam => setJamDataPeriksa(filteredJam.data))
                                            }}
                                            >
                                                <MenuItem value="" disabled>
                                                    Jam Pemeriksaan
                                                </MenuItem>
                                                    {jamPemeriksaan.map((jam) => (                                                    // setJamDataAwalPeriksa(jam.value);
                                                        <MenuItem key={jam.key} value={jam.value}>
                                                            {jam.data}
                                                        </MenuItem>
                                                    ))}
                                            </Select>
                                        </FormControl>
                                    </div>
                                </Grid>
                            </Grid>
                            <div className="detail-border-bawah" />
                            <div className="tombol-wrapper">
                                <button className="tombol" type="submit">Simpan</button>
                            </div>
                            </form>
                        </div>
                    </div>}
                    {isi  && <div className="wrapper">
                        <div className="wrapper-box" >
                            <h3>Kode Antrean</h3>
                            <div className="detail-border-atas" />
                            <h3 className="kodeTiket">{kodeTiket}</h3>
                        </div>
                        <div className="wrapper-box">
                            <h3>Detail Pemeriksaan</h3>
                            <div className="detail-border-atas" />
                            <div className="detail-pemesanan-border-hasil">
                                <DetailPemesanan title="Lokasi" content={location} />
                                <DetailPemesanan title="Tanggal" content={moment(selectedDate).format('LL')} />
                                <DetailPemesanan title="Jam" content={jamDataPeriksa} />
                            </div>
                        </div>
                        <div className="wrapper-box" style={{ display: showTiket ? "block" : "none" }}>
                            <h3>Petunjuk Pemeriksaan</h3>
                            <div className="detail-border-atas" />
                            <div className="detail-lokasi-jadwal">
                            <p>1. Sampaikan kode antrean kepada petugas medis yang bertugas<br/>2. Bayar biaya pemeriksaan kepada petugas<br/>3. Ikuti prosedur pemeriksaan<br/>4. Tunggu hasil pemeriksaan secara digital ketika sudah selesai melakukan pemeriksaan</p>
                            <Link to="/" className="tombol-wrapper">
                                <div>
                                    <button className="tombol" type="submit">Oke</button>
                                </div>
                            </Link>
                            {/* <Link to="/info">
                                <button className="tombol hasil">Selengkapnya</button>
                            </Link> */}
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
            <Footer />
        </div>
    );
}
 
export default Jadwal;