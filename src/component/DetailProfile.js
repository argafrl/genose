import DateFnsUtils from "@date-io/date-fns";
import { Grid, TextField } from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { useState } from "react";
import '../pages/Profile.scss';
const DetailProfile = (props) => {
    const onChange = props.onChange;
    const title = props.title;
    const atr = props.atr;
    const value = props.value;
    // const [state, setState] = useState('')
    return (
            <div className="detail-border border-profile">
                <Grid container spacing={0} className="detail-profile-grid">
                    <Grid item xs={3}>
                    <p>{title}</p>
                    </Grid>
                    <Grid item xs={9}>
                    {atr !== 'tanggal' && 
                    <TextField 
                    fullWidth
                    id="outlined-basic" 
                    variant="outlined"
                    name={ atr }
                    type={ atr }
                    value={ value }
                    onChange={onChange}
                    />}
                    {atr === 'tanggal' && 
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker
                        disableFuture
                        disableToolbar
                        variant="inline"
                        openTo="date"
                        format="yyyy-MM-dd"
                        views={["year", "month", "date"]}
                        inputVariant="outlined"
                        value={ value }
                        onChange={ onChange }
                        style={{ width:"100%"}}
                    />
                    </MuiPickersUtilsProvider>
                    }
                    </Grid>
                </Grid>
            </div>
    );
}
 
export default DetailProfile;