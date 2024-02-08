import { useEffect, useState , useRef , useLayoutEffect } from 'react';
import user from '../assets/image/profile-2.svg';

function Datamessage({ idpersonne , email }) {
  console.log(idpersonne)
  const tokens = `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbmR5QGdtYWlsLmNvbSIsImlhdCI6MTcwNzE2NTkwMSwiZXhwIjoxNzA3MTY5NTAxfQ.j5iBBmAVn5tMYz8Iu2PRcrz3G4GmWN5PaoTvx-Sbd3A`
  const [Message, setMessage] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await fetch(`http://192.168.43.79:3000/message/allMessage?idReceive=${idpersonne}`, {
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
          alert('TOLOGIN')
        }
      } catch (error) {
        console.log(error)
      }

    };
    fetchAPI();
  },[idpersonne , tokens]);
  const [me , setMe] = useState(null)
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await fetch(`http://192.168.43.79:3000/message/findUserConnected`, {
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
          alert('TOLOGIN')
        }
      } catch (error) {
        console.log(error)
      }

    };
    fetchAPI();
  },[tokens]);
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
