import Footer from "../component/Footer"
import Header from "../component/Header"
import '../assets/scss/styles.css'
import { useState , useEffect } from "react"
import { Https } from "../http/Http"
import { useNavigate } from "react-router-dom"
function MonSolde(){
  const [solde , setSolde] = useState(0)
  const [liste_code , setCode] = useState([])
  const [code , setCode_crediter] = useState(0)
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  if(token === null){
    navigate('/login')
  }
  useEffect(() => { 
        fetch(`${Https().liens}/api/usermir/getSoldeOfUser`,{
          headers : {
            'Content-Type': 'application/json' ,
            'Authorization': `Bearer ${token} `
          }
        })
            .then(response => response.json())
            .then(data => {
              if (data.status === 200) {
                    setSolde(data.data.solde);
                } else {
                }
            })
            .catch(error => {
                console.log("errorr : " + error)
            });
  }, [token])
  useEffect(() => { 
        fetch(`${Https().liens}/api/usermir/getAllCodeCredit`)
            .then(response => response.json())
            .then(data => {
                console.log(data.data)
                if (data.status === 200) {
                    setCode(data.data);
                } else {
                }
            })
            .catch(error => {
                console.log("errorr : " + error)
            });
  }, [])
  const handle_text = (e) =>{
    setCode_crediter(e.target.value);
  }
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    };
    const response = await fetch(`${Https().liens}/api/usermir/creditercompte?code=${code}`, requestOptions);
    if(response.ok){
        const dat = await response.json()
        if(dat.status === 500){
          alert(dat.message)
        }else{
          await fetch(`${Https().liens}/api/usermir/getSoldeOfUser`, {
              headers : {
                'Content-Type': 'application/json' ,
                'Authorization': `Bearer ${token} `
              }
          })
            .then(response => response.json())
            .then(data => {
                console.log(data.data)
                if (data.status === 200) {
                  setSolde(data.data.solde);
                } else {
                }
            })
            .catch(error => {
                console.log("errorr : " + error)
            });
        }
      }
    }
  return(
    <div className="content-data">
      <Header/>
      <div className="monSolde">
        <div className="content-solde-form">
            <div className="solde">
              <div>
                <span className="sol">votre solde</span>
              </div>
              <div>
                <span className="price">{solde}</span>
                <span>Ar</span>
              </div>
            </div>
            <div className="form-credit-solde">
              <div>
                <input onChange={handle_text} value={code} type="text" placeholder="copier ici le code" />
                <input onClick={handleSubmit} type="submit" value="Crediter" />
              </div>
            </div>
        </div>
        <div className="table">
          <table>
            <thead>
              <tr className="tr">
                <th>Code</th>
                <th>valeur</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {
                liste_code && 
                liste_code.map((item  , index) =>(
                  
                  <tr className={`Etat${item.etats}`} key={index}>
                    <td>{item?.code}</td>
                    <td>{item?.valeur} Ar</td>
                    {
                      item.etats === 1  ?
                        <td className="invalide">Invalide</td> :
                        <td className="valide">Valide</td>
                    }
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
export default MonSolde