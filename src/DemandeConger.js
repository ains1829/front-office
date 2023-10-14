import React , {useEffect , useState} from 'react' ;
import Formulaire from './Formulaire';
import './css/Formulaire.css'
import Conger from './Conger';
function DemandeConger(propos){
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setIsVisible(true);
    }, []);
    return(
        <div className='col-10'>
            <div className={`box ${isVisible ? 'slide-down' : ''} container-fluid content-request`}>
                <div className='row'>
                    <Conger/>
                    <Formulaire iduser={propos.iduser} />
                </div>
            </div>
        </div>
    );
}
export default DemandeConger