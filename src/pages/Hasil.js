import './Info.scss';
import './Jadwal.scss';
import GlobalNavbar from '../component/GlobalNavbar';
import DetailPemesanan from '../component/DetailPemesanan';

const Hasil = () => {
    return (
        <div className="hasil">
            <GlobalNavbar />
            <div className="body">
                <div className="container-body">
                    <h2>Hasil Digital<br />Pemeriksaan GeNose</h2>
                    <div className="wrapper">
                        <div className="wrapper-box">
                            <DetailPemesanan title="Kode Pemesanan Tiket" content="0268443132165135" />
                            <DetailPemesanan title="Nama" content="Asep Prakasa" />
                            <DetailPemesanan title="Tanggal Lahir" content="1 Januari 1986" />
                            <DetailPemesanan title="Tanggal Keberangkatan" content="Senin, 15 Maret 2021" />
                            <DetailPemesanan title="Stasiun Awal" content="Stasiun Surabaya Pasarturi" />
                            <DetailPemesanan title="Jam Berangkat" content="14.45" />
                            <DetailPemesanan title="Stasiun Akhir" content="Stasiun Yogyakarta" />
                            <DetailPemesanan title="Jam Sampai" content="16.15" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Hasil;