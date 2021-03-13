import { useEffect, useState } from 'react';
import genose from '../api/genose';
import GlobalNavbar from '../component/GlobalNavbar';
import { useAuth } from '../config/Auth';
import './Info.scss';
import './Jadwal.scss';
import './Profile.scss';
import DetailProfile from '../component/DetailProfile';
import '../component/DetailProfile'
import MuiAlert from '@material-ui/lab/Alert';
import { Dialog, DialogActions, DialogContent, DialogTitle, Snackbar, CircularProgress } from '@material-ui/core';

const Profile = () => {
    const [Nama, setNama] = useState('');
    const [TanggalLahir, setTanggalLahir] = useState(new Date());
    const [Email, setEmail] = useState("");
    const [gantiPassword, setGantiPassword] = useState('');
    const [currentPassword, setCurrentPassword] = useState("");
    const [password, setPassword] = useState("");
    const [passwordValidation, setPasswordValidation] = useState("");
    const { authTokens } = useAuth();
    const [open, setOpen] = useState(false);
    const [openSnack, setOpenSnack] = useState(false);
    const [openSnackPasswordBerhasil, setOpenSnackPasswordBerhasil] = useState(false);
    const [openSnackPassword, setOpenSnackPassword] = useState(false);
    const handleEdit= async(e) =>{
        e.preventDefault()
        await genose.put("user/edit-user",{
            nama:Nama,
            email:Email,
            tanggal_lahir:TanggalLahir,
        },{ 
            headers: {jwtoken: authTokens}
        }).then((res) => {
            console.log(res);
            setOpenSnack(true);
        }).catch(err => {
            console.log(err);
        })
        }

    const handleEditPassword = async(e) => {
        e.preventDefault()
        await genose.post("user/password-compare",{
            password:currentPassword
        },{ 
            headers: {jwtoken: authTokens}
        }).then((res) => {
            console.log(res.status)
            if(res.status === 200 && password === passwordValidation){
                setGantiPassword(true);
            }
            console.log(res);
        }).catch(err => {
            console.log('Password Anda Salah')
            console.log(err);
        })
        if(gantiPassword){
            await genose.put("user/edit-user",{
                nama:Nama,
                email:Email,
                tanggal_lahir:TanggalLahir,
                password: password
            },{ 
                headers: {jwtoken: authTokens}
            }).then((res) => {
                console.log(res);
                setOpenSnackPasswordBerhasil(true);
                setGantiPassword(false);
            }).catch(err => {
                setOpenSnackPassword(true);
            })
        }
    }
      
    useEffect(async () => {
        const resGenose = await genose.get(`user/get-user`,{
            headers: {jwtoken: authTokens}
        });
        setNama(resGenose.data.data.nama);
        setTanggalLahir(resGenose.data.data.tanggal_lahir);
        setEmail(resGenose.data.data.email);
        console.log(resGenose);
    },[])

    const handleClickOpen = () => {
        setOpenSnack(false);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const Alert = (props) => {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }

    const handleCloseSnack = (event, reason) => {
        setOpenSnack(false);
    };
    
    const handleCloseSnackPasswordBerhasil = (event, reason) => {
        setOpenSnackPasswordBerhasil(false);
    };
    
    const handleCloseSnackPassword = (event, reason) => {
        setOpenSnackPassword(false);
    };
    return (
        <div className="profile">
            <GlobalNavbar />
            <div className="body">
                <div className="container-body">
                    <h2>Edit Profil</h2>
                    {Nama === '' && <div className="circularTengah"><CircularProgress color="primary" /> </div>}
                    {Nama !== '' && <div className="wrapper">
                        <div className="wrapper-box detail-profile">
                            
                            <div className="detail-border-atas" />
                            <DetailProfile onChange={(e) => setNama(e.target.value)} title="Nama" atr ="name" value={ Nama } />
                            <DetailProfile onChange={setTanggalLahir} title="Tanggal Lahir" atr ="tanggal" value={ TanggalLahir }/>
                            <DetailProfile onChange={(e) => setEmail(e.target.value)} title="Email" atr ="email" value={ Email }/>
                            <div className="tombol-wrapper">
                                <form onSubmit={handleEdit}>               
                                <button className="tombol hasil" type="submit">Simpan</button>
                                </form>
                                <button className="tombol hasil kiri" onClick={handleClickOpen}>Ubah Password</button>
                               
                            </div>
                            <Dialog
                                fullWidth
                                maxWidth='md'
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                                className="dialog"
                            >
                                
                                <DialogTitle id="alert-dialog-title" className="title-dialog">
                                    <h2>Ubah Password</h2>
                                </DialogTitle>
                                <DialogContent dividers>
                                    <div className="wrapper-dialog">
                                        <DetailProfile onChange={(e) => setCurrentPassword(e.target.value)} title="Password sekarang" atr ="password" value={currentPassword} />
                                        <DetailProfile onChange={(e) => setPassword(e.target.value)} title="Password baru" atr ="" value={password} />
                                        <DetailProfile onChange={(e) => setPasswordValidation(e.target.value)}title="Ketik ulang password" atr ="" value={passwordValidation} />
                                    </div>
                                </DialogContent>
                                <DialogActions className="actionPassword">
                                <div className="tombolUbahPassword">
                                    <div className="tombol-wrapper batal">
                                        <button className="tombol tipis" onClick={handleClose}>Batal</button>
                                    </div>
                                    <form onSubmit={handleEditPassword}>
                                    <div className="tombol-wrapper">
                                        <button className="tombol" type="submit">Simpan</button>
                                    </div>
                                    </form>
                                </div>
                                </DialogActions>
                                <Snackbar open={openSnackPasswordBerhasil} autoHideDuration={6000} onClose={handleCloseSnackPasswordBerhasil}>
                                    <Alert onClose={handleCloseSnackPasswordBerhasil} severity={"success"}>
                                        Password berhasil diubah!
                                    </Alert>
                                </Snackbar>
                                <Snackbar open={openSnackPassword} autoHideDuration={6000} onClose={handleCloseSnackPassword}>
                                    <Alert onClose={handleCloseSnackPassword} severity={"error"}>
                                        Password yang Anda masukkan salah!
                                    </Alert>
                                </Snackbar>
                            </Dialog>
                            <Snackbar open={openSnack} autoHideDuration={6000} onClose={handleCloseSnack}>
                                <Alert onClose={handleCloseSnack} severity="success">
                                    Profil berhasil diperbarui!
                                </Alert>
                            </Snackbar>         
                        </div>  
                    </div>}
                </div>
            </div>
        </div>
    );
}
 
export default Profile;