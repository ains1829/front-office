import '../assets/scss/login.css'
import '../assets/fontawesome-5/css/all.min.css'
import logo from '../assets/image/1-removebg-preview.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
function Login() {
    const navigate = useNavigate()
    const [email , setEmail] = useState('') 
    const [password, setPassword] = useState('')
    const handle_email = (event) =>{
        setEmail(event.target.value)
    }
    const handle_password = (event) =>{
        setPassword(event.target.value)
    }
    const formdata = {
        mail: email,
        password : password
    }
    const submit = (event) => {
        event.preventDefault()
        axios
            .post('http://172.50.1.84:3000/signinlogin/authentication', formdata ,{
                headers : {
                    'Content-Type': 'application/json',
                }
            })
            .then((response) => {
                if(response.status === 200){
                    if(response.data.status === 200){
                        localStorage.setItem('token' , response.data.data.token) ;
                        alert('aha')
                        navigate("/acceuil")
                    }else{
                        alert('SOMETHIG WRONG')
                    }
                }
            })
    }
    return (
        <div className="div-content-form">
            <form>
                <div className='details'>
                    <img src={logo} alt="..." />
                    <figcaption>Connecter vous pour decouvrir plusieur fonctionnaliter</figcaption>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" onChange={handle_email} name="email" value={email} required />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" onChange={handle_password} name="password" value={password} required />
                </div>
                <div>
                    <label className='submit' htmlFor="submit">Connecter <i className='fas fa-arrow-right'></i></label>
                    <input onClick={submit} id="submit" type="submit" value="" />
                </div>
                <Link to='/acceuil'><i className='fas fa-arrow-left'></i> Retour </Link>
            </form>
        </div>
    )
}
export default Login