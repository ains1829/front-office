import '../assets/scss/login.css' 
import '../assets/fontawesome-5/css/all.min.css'
import logo from '../assets/image/1-removebg-preview.png' ;
import { Link } from 'react-router-dom';
function Login(){
    return(
        <div className="div-content-form">
            <form>
                <div className='details'>
                    <img src={logo} alt="..." />
                    <figcaption>Connecter vous pour decouvrir plusieur fonctionnaliter</figcaption>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" />
                </div>   
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" />
                </div>   
                <div>
                    <label className='submit' htmlFor="submit">Connecter <i className='fas fa-arrow-right'></i></label>
                    <input id="submit" type="submit" value=""/>
                </div>
                <Link to='/acceuil'><i className='fas fa-arrow-left'></i> Retour </Link>
            </form>
        </div>
    )
}
export default Login