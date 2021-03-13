import { Link } from 'react-router-dom';
import '../pages/Login.scss';
import KELUARGA from '../assets/image/keluarga1.png';
import { Carousel } from 'react-bootstrap';

const MainCarousel = () => {
    return (
        <div className="main-carousel">
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
                        <h2>Apa itu GeNose?</h2>
                        <p>GeNose merupakan syarat wajib bagi penumpang kereta api sebagai salah satu alternatif alat yang dapat mendeteksi virus Covid-19 dengan harga yang lebih terjangkau. Untuk saat ini, GeNose hanya dioperasikan di beberapa stasiun di pulau Jawa. </p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="content-carousel">
                        <h2>Kenapa sih harus pakai GeNose?</h2>
                        <p>Kelebihan pemeriksaan GeNose C19 selain murah, tidak sakit untuk digunakan. GeNose sendiri juga merupakan buatan anak bangsa. Jadi tunggu apa lagi ayo daftar!</p>
                        <Link to="/signup" className="btn-masuk btn-carousel">
                            Daftar
                        </Link>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="content-carousel">
                        <h2>Prosedur Pemeriksaan GeNose?</h2>
                        <p>1. Saat pemeriksaan, calon penumpang akan diminta untuk mengambil napas melalui hidung dan membuangnya melalui mulut sebanyak 3 kali<br/><br/>2. Langkah tersebut terdiri dari 2 kali di awal ambil napas dan buang di dalam masker, kemudian saat pengambilan napas ke-3 langsung embuskan ke dalam kantong hingga penuh<br/><br/>3. Kunci kantong agar udara di dalamnya tidak keluar dan serahkan kantong kepada petugas untuk dianalisis menggunakan alat GeNose<br/><br/>4. Pemeriksaan dilakukan 1 kali tanpa pengulangan</p>
                    </div>
                </Carousel.Item>
            </Carousel>
            </div>
    );
}
 
export default MainCarousel;