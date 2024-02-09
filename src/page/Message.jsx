import Footer from "../component/Footer"
import Header from "../component/Header"
import '../assets/scss/styles.css'
import user from '../assets/image/profile-2.svg'
import Datamessage from "../component/Datamessage"
import '../assets/fontawesome-5/css/all.min.css'
import { useState, useEffect } from "react";
import nodata from '../assets/image/9169253.jpg'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Https } from "../http/Http"
function Message() {
    const [Personne_talk, setPersonn_talk] = useState([]);
    const navigate = useNavigate()
    const tokens = localStorage.getItem('token')
    if(tokens === null){
        navigate('/login')
    }
    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${Https().liens}/message/allUserDiscuss`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokens}`,
          },
        });
        console.log(response)
        if(response.status === 200){
            const data = await response.json();
            if (data.status === 200) {
              setPersonn_talk(data.data);
              console.log(data.data)
            } else {
                console.log(data.message)
            }
        }else{
            localStorage.removeItem('token');
            navigate('/login')
        }
      } catch (error) {
        console.log(error)
      }
    };
    fetchData();
  }, [tokens , navigate]);
   const [me , setMe] = useState(null)
    useEffect(() => {
        const fetchAPI = async () => {
        try {
            const response = await fetch(`${Https().liens}/message/findUserConnected`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${tokens} `,
                'Content-Type': 'application/json',
            }
            });
            if(response.status === 200){
            const result = await response.json();
            setMe(result.data);
            }else{
                localStorage.removeItem('token');
                navigate('/login')
            }
        } catch (error) {
            console.log(error)
        }

        };
        fetchAPI();
    },[tokens , navigate]);
    const [data, setData] = useState(null);
    const [choix , setChoix] = useState(0)
    useEffect(() => {
    if (Personne_talk.length !== 0) {
        setChoix(Personne_talk[0].id)
      setData(<Datamessage key={Personne_talk[0].id} idpersonne={Personne_talk[0].id} email={Personne_talk[0].mail}/>);
    } else {
      setData(null);
    }
  }, [Personne_talk]);
    function writeMessage() {
        const div_message = document.querySelector('.messaging');
        const content_my_message = document.createElement('div');
        content_my_message.className = "me_boite";
        const span_message = document.createElement('span');
        const input_message = document.querySelector('input[type="text"]');
        span_message.innerHTML = input_message.value;
        const form_data = input_message.value;
        span_message.className = "me";
        content_my_message.appendChild(span_message);
        div_message.appendChild(content_my_message);
        input_message.value = "";
        console.log(form_data)
        axios
            .post(`${Https().liens}/message/envoyerMessage?idReceive=${choix}&contenu=${form_data}`, null ,{
                headers : {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${tokens}`
                }
            })
            .then((response) => {
                if(response.status === 200){
                }else{
                    localStorage.removeItem('token');
                    navigate('/login')
                }
            })
            .catch((error)=>{
                console.error('Error ' , error)
            })
            
    }
    const handleClick = (idpersonne , mail) => {
        setChoix(idpersonne)
        setData(<Datamessage key={idpersonne} idpersonne={idpersonne} email={mail}/>)
    }
    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        } else {
            return text.substring(0, maxLength - 3) + '....';
        }
    };
    return (
        <div className="content-data">
            <Header />
            <div className="content-message">
                <div className="person">
                    {
                        Personne_talk.length === 0 ? <div className="nodata">
                            <img src={nodata} alt="..." />
                        </div> : 
                        Personne_talk && Personne_talk.map((element , item)=>(
                            <div key={item} className="person_click" onClick={() => handleClick(element?.id , element?.mail)}>
                                <img src={user} alt="" />
                                <div className="content-little">
                                    <span className="Otheruser">{element?.mail}</span>
                                        {
                                            element.senderId.id === me?.id ? <span className="litlle-mes">Vous : {truncateText(element?.lastMessage , 25)}</span> : <span className="litlle-mes">{truncateText(element?.lastMessage , 25)}</span>
                                        }
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="message">
                    {data}
                    {
                        Personne_talk.length === 0 ? '' : 
                        <div className="send">
                            <input type="text" name="message" placeholder="votre message" />
                            <label htmlFor="submit"> <i className="fas fa-paper-plane "></i> </label>
                            <input id="submit" type="submit" value="envoyer" onClick={writeMessage} />
                        </div>
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Message;
