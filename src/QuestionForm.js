import React, { useState } from 'react';
import { render } from "react-dom";
import {  useLocation} from 'react-router-dom';
function QuestionForm(propos){
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');
    console.log("hey =" + id)
    return(
        <div className='col-10'>saluttttttttt les question</div>
    );
}
export default QuestionForm;