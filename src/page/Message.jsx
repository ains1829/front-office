import Footer from "../component/Footer"
import Header from "../component/Header"
import '../assets/scss/styles.css'
import user from '../assets/image/profile-2.svg'
import Datamessage from "../component/Datamessage"
import '../assets/fontawesome-5/css/all.min.css'
import { useState, useEffect } from "react";
function Message() {
    const [Personne_talk , setPersonn_talk] = useState([])
    const token  = `
        eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbmR5QGdtYWlsLmNvbSIsImlhdCI6MTcwNjg4MjIzNywiZXhwIjoxNzA2ODg1ODM3fQ.BF2N8SseTc1vr4bq2j6pppHueKxi1-LresJrsWaSgTA
    `
    useEffect(() => {
        fetch('http://192.168.43.79:3000/message/allUserDiscuss', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,  // Include the token in the 'Authorization' header
            },
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.status === 200) {
                setPersonn_talk(data.data);
            } else {
                alert(data.message)
            }
        })
        .catch(error => {
            // alert(error)
            console.log("errorr : " + error)
        });
    }, [token]);
    const [choix, setChoix] = useState(1);
    // Personne_talk && <>
    //     {
    //         setChoix(Personne_talk[0].id)
    //     }
    // </> 
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
                    {
                        // Personne_talk && Personne_talk.map((element , item)=>(
                        //     <div key={item} className="person_click" onClick={() => handleClick(element.id)}>
                        //         <img src={user} alt="" />
                        //         <div className="content-little">
                        //             <span className="Otheruser">{element.mail}</span>
                        //             <span className="litlle-mes">Welcome to our exciting announcement!</span>
                        //         </div>
                        //     </div>
                        // ))
                    }
                           <div className="person_click" onClick={() => handleClick(1)}>
                                 <img src={user} alt="" />
                                 <div className="content-little">
                                     <span className="Otheruser">Mirado Mamiarivony</span>
                                     <span className="litlle-mes">Welcome to our exciting announcement!</span>
                                 </div>
                             </div>       
                            <div className="person_click" onClick={() => handleClick(1)}>
                                 <img src={user} alt="" />
                                 <div className="content-little">
                                     <span className="Otheruser">Mirado Mamiarivony</span>
                                     <span className="litlle-mes">Welcome to our exciting announcement!</span>
                                 </div>
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
