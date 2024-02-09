import { useState , useEffect } from "react";
import logo from '../assets/image/1-removebg-preview.png' ;
import { Link } from "react-router-dom";
function Header(){
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const scrollThreshold = 50; 
        setIsScrolled(scrollPosition > scrollThreshold);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
  }, []);  
    const localstorag = localStorage.getItem('token')                       
    return(
        <header className={isScrolled ? 'scrolled' : ''}>
            <div className="logo">
                <img src={logo} alt="..." />
            </div>
            <div className="nav-bar">
                <span>
                    <Link to="/acceuil">
                        Acceuil
                    </Link>
                </span>
                <span>
                    {
                        localstorag === null ? <Link to="/login">Message</Link> : <Link to="/message">Message</Link>
                    }
                </span>
                <span>
                    {
                        localstorag === null ? <Link to="/login">Favoris</Link> : <Link to="/favorie">Favoris</Link>
                    }
                </span>
                <span>
                    <Link to="/recherche">
                        Recherche
                    </Link>
                </span>
                <span> 
                    {
                        localstorag === null ? <Link to="/login">Moi</Link> : <Link to="/mesannonce">Moi</Link>
                    }
                </span>
            </div>
            <Link to="/login" className="connect">
                <span className="seconnecter">
                    Se Connecter
                </span>
            </Link>
        </header>
    )
}
export default Header