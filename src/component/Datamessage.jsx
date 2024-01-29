import { useEffect, useState } from 'react';
import user from '../assets/image/profile-2.svg';

function Datamessage({ idpersonne }) {
  // const [person, setPersonne] = useState({ id: '', names: '', firstnames: '' });
  const [Message, setMessage] = useState([]);
  const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0YWZAZ21haWwuY29tIiwiaWF0IjoxNzA1OTQ5OTQ2LCJleHAiOjE3MDU5NTEzODZ9.9nN0KGeRiGaytb-sYSPGzYCNn5lSG6SeRWvBfjIv9XY";
  useEffect(() => {
    try {

    } catch (error) {

    }
    const fetchAPI = async () => {
      try {
        const response = await fetch('http://172.10.3.165:1000/message/allMessage?idReceive=2', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token} `,
            'Content-Type': 'application/json',
          }
        });
        if (!response.ok) {
          throw new Error('Erreur lors de la requête API');
        }
        const result = await response.json();
        setMessage(result);
      } catch (error) {
        console.log(error)
      }

    };
    fetchAPI();
  }, []);
  console.log(Message);
  // useEffect(() => {
  //   if (idpersonne === 1) {
  //     setPersonne({ id: 1, names: "Tafita", firstnames: "Anael" });
  //     setMessage([{ for_who: "1", mp: "salut" }, { for_who: "0", mp: "salut" }]);
  //   }
  //   if (idpersonne === 2) {
  //     setPersonne({ id: 2, names: "Mirado", firstnames: "Mamiarivony" });
  //     setMessage([{ for_who: "1", mp: "Miradooooooo" }, { for_who: "0", mp: "popopopopo" } , {for_who : "0" , mp:"Zay lesy eh"},{ for_who: "1", mp: "Aiza no fotoana . 20M fmg zany an" } , {for_who : "0" , mp:"Ambondrona ok @8h"}]);
  //   }
  //   if (idpersonne === 3) {
  //     setPersonne({ id: 3, names: "Miarotiana", firstnames: "Ramanantsoa" });
  //     setMessage([{ for_who: "1", mp: "salut" }, { for_who: "0", mp: "salut" }]);
  //   }
  // }, [idpersonne]);

  return (
    <div className="data">
      <div className="content-persone">
        <img src={user} alt="" />
        <span className="name"> TEST MAFIA </span>
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
