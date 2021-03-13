import { Grid } from "@material-ui/core";
import '../pages/Jadwal.scss';

const DetailPemesanan = (props) => {
    const title = props.title;
    const content = props.content;

    return (
        <div className="detail-pemesanan-border">
            <div className="detail-border">
            <Grid container spacing={0}>
                <Grid item xs={12} sm={6}>
                    <p className="kiri">{ title }</p>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <p className="kanan">{ content }</p>
                </Grid>
            </Grid>
            </div>
        </div>
    );
}
 
export default DetailPemesanan;