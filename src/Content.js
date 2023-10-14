import './css/content.css'
import React , { useEffect, useState }  from 'react';
import { BrowserRouter as Router, Route, Link , Routes} from 'react-router-dom';
import axios from 'axios';
import userEvent from '@testing-library/user-event';
function Content(){
    const [calendar , setcalendar] =useState([]);
    useEffect(()=>{
        fetch('http://localhost:5003/Calendar/calendar')
            .then(response=>response.json())
            .then(data=>{
                setcalendar(data);
            })
            .catch(error=>{
                console.log("errorr")
            });
    } , []);
    const [Services , setServices] =useState([]);
    useEffect(()=>{
        fetch('http://localhost:5003/Calendar/service')
            .then(response=>response.json())
            .then(data=>{
                setServices(data);
            })
            .catch(error=>{
                console.log("errorr")
            });
    } , []);
    const [Diplomes , setDiplomes] =useState([]);
    useEffect(()=>{
        fetch('http://localhost:5003/Calendar/Diplome')
            .then(response=>response.json())
            .then(data=>{
                setDiplomes(data);
            })
            .catch(error=>{
                console.log("errorr")
            });
    } , []);
    const [Situation_matrimon , SetSituation] =useState([]);
    useEffect(()=>{
        fetch('http://localhost:5003/Calendar/situation')
            .then(response=>response.json())
            .then(data=>{
                SetSituation(data);
            })
            .catch(error=>{
                console.log("errorr")
            });
    } , []);    
    // situation
    const handleCheckboxChange_situation = (id) => {
        SetSituation((prevData) =>
          prevData.map((item) =>
            item.idSituation === id ? { ...item, isCheckedSituation: !item.isCheckedSituation } : item
          )
        );
      };
    
      const handleInputChange_note_situation = (id, value) => {
        SetSituation((prevData) =>
          prevData.map((item) =>
            item.idSituation === id ? { ...item, noteSituation: value } : item
          )
        );
      };
      //
    //    
    const [Nationalite , SetNationalite] =useState([]);
    useEffect(()=>{
        fetch('http://localhost:5003/Calendar/nationalite')
            .then(response=>response.json())
            .then(data=>{
                SetNationalite(data);
            })
            .catch(error=>{
                console.log("errorr")
            });
    } , []);  
    const handleCheckboxChange_nationalite = (id) => {
        SetNationalite((prevData) =>
          prevData.map((item) =>
            item.idNationalite === id ? { ...item, isCheckedNationalite: !item.isCheckedNationalite } : item
          )
        );
      };
      const handleInputChange_note_nationalite = (id, value) => {
        SetNationalite((prevData) =>
          prevData.map((item) =>
            item.idNationalite === id ? { ...item, noteNationalite: value } : item
          )
        );
      };
    const[Genre , SetGenre] = useState([
        {IdGenre : 8 , NameGenre : 'Femme' , isChecked_genre: false , noteGenre:0},
        {IdGenre : 9 , NameGenre : 'Homme' , isChecked_genre: false , noteGenre:0}
    ])
    const handleCheckboxChange_Genre = (id) => {
        SetGenre((prevData) =>
          prevData.map((item) =>
            item.IdGenre === id ? { ...item, isChecked_genre: !item.isChecked_genre } : item
          )
        );
      };
      const handleInputChange_note_Genre = (id, value) => {
        SetGenre((prevData) =>
          prevData.map((item) =>
            item.IdGenre === id ? { ...item, noteGenre: value } : item
          )
        );
      };

    const [check_jour , setCheckJour] = useState({
            checkbox:[]
        }
    ) ;
    const handleAddcheck = () =>{
        const newChecK = {
            isChecked:false,
        }
        setcalendar([...calendar , newChecK]);
        setCheckJour({
            ...check_jour ,
            calendar:[...check_jour.calendar , newChecK],
        })
    };
    const handleCheckBoxchange = (event , name_check)=>{
        const update = calendar.map((check)=>
            check.nameCalendar == name_check
            ?{...check , isChecked:event.target.checked}
            :check
        );
        setcalendar(update);
        const up = {
            ...check_jour,
            checkbox:update,
        };
        setCheckJour(up);
    }
    const [formData_heure_total, setFormData] = useState({
        Heure_normal: 0,
        HeureTotal: 0,
        age_min:0,
        age_max:0,
    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData_heure_total,
            [name]: value,
        });
    };
    const [selectedOption_service, setSelectedOption] = useState('');
    const handleSelectChange_service = (e) => {
        setSelectedOption(e.target.value);
    };
    const[input_coeff , setCoeff]=useState({
        coeffDiplome : 0 ,
        coeffExperience : 0 ,
        coeffSituation : 0 ,
        coeffNationalite :  0 ,
        coeffGenre : 0 ,
    })
    const handleinputChange_coeff = (e) =>{
        const {name , value} = e.target ;
        setCoeff({
            ...input_coeff,
            [name]:value,
        })
    }
    const[input_experience , setExperience] = useState({
        experience : 0 , 
    })
    const handleinputChange_experience = (e) =>{
        const {name , value} = e.target ;
        setExperience({
            ...input_experience,
            [name]:value,
        })
    }

    const [selectedOption_diplome, setSelectedOption_diplome] = useState('');
    const handleSelectChange_diplome = (e) => {
        setSelectedOption_diplome(e.target.value);
    };
      const otherData = {Salut : "coucou"}
      const select_Service =  {idservice : selectedOption_service}
      const select_diplome = {idDiplome : selectedOption_diplome}
      const postData = {
        calendarItems: calendar,
        otherData: otherData ,
        heure_work : formData_heure_total,
        services : select_Service ,
        situationItems : Situation_matrimon, 
        coefficient : input_coeff ,
        exp:input_experience,
        National:Nationalite,
        Genres : Genre,
        Diplome:select_diplome,
      };
      console.log(postData);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(calendar)
            const response = await axios.post('http://localhost:5003/api/Data/recuperer-donnees', postData, {
            })
            console.log(response.data)
        } catch (error) {
            console.error();
        }
        
    };
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setIsVisible(true);
    }, []);
    return (
        <div className="col-10">
            <div className={`box ${isVisible ? 'slide-down' : ''} container-fluid content`}>
                <div className="row">
                    <div className="col-8 annonce">
                        <div>
                            <form onSubmit={handleSubmit} method="get">
                                <div className="row align-items-start calendar">
                                    <label className='title-label' htmlFor="">Jour de travaille</label>
                                    {
                                        calendar.map((check)=>(
                                            <div className="col">
                                                <div className="form-check">
                                                    <input  className="form-check-input" type="checkbox"  id="flexCheckDefault" name={check.nameCalendar} defaultChecked={check.isChecked} onChange={(event)=>handleCheckBoxchange(event,check.nameCalendar)}/>
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        {check.nameCalendar}
                                                    </label>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    
                                </div>
                                <div className="row align-items-start heure-jour">
                                    <div className="col label-input">
                                        <div className="row">
                                            <label htmlFor="">Heure</label>
                                        </div>
                                        <div className="row">
                                            <input 
                                                type="number"  placeholder="heure" name='Heure_normal'
                                                defaultValue={formData_heure_total.Heure_normal}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="row homme-jour">
                                    <div className="col-12 label-input">
                                        <div className="row">
                                            <label htmlFor="">Heure Homme Jour</label>
                                        </div>
                                        <div className="row">
                                            <input type="number"  placeholder="Heure_total"
                                                name='HeureTotal'
                                                defaultValue={formData_heure_total.HeureTotal}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row select-service">
                                    <div className="col-12 label-select">
                                        <div className="row">
                                            <label>Service</label>
                                        </div>
                                        <div className="row">
                                            <select value={selectedOption_service} onChange={handleSelectChange_service}>
                                                {
                                                    Services.map((service)=>(
                                                        <option value={service.idService}>{service.nameService}</option>
                                                    ))
                                                }
                                            </select>

                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-start age">
                                    <div className="row age">
                                            <div className="row">
                                                <label>Age</label>
                                            </div>
                                            <div className="row align-items-start">
                                                <div className="col">
                                                    <input type="number" className='min' placeholder='min'
                                                    name='age_min'
                                                    value={formData_heure_total.age_min}
                                                    onChange={handleInputChange}
                                                    />
                                                </div>
                                                <div className="col">
                                                    <input type="number" className='max' placeholder='max'
                                                    name='age_max'
                                                    value={formData_heure_total.age_max}
                                                    onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                    </div>
                                </div>
                                <div className="row align-items-start critere">
                                
                                        <div className='row'> 
                                                <div className='col sous-critere'>
                                                    <div className='row'>
                                                        <label htmlFor="">Diplome</label>
                                                    </div>
                                                    <div className='row'>
                                                        <select value={selectedOption_diplome} onChange={handleSelectChange_diplome} >
                                                            {
                                                                Diplomes.map((diplome)=>(
                                                                    <option value={diplome.idDiplome}>{diplome.nameDiplome}</option>
                                                                ))
                                                            }
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className='col sous-critere'>
                                                    <div className='row'>
                                                        <label htmlFor="">Coefficient</label>
                                                    </div>
                                                    <div className='row'>
                                                        <input type="number" name="coeffDiplome" value={input_coeff.coeffDiplome} onChange={handleinputChange_coeff}/>
                                                    </div>
                                                </div>
                                        </div>
                                        <div className='row sous-2'> 
                                                <div className='col sous-critere-2'>
                                                    <div className='row'>
                                                        <label htmlFor="">Experience</label>
                                                    </div>
                                                    <div className='row'>
                                                        <input type="number" name="experience" value={input_experience.experience} onChange={handleinputChange_experience}  placeholder='ans'/>
                                                    </div>
                                                </div>
                                                <div className='col sous-critere'>
                                                    <div className='row'>
                                                        <label htmlFor="">Coefficient</label>
                                                    </div>
                                                    <div className='row'>
                                                        <input type="number" name="coeffExperience" value={input_coeff.coeffExperience} onChange={handleinputChange_coeff}/>
                                                    </div>
                                                </div>
                                        </div>
                                        <div>
                                            <h6>Situation Matrimoniale</h6>
                                        </div>
                                        <div className='row justify-content-center sous-thr'>
                                            <div className='col'>
                                                {
                                                    Situation_matrimon.map((Situation)=>(
                                                        <div className='row sous-3'>
                                                            <div className="col">
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" defaultChecked={Situation.isCheckedSituation}  onChange={() => handleCheckboxChange_situation(Situation.idSituation)} id="flecCheckDefault" />
                                                                    <label className="form-check-label" htmlFor="flecCheckDefault">
                                                                        {Situation.nameSituation}
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className='col'>
                                                                <input type="text" value={Situation.noteSituation}  onChange={(e) => handleInputChange_note_situation(Situation.idSituation, e.target.value)} placeholder='note'/>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                            <div className='col'>
                                                <div className='col sous-critere'>
                                                    <div className='row'>
                                                        <label htmlFor="">Coefficient</label>
                                                    </div>
                                                    <div className='row'>
                                                        <input 
                                                            type="text" 
                                                            name="coeffSituation" value={input_coeff.coeffSituation} onChange={handleinputChange_coeff}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h6>Nationalite</h6>
                                        </div>
                                        <div className='row justify-content-center sous-thr'>
                                            <div className='col'>
                                                {
                                                    Nationalite.map((nationalite) =>(
                                                    <div className='row sous-3'>
                                                        <div className="col">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultChecked={nationalite.isCheckedNationalite}  onChange={() => handleCheckboxChange_nationalite(nationalite.idNationalite)}  id="flecCheckDefault" />
                                                                <label className="form-check-label" htmlFor="flecCheckDefault">
                                                                    {nationalite.nameNationalite}
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className='col'>
                                                        <input type="text" value={nationalite.noteNationalite}  onChange={(e) => handleInputChange_note_nationalite(nationalite.idNationalite, e.target.value)} />
                                                        </div>
                                                    </div>
                                                    ))
                                                }
                                            </div>
                                            <div className='col'>
                                                <div className='col sous-critere'>
                                                    <div className='row'>
                                                        <label htmlFor="">Coefficient</label>
                                                    </div>
                                                    <div className='row'>
                                                        <input type="number" name="coeffNationalite" value={input_coeff.coeffNationalite} onChange={handleinputChange_coeff} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h6>Genre</h6>
                                        </div>
                                        <div className='row justify-content-center sous-thr'>
                                            <div className='col'>
                                                {
                                                    Genre.map((genre)=>(
                                                        <div className='row sous-3'>
                                                            <div className="col">
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" defaultChecked={genre.isChecked_genre}  onChange={() => handleCheckboxChange_Genre(genre.IdGenre)}  id="flecCheckDefault" />
                                                                    <label className="form-check-label" htmlFor="flecCheckDefault">
                                                                        {
                                                                            genre.NameGenre
                                                                        }
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className='col'>
                                                                <input type="text" value={genre.noteGenre}  onChange={(e) => handleInputChange_note_Genre(genre.IdGenre, e.target.value)}/>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                            <div className='col'>
                                                <div className='col sous-critere'>
                                                    <div className='row'>
                                                        <label htmlFor="">Coefficient</label>
                                                    </div>
                                                    <div className='row'>
                                                        <input type="number" name="coeffGenre" value={input_coeff.coeffGenre} onChange={handleinputChange_coeff}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className='row input-submit offset-md-9'>
                                    <input type="submit" value="Annoncer"></input>
                                </div>
                                
                            </form>
                        </div>
                        
                    </div>
                    <div className="col-3 ajout_service">
                        <div className="row ajout">
                            <span>Ajout Service</span>
                        </div>
                        <div className="add">
                            <form action="" method="get">
                                <div>
                                    <div className="row">
                                        <label>Name service</label>
                                    </div>
                                    <div className="row">
                                        <input type="text" name="service"/>
                                    </div>
                                </div>
                                <div className="row submit">
                                    <div className="col-2 me-auto">
                                        <input type="submit"  value="Ajouter"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;