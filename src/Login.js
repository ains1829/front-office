import React, { useState } from 'react';
import './css/Login.css'
import Menu from './Menu'
import { BrowserRouter as Router } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import App from './App';
import axios from 'axios';
let token = '' 
function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const postData = {
        email : email,
        password : password
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(postData)
        const response = await axios.post('http://localhost:5003/api/Data/traitement-login', postData, {
        })
        if(response.data.message === "non"){
            alert('Identifiants incorrects');
        }else{
            if (response.data) {
                token = response.data.message
                console.log("ito = " + token)
                setIsLoggedIn(true);
            }
        }
    };
    console.log("token = " + token) 
    return(
        <div>
                {isLoggedIn ? (
                    
                    <App tokenEmail = {token}/>
            ) :(
                <div className="container-fluid">
                    <div className="row container text-center content-login">
                        <div className="col-8 bienvenu">
                            Bienvenue sur le site Ressource Humaine
                        </div>
                        <div className="col-4">
                            <form onSubmit={handleSubmit}>
                                <div className="row inputs">
                                    <div className="row">
                                        <label>Email</label>
                                    </div>
                                    <div className="row">
                                        <input type="email" onChange={(e) => setEmail(e.target.value)}  />
                                    </div>
                                </div>
                                <div className="row inputs">
                                    <div className="row">
                                        <label>Password</label>
                                    </div>
                                    <div className="row">
                                        <input type="password"  onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row">
                                    <input type="submit" 
                                    // onClick={basculerComposant}
                                    />
                                    {/* {afficherMenu ? <Login /> : <Menu />} */}
                                </div>
                            </form>
                            <div className="not-account">
                                <a href="#"> Create account ? </a>
                            </div>
                        </div>
                    </div>
                </div>
        )}
        </div>
    )
              
    
}
export default Login;