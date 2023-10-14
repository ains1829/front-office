import React , {useEffect , useState} from 'react' ;
import Formulaire from './Formulaire';
import './css/Formulaire.css'

function Conger(){
    return(
        <div className='col-8'>
            <div className='row card-body othercard'>
                <strong>Cause : </strong><span>Nanao vacances</span>
                <div className='row justify-content-end'>
                    <div className='col-3'>Debut : 2023-10-10  </div> 
                    <div className='col-3'>Fin : 2023-10-10 </div> 
                </div>
            </div>
            <div className='row card-body othercard'>
                <strong>Cause : </strong><span>Nanao vacances</span>
                <div className='row justify-content-end'>
                    <div className='col-3'>Debut : 2023-10-10  </div> 
                    <div className='col-3'>Fin : 2023-10-10 </div> 
                </div>
            </div>
            <div className='row card-body othercard'>
                <strong>Cause : </strong><span>Nanao vacances</span>
                <div className='row justify-content-end'>
                    <div className='col-3'>Debut : 2023-10-10  </div> 
                    <div className='col-3'>Fin : 2023-10-10 </div> 
                </div>
            </div>
        </div>
    );
}
export default Conger;