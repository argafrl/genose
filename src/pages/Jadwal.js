import './Info.scss';
import './Jadwal.scss';
import GlobalNavbar from '../component/GlobalNavbar';
import { FormControl, Grid, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import DetailPemesanan from '../component/DetailPemesanan';

const Jadwal = () => {
    return (
        <div className="jadwal">
            <GlobalNavbar />
            <div className="body">
                <div className="container-body">
                    <h2>Atur Jadwal<br />Pemeriksaan GeNose</h2>
                    <div className="wrapper">
                        <div className="wrapper-box">
                            <h3>Kode Pemesanan Tiket</h3>
                            <TextField 
                            fullWidth
                            id="outlined-basic" 
                            variant="outlined"
                            InputProps={{
                                endAdornment: <InputAdornment position="start"><SearchIcon className="textfield-icon" /></InputAdornment>,
                            }} 
                            />
                        </div>
                        <div className="wrapper-box">
                            <h3>Detail Pemesanan Tiket</h3>
                            <div className="detail-border-atas" />
                            <DetailPemesanan title="Kode Pemesanan Tiket" content="0268443132165135" />
                            <DetailPemesanan title="Nama" content="Asep Prakasa" />
                            <DetailPemesanan title="Tanggal Lahir" content="1 Januari 1986" />
                            <DetailPemesanan title="Tanggal Keberangkatan" content="Senin, 15 Maret 2021" />
                            <DetailPemesanan title="Stasiun Awal" content="Stasiun Surabaya Pasarturi" />
                            <DetailPemesanan title="Jam Berangkat" content="14.45" />
                            <DetailPemesanan title="Stasiun Akhir" content="Stasiun Yogyakarta" />
                            <DetailPemesanan title="Jam Sampai" content="16.15" />
                        </div>
                        <div className="wrapper-box">
                            <h3>Tetapkan Lokasi dan Jadwal</h3>
                            <div className="detail-border-atas" />
                            <Grid container spacing={0}>
                                <Grid item xs={4}>
                                    <div className="detail-lokasi">
                                        <p>Lokasi Pemeriksaan</p>
                                        <FormControl variant="outlined" style={{margin: "10px", minWidth: 250,}}>
                                            <InputLabel id="demo-simple-select-outlined-label">Pilih lokasi pemeriksaan</InputLabel>
                                            <Select
                                            labelId="demo-simple-select-outlined"
                                            id="demo-simple-select"
                                            label="Pilih lokasi pemeriksaan"
                                            >
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                </Grid>
                                <Grid item xs={4}>
                                    <div className="detail-lokasi">
                                        <p>Hari Pemeriksaan</p>
                                        <FormControl variant="outlined" style={{margin: "10px",minWidth: 250,}}>
                                            <InputLabel>Pilih tanggal pemeriksaan</InputLabel>
                                            <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Pilih tanggal pemeriksaan"
                                            >
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                </Grid>
                                <Grid item xs={4}>
                                    <div className="detail-lokasi">
                                        <p>Jam Pemeriksaan</p>
                                        <FormControl variant="outlined" style={{margin: "10px",minWidth: 250,}}>
                                            <InputLabel>Pilih jam pemeriksaan</InputLabel>
                                            <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Pilih jam pemeriksaan"
                                            >
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Jadwal;