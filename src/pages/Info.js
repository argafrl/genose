import './Info.scss';
import AccordionInfo from '../component/Accordion';
import GlobalNavbar from '../component/GlobalNavbar';
import { Link } from 'react-router-dom';

const Info = () => {
    const lokasi = "- Stasiun Pasar Senen\n-Jl. Pasar Senen No.14, Senen, Kec. Senen, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10410\n-Stasiun Gambir\nJl. Medan Merdeka Tim. No.1, Gambir, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10110\n-Stasiun Bandung\nJl. Stasiun Barat, Kb. Jeruk, Kec. Andir, Kota Bandung, Jawa Barat 40181\n-Stasiun Cirebon\nJl. Stasiun No.6, Kesenden, Kec. Kejaksan, Kota Cirebon, Jawa Barat 45122\n-Stasiun Semarang Tawang\nJl. Taman Tawang No.1, Tj. Mas, Kec. Semarang Utara, Kota Semarang, Jawa Tengah 50211\n-Stasiun Yogyakarta\nJl. Ps. Kembang No.77, Sosromenduran, Gedong Tengen, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55271\n-Stasiun Solo Balapan\nJalan Wolter Monginsidi No.112, Kestalan, Kec. Banjarsari, Kota Surakarta, Jawa Tengah 57133\n-Stasiun Surabaya Pasarturi\nJl. Semarang No.1, Tembok Dukuh, Kec. Bubutan, Kota SBY, Jawa Timur 60173";

    return (
        <div className="info">
            <GlobalNavbar />
            <div className="body">
                <div className="container-body">
                    <h2>Informasi<br />Seputar GeNose</h2>
                    <AccordionInfo summary="Apa itu GeNose" details="GeNose merupakan syarat wajib bagi penumpang kereta api sebagai salah satu alternatif alat yang dapat mendeteksi virus Covid-19 dengan harga yang lebih terjangkau. Untuk saat ini, GeNose hanya dioperasikan di beberapa stasiun di pulau Jawa." />
                    <AccordionInfo summary="Kapan waktu pemeriksaan GeNose?" details="Pelayanan pemeriksaan GeNose c-19 mulai jam 07.00 -19.00 wib, atau menyesuaikan kondisi masing masing stasiun" />
                    <AccordionInfo summary="Berapa biaya pemeriksaan GeNose?" details="Tarif Pemeriksaan GeNose adalah Rp 20.000,-" />
                    <AccordionInfo summary="Dimana lokasi pemeriksaan GeNose?" details={lokasi} />
                    <AccordionInfo summary="Apa saja persyaratan pemeriksaan GeNose?" details="GeNose merupakan syarat wajib bagi penumpang kereta api sebagai salah satu alternatif alat yang dapat mendeteksi virus Covid-19 dengan harga yang lebih terjangkau. Untuk saat ini, GeNose hanya dioperasikan di beberapa stasiun di pulau Jawa." />
                    <AccordionInfo summary="Bagaimana prosedur pemeriksaan GeNose?" details="GeNose merupakan syarat wajib bagi penumpang kereta api sebagai salah satu alternatif alat yang dapat mendeteksi virus Covid-19 dengan harga yang lebih terjangkau. Untuk saat ini, GeNose hanya dioperasikan di beberapa stasiun di pulau Jawa." />
                    <AccordionInfo summary="Berapa lama masa berlaku pemeriksaan GeNose?" details="GeNose merupakan syarat wajib bagi penumpang kereta api sebagai salah satu alternatif alat yang dapat mendeteksi virus Covid-19 dengan harga yang lebih terjangkau. Untuk saat ini, GeNose hanya dioperasikan di beberapa stasiun di pulau Jawa." />
                </div>
            </div>
        </div>
    );
}
 
export default Info;