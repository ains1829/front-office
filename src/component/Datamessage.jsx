import { useEffect, useState , useRef , useLayoutEffect } from 'react';
import user from '../assets/image/profile-2.svg';
import { useNavigate } from 'react-router-dom';
import { Https } from '../http/Http';

function Datamessage({ idpersonne , email }) {
  console.log(idpersonne)
  const tokens = localStorage.getItem('token')
  const navigate = useNavigate()
  if(tokens === null) {
    navigate('/login')
  }
  const [Message, setMessage] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await fetch(`${Https().liens}/message/allMessage?idReceive=${idpersonne}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${tokens} `,
            'Content-Type': 'application/json',
          }
        });
        if(response.status === 200){
          const result = await response.json();
          setMessage(result.data);
        }else{
            navigate('/login')
        }
      } catch (error) {
        console.log(error)
      }

    };
    fetchAPI();
  },[idpersonne , tokens , navigate]);
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
          navigate('/login')
        }
      } catch (error) {
        console.log(error)
      }

    };
    fetchAPI();
  },[tokens , navigate]);
  const scrollContainerRef = useRef(null);
  useLayoutEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
    }
  }, [Message]);

  return (
    <div className="data">
      {
        Message.length === 0 ? <div className='message-not-found'>No Message found</div> : 
        <>
          <div className="content-persone">
            <img src={user} alt="" />
            <span className="name"> {email} </span>
        </div>
        <div ref={scrollContainerRef} id='scroll-container' className="messaging" style={{ height: '600px', overflowY: 'scroll' }}>
          {Message.map((element, items) => (
            element.userSend.id !== me?.id ?
              <div key={items} className='boite_annonceur'>
                <span className='annonceur'>{element.contenu}</span>
              </div>
              :
              <div key={items} className='me_boite'>
                <span className='me'>{element.contenu}</span>
              </div>
          ))}
        </div>
        </>
      }
      
    </div>
  );
}

export default Datamessage;
