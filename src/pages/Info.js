import "./Info.scss";
import AccordionInfo from "../component/Accordion";
import GlobalNavbar from "../component/GlobalNavbar";
import Footer from '../component/Footer';

const Info = () => {
  const dataSummary = [
    {
      summary: "Apa itu GeNose",
      details:
        "GeNose merupakan syarat wajib bagi penumpang kereta api sebagai salah satu alternatif alat yang dapat mendeteksi virus Covid-19 dengan harga yang lebih terjangkau. Untuk saat ini, GeNose hanya dioperasikan di beberapa stasiun di pulau Jawa."
    },
    {
      summary: "Kapan waktu pemeriksaan GeNose?",
      details:
        "Pelayanan pemeriksaan GeNose c-19 mulai jam 07.00 -19.00 wib, atau menyesuaikan kondisi masing masing stasiun"
    },
    {
      summary: "Berapa biaya pemeriksaan GeNose?",
      details:
        "Tarif Pemeriksaan GeNose adalah Rp 20.000,-"
    },
    {
      summary: "Dimana lokasi pemeriksaan GeNose?",
      details:
        "- Stasiun Pasar Senen\nJl. Pasar Senen No.14, Senen, Kec. Senen, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10410\n\n- Stasiun Gambir\nJl. Medan Merdeka Tim. No.1, Gambir, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10110\n\n- Stasiun Bandung\nJl. Stasiun Barat, Kb. Jeruk, Kec. Andir, Kota Bandung, Jawa Barat 40181\n\n- Stasiun Cirebon\nJl. Stasiun No.6, Kesenden, Kec. Kejaksan, Kota Cirebon, Jawa Barat 45122\n\n- Stasiun Semarang Tawang\nJl. Taman Tawang No.1, Tj. Mas, Kec. Semarang Utara, Kota Semarang, Jawa Tengah 50211\n\n- Stasiun Yogyakarta\nJl. Ps. Kembang No.77, Sosromenduran, Gedong Tengen, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55271\n\n- Stasiun Solo Balapan\nJalan Wolter Monginsidi No.112, Kestalan, Kec. Banjarsari, Kota Surakarta, Jawa Tengah 57133\n\n- Stasiun Surabaya Pasarturi\nJl. Semarang No.1, Tembok Dukuh, Kec. Bubutan, Kota SBY, Jawa Timur 60173"
    },
    {
      summary: "Apa saja persyaratan pemeriksaan GeNose?",
      details:
        "- Calon penumpang harus dalam kondisi sehat dan mengantongi tiket\n- Dilarang merokok, makan, minum (kecuali air putih) selama 30 menit sebelum pemeriksaan sampel napas"
    },
    {
      summary: "Bagaimana prosedur pemeriksaan GeNose?",
      details:
        "1. Saat pemeriksaan, calon penumpang akan diminta untuk mengambil napas melalui hidung dan membuangnya melalui mulut sebanyak 3 kali\n2. Langkah tersebut terdiri dari 2 kali di awal ambil napas dan buang di dalam masker, kemudian saat pengambilan napas ke-3 langsung embuskan ke dalam kantong hingga penuh\n3. Kunci kantong agar udara di dalamnya tidak keluar dan serahkan kantong kepada petugas untuk dianalisis menggunakan alat GeNose\n4. Pemeriksaan dilakukan 1 kali tanpa pengulangan"
    },
    {
      summary: "Berapa lama masa berlaku pemeriksaan GeNose?",
      details:
        "Hasil pemeriksaan GeNose yang menunjukkan hasil negatif, nantinya akan berlaku 3 x 24 jam sejak dikeluarkannya hasil pemeriksaan tersebut."
    },
  ];
  
  return (
    <div className="info">
      <GlobalNavbar />
      <div className="body">
        <div className="container-body">
          <h2>
            Informasi
            <br />
            Seputar GeNose
          </h2>
          {dataSummary.map(dataSum => (
              <AccordionInfo
              key={dataSum.summary}
              summary={dataSum.summary}
              details={dataSum.details}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Info;
