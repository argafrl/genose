import './Info.scss';
import './Jadwal.scss';
import GlobalNavbar from '../component/GlobalNavbar';
import DetailPemesanan from '../component/DetailPemesanan';
import { useEffect, useState } from 'react';
import genose from '../api/genose';
import Footer from '../component/Footer';
import { useAuth } from '../config/Auth';
import moment from 'moment';
import { CircularProgress } from '@material-ui/core';
import tiket from '../api/tiket';

const Hasil = () => {
    const [kodeTiket, setKodeTiket] = useState('');
    const [id, setId] = useState('');
    const [nama, setNama] = useState('');
    const [jadwalTes, setJadwalTes] = useState('');
    const [lokasi, setLokasi] = useState('');
    const [hasil, setHasil] = useState('');
    const [berlaku, setBerlaku] = useState('');
    const { authTokens } = useAuth();
        
    useEffect(async () => {
        
        // setTanggalLahir(res.data.tanggalLahir);
        // setStasiunAwal(res.data.stasiunAwal);
        // setJamBerangkat(res.data.jamBerangkat);
        // setStasiunTujuan(res.data.stasiunTujuan);
        // setJamSampai(res.data.jamSampai);
        // console.log(res);
        // console.log(authTokens);
        const resGenose = await genose.get(`user/get-user`,{
            headers: {jwtoken: authTokens}
        });     
        setKodeTiket(resGenose.data.data.tiket_user);
        console.log(kodeTiket)
        const res = await tiket.get(`show/${kodeTiket}`);
        console.log(res);
        setNama(res.data.nama);
        setJadwalTes(moment(resGenose.data.data.jadwal_tes).format('LL'));
        setLokasi(resGenose.data.data.tempat_tes);
        if (resGenose.data.data.hasil_tes === 'Negatif'){
            setHasil('Negatif');
        } else {
            setHasil('Positif')
        }
        console.log(resGenose.data);
    },[])
    return (
        <div className="hasil">
            <GlobalNavbar />
            <div className="body">
                <div className="container-body">
                    <h2>Hasil Digital<br />Pemeriksaan GeNose</h2>
                    {nama === '' && <div className="circularTengah"><CircularProgress color="primary" /> </div>}
                    {nama !== '' && <div className="wrapper">
                        <div className="wrapper-box">
                            <DetailPemesanan title="Kode Pemesanan Tiket" content={kodeTiket} />
                            <DetailPemesanan title="Nama" content={nama} />
                            <DetailPemesanan title="Tanggal Pemeriksaan" content={jadwalTes} />
                            <DetailPemesanan title="Lokasi Pemeriksaan" content={lokasi} />
                            <DetailPemesanan title="Hasil" content={hasil} />
                            {/* <DetailPemesanan title="Berlaku Sampai" content="14.45" /> */}
                        </div>
                        {hasil === "Negatif" && <div className="wrapper-box biru">
                            <h3 className="biru-h3">Hasil pemeriksaan anda adalah <span className="hasil">{hasil}</span><br />Selamat menikmati perjalanan anda</h3>
                        </div>}
                        {hasil === "Positif" && <div className="wrapper-box biru">
                            <h3 className="biru-h3">Hasil pemeriksaan anda adalah <span className="hasil">{hasil}</span><br />Mohon maaf anda belum bisa melakukan perjalanan</h3>
                        </div>}
                    </div>}
                </div>
            </div>
            <Footer />
        </div>
    );
}
 
export default Hasil;