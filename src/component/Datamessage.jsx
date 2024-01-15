import { useEffect, useState } from 'react';
import user from '../assets/image/5856.png';

function Datamessage({ idpersonne }) {
  const [person, setPersonne] = useState({ id: '', names: '', firstnames: '' });
  const [Message, setMessage] = useState([{ for_who: '', mp: '' }]);

  useEffect(() => {
    if (idpersonne === 1) {
      setPersonne({ id: 1, names: "Tafita", firstnames: "Anael" });
      setMessage([{ for_who: "1", mp: "salut" }, { for_who: "0", mp: "salut" }]);
    }
    if (idpersonne === 2) {
      setPersonne({ id: 2, names: "Mirado", firstnames: "Mamiarivony" });
      setMessage([{ for_who: "1", mp: "Miradooooooo" }, { for_who: "0", mp: "popopopopo" }]);
    }
    if (idpersonne === 3) {
      setPersonne({ id: 3, names: "Miarotiana", firstnames: "Ramanantsoa" });
      setMessage([{ for_who: "1", mp: "salut" }, { for_who: "0", mp: "salut" }]);
    }
  }, [idpersonne]);

  return (
    <div className="data">
      <div className="content-persone">
        <img src={user} alt="" />
        <span className="name">{`${person.names} ${person.firstnames} `}</span>
      </div>
      <div className="messaging">
        {Message.map((element, items) => (
          element.for_who === "1" ? 
            <div key={items} className='boite_annonceur'>
                <span className='annonceur'>{element.mp}</span>
            </div> 
            : 
            <div key={items} className='me_boite'>
                <span className='me'>{element.mp}</span>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Datamessage;
