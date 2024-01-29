import Footer from "../component/Footer"
import Header from "../component/Header"
import '../assets/scss/styles.css'
import user from '../assets/image/profile-2.svg'
import Datamessage from "../component/Datamessage"
import '../assets/fontawesome-5/css/all.min.css'
import { useState, useEffect } from "react";
function Message() {
    const [choix, setChoix] = useState(1);
    const [data, setData] = useState(<Datamessage key={choix} idpersonne={choix} />);

    function writeMessage() {
        const div_message = document.querySelector('.messaging');
        const content_my_message = document.createElement('div');
        content_my_message.className = "me_boite";
        const span_message = document.createElement('span');
        const input_message = document.querySelector('input[type="text"]');
        span_message.innerHTML = input_message.value;
        span_message.className = "me";
        content_my_message.appendChild(span_message);
        div_message.appendChild(content_my_message);
        input_message.value = "";
    }
    const handleClick = (idpersonne) => {
        setChoix(idpersonne);
        setData(<Datamessage key={idpersonne} idpersonne={idpersonne} />)
    }
    // 
    return (
        <div className="content-data">
            <Header />
            <div className="content-message">
                <div className="person">
                    <h1>Discussion</h1>
                    <div onClick={() => handleClick(3)}>
                        <img src={user} alt="" />
                        <span className="Otheruser">Miaro Ramanantsoa</span>
                    </div>
                    <div onClick={() => handleClick(2)}>
                        <img src={user} alt="" />
                        <span className="Otheruser">Mirado Mamiarivony</span>
                    </div>
                    <div onClick={() => handleClick(1)}>
                        <img src={user} alt="" />
                        <span className="Otheruser">Tafita Anael</span>
                    </div>
                </div>
                <div className="message">
                    {data}
                    <div className="send">
                        <input type="text" name="message" placeholder="votre message" />
                        <label htmlFor="submit"> <i className="fas fa-paper-plane "></i> </label>
                        <input id="submit" type="submit" value="envoyer" onClick={writeMessage} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Message;
