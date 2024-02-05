import { useEffect, useState } from 'react';
import user from '../assets/image/profile-2.svg';

function Datamessage({ idpersonne }) {
  console.log(idpersonne)
  const [Message, setMessage] = useState([]);
  useEffect (()=>{
    setMessage(
  [
  {
    "userSend": {
      "id": 1,
      "username": "advertiser_username"
    },
    "contenu": "Welcome to our exciting announcement!"
  },
  {
    "userSend": {
      "id": 2,
      "username": "your_username"
    },
    "contenu": "Hello there! How can I assist you today?"
  },
  {
    "userSend": {
      "id": 1,
      "username": "advertiser_username"
    },
    "contenu": "Don't miss out on our exclusive offers!"
  },
  {
    "userSend": {
      "id": 1,
      "username": "your_username"
    },
    "contenu": "I appreciate the information. Thank you!"
  },
  {
    "userSend": {
      "id": 1,
      "username": "your_username"
    },
    "contenu": "I appreciate the information. Thank you!"
  },
  {
    "userSend": {
      "id": 2,
      "username": "your_username"
    },
    "contenu": "I appreciate the information. Thank you!"
  },
]

  
    )
  } , [])

  // useEffect(() => {
  //   try {

  //   } catch (error) {

  //   }
  //   const fetchAPI = async () => {
  //     try {
  //       const response = await fetch('http://172.10.3.165:1000/message/allMessage?idReceive=2', {
  //         method: 'GET',
  //         headers: {
  //           'Authorization': `Bearer ${token} `,
  //           'Content-Type': 'application/json',
  //         }
  //       });
  //       if (!response.ok) {
  //         throw new Error('Erreur lors de la requête API');
  //       }
  //       const result = await response.json();
  //       setMessage(result);
  //     } catch (error) {
  //       console.log(error)
  //     }

  //   };
  //   fetchAPI();
  // }, []);
  console.log(Message);

  return (
    <div className="data">
      <div className="content-persone">
        <img src={user} alt="" />
        <span className="name"> Miarotiana Manarantsoa </span>
      </div>
      <div className="messaging">
        {Message.map((element, items) => (
          element.userSend.id === 1 ?
            <div key={items} className='boite_annonceur'>
              <span className='annonceur'>{element.contenu}</span>
            </div>
            :
            <div key={items} className='me_boite'>
              <span className='me'>{element.contenu}</span>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Datamessage;
