const InputEmail = () => {
    return (
        <div className="inputEmail">
            <TextField
                margin="normal"
                fullWidth
                id="email"
                variant="outlined"
                label="E-mail"
                placeholder="example@gmail.com"
                name="email"
                autoComplete="email"
                autoFocus
                focused
                InputLabelProps={{
                shrink: true,
                }}
                InputProps={{
                    endAdornment: <InputAdornment position="start"><AlternateEmailIcon className="textfield-icon" /></InputAdornment>,
                }}
                className="textfield"
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
    );
}
 
export default InputEmail;