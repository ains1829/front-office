import Footer from "../component/Footer"
import Header from "../component/Header"
import '../assets/scss/styles.css'
import user from '../assets/image/5856.png'
import Datamessage from "../component/Datamessage"
import ReactDOM from 'react-dom';
import { useState } from "react"
function Message(){
    const [choix , setchoix] = useState(1)
    const [data , setData] = useState(<Datamessage idpersonne={1} />)
    function writeMessage(){
        const div_message = document.querySelector('.messaging')
        const content_my_message = document.createElement('div')
        content_my_message.className = "me_boite"
        const span_message = document.createElement('span')
        const input_message = document.querySelector('input[type="text"]')
        span_message.innerHTML = input_message.value
        span_message.className = "me"
        content_my_message.appendChild(span_message)
        div_message.appendChild(content_my_message)
        input_message.value = ""
    }
    const click_change = (idpersonne) => {
        const div_message = document.querySelector('.messaging')
        div_message.innerHTML = ''
        setchoix(idpersonne)
    }
    const handleClick = (idpersonne) =>{
        click_change(idpersonne)
        console.log(<Datamessage idpersonne={idpersonne} />)
        setData(<Datamessage idpersonne={idpersonne} />)
    }
    return (
        <div className="content-data">
            <Header />
            <div className="content-message">
                <div className="person">
                    <h1>Discussion</h1>
                    <div onClick={()=>handleClick(3)}>
                        <img src={user} alt="" />
                        <span>Miaro Ramanantsoa</span>
                    </div>
                    <div onClick={()=>handleClick(2)}>
                        <img src={user} alt="" />
                        <span>Mirado Mamiarivony</span>
                    </div>
                    <div onClick={()=>handleClick(1)}>
                        <img src={user} alt="" />
                        <span>Tafita Anael</span>
                    </div>
                </div>
                <div className="message">
                    {
                        data
                    }
                    <div className="send">
                        <input type="text" name="message" placeholder="votre message"/>
                        <input type="submit" value="envoyer" onClick={writeMessage}/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Message