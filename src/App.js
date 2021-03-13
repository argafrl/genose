import React, { useState } from 'react';
import { AuthContext } from './config/Auth';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from './config/PrivateRoute';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Info from './pages/Info';
import Jadwal from './pages/Jadwal';
import Hasil from './pages/Hasil';
import Profile from './pages/Profile';
import LupaPass from './pages/LupaPass';
import './App.scss';
import Admin from './pages/Admin';

function App() {

  const existingToken = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingToken);
  const [jadwalGlobal, setJadwalGlobal] = useState(false);

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data))
    setAuthTokens(data);
  }
  
  return (
    <AuthContext.Provider value={{authTokens, setAuthTokens: setTokens}}>
    {/* <AuthContext.Provider value={false}> */}
    <Router>
    <div className="globalStyles" />
        <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/info" component={Info} />
        <Route exact path="/jadwal" component={Jadwal} />
        <Route exact path="/hasil" component={Hasil} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/lupapass" component={LupaPass} />
        <Route exact path="/admin" component={Admin} />
        <PrivateRoute exact path="/" component={Home} />
        </Switch>
    </Router>
    </AuthContext.Provider>
  );
}

export default App;
