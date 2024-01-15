import logo from '../assets/image/1-removebg-preview.png' ;
import '../assets/fontawesome-5/css/all.min.css'
function Footer(){
    return (
        <footer>
            <div className="logo">
                <div>
                    <img src={logo} alt="" />
                    <figcaption className='copyright'>
                        Copyright © 2024 Projet de It-Universite
                    </figcaption>
                </div>
                <div className='reseaux'>
                    <i className='fab fa-facebook-f '></i>
                    <i className='fab fa-instagram '></i>
                    <i className='fab fa-twitter '></i>
                </div>
            </div>  
            <div className="company">
                <label htmlFor="">Company</label>
                <span>BLOG</span>
                <span>PRICING</span>
                <span>ABOUT US</span>
                <span>CONTACT-US</span>
                <span>It-Universite MADAGASCAR</span>
            </div>
            <div className="Techno">
                <label htmlFor="">Language</label>
                <span>HTML CSS</span>
                <span>REACT</span>
                <span>SPRING BOOT</span>
                <span>IONIC</span>
            </div>
        </footer>
    )
}
export default Footer