import React , {useEffect , useState} from 'react' ;
import axios from 'axios';
function Formulaire(propos){
    const [texte, setTexte] = useState('');  
    const handleTexteChange = (event) => {
        setTexte(event.target.value);
    }
    const [selectType, setSelectedOption] = useState('');
    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };
    const [date1, setDate1] = useState(new Date()); // Initialisez la première date avec une valeur par défaut
    const [date2, setDate2] = useState(new Date()); // Initialisez la deuxième date avec une valeur par défaut
    const handleDate1Change = (event) => {
        setDate1(event.target.value);
    }
    const handleDate2Change = (event) => {
    setDate2(event.target.value);
    }
    const posteConger = {
        idpersonnel : propos.iduser,
        type : selectType ,
        cause : texte ,
        datedebut : date1 ,
        datefin : date2 ,
        notif : '',
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(posteConger)
            const response = await axios.post('http://localhost:5003/api/Data/traitement-conger', posteConger, {
            })
            if(response!=null){
                alert('Conger Demander') ;
            }
        } catch (error) {
            console.error();
        }
        
    };
    return(
        <div className='col-4 formulaire_conger'>
            <span>Demande conger</span>
            <div className='row'>
                <form onSubmit={handleSubmit}>
                    <div className='row selecttype'>
                        <div className='row'>
                            <label> Type conger </label>
                        </div>
                        <select value={selectType} onChange={handleSelectChange}>
                            <option value=''> Choissisez</option>
                            <option value='0'> Deductible </option>
                            <option value='1'> Non Deductible </option>
                        </select>
                    </div>
                    <div className='row date'>
                        <div className='row '>
                            <label>Cause</label>
                        </div>
                        <textarea value={texte} onChange={handleTexteChange} />
                    </div>
                    <div className='row date'>
                        <div className='row'>
                            <div className='col'>
                                <div className='row'>
                                    <label>Date debut</label>
                                </div>
                                <input type="date" value={date1} onChange={handleDate1Change} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <div className='row'>
                                    <label>Date fin</label>
                                </div>
                                <input type="date" value={date2} onChange={handleDate2Change} />
                            </div>
                        </div>
                    </div>
                    <div className='row col-offset-2'>
                        <input type="submit" value="Demander"/>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Formulaire