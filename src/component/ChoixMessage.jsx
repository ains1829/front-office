import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Https } from "../http/Http";
function ChoixMessage({iduser}){
    console.log(iduser)
    const tokens = localStorage.getItem('token')
    const navigate = useNavigate()
    function check_choix(value){
        console.log(`${Https().liens}/message/envoyerMessage?idReceive=${iduser}&contenu=${value}`)
       axios
            .post(`${Https().liens}/message/envoyerMessage?idReceive=${iduser}&contenu=${value}`, null ,{
                headers : {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${tokens}`
                }
            })
            .then((response) => {
                if(response.status === 200){
                    alert('Message sent successfully')
                }else{
                    localStorage.removeItem('token');
                    navigate('/login')
                }
            })
            .catch((error)=>{
                console.error('Error ' , error)
            })
    }
    return(
        <div className="choix-message">
            <h6>Vous voulez le contacter par :</h6>
            <span onClick={()=>check_choix('bonjour !')}>Bonjour ! </span>
            <span onClick={()=>check_choix('J\'aime bien votre voiture ! !')}> J'aime bien votre voiture !</span>
            <span onClick={()=>check_choix('Suis interesser !')}> Suis interesser ! </span>
        </div>
    )
}
export default ChoixMessage