import React , { useEffect, useState }  from 'react';
import axios from 'axios';
import './css/Annonce.css'
import annonce_img from './image/test.png' 
import { useInView } from 'react-intersection-observer';
import { BrowserRouter as Router, Route, Routes, Link , Switch} from 'react-router-dom';
import QuestionForm from './QuestionForm';
function Annonce_component(propos){
    console.log("token token = " + propos.token)
    const td = propos.token
    let index = 0 ;
    var title ;
    var annonce = "";
    var work  = "" ;
    var genre = "" ;
    var diplome = "" ;
    var experience = "" ;
    var situation = "" ;
    var nationalite = "" ;
    var age = "" ;
    var heure = "" ;
    var jourDetravaille = ""
    propos.arg.map((item) =>(
        index === 0 ? 
        title = item : null ,
        index === 1 ? 
        annonce = item : null ,
        index === 2 ? 
        work = item : null ,
        index === 3 ? 
        genre = item : null ,
        index === 4 ? 
        diplome = item : null ,
        index === 5 ? 
        experience = item : null ,
        index === 6 ? 
        situation = item : null ,
        index === 7 ? 
        nationalite = item : null ,
        index === 8 ? 
        age = item : null ,
        index === 9 ? 
        heure = item : null ,
        index === 10 ? 
        jourDetravaille = item : null ,
        index = index + 1 
    ))
    return(
        <div className="card mb-3 col" >
            <div className="row">
                <div className="col-md-1">
                <img src={annonce_img} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-11">
                <div className="card-body">
                    <h5 className="card-title">Annonnce-{title}</h5>
                    <p className="card-text">{annonce}</p>
                    <p className="card-text">{work}</p>
                    <p className="card-text">{genre}</p>
                    <p className="card-text">{diplome}</p>
                    <p className="card-text">{experience}</p>
                    <p className="card-text">{situation}</p>
                    <p className="card-text">{nationalite}</p>
                    <p className="card-text">{age}</p>
                    <p className="card-text">{heure}</p>
                    <p className="card-text">{jourDetravaille}</p>
                    <div className="container text-center">
                        {
                            td==="andy@gmail.com"? 
                            <div class="row liens justify-content-end">
                                    <div class="col-2">
                                        <Link to="/question">Test </Link>
                                        {/* <Routes>
                                            <Route path="/question" element={ < QuestionForm />} />
                                        </Routes> */}
                                    </div>
                                <div class="col-2">
                                    <a href="#">Liste CV</a>
                                </div>
                            </div> : 
                            <div class="row liens justify-content-end">
                                <div class="col-2">
                                    <a href="#">Depot CV</a>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                </div>
            </div>
        </div>
            
    )
}
export default Annonce_component;