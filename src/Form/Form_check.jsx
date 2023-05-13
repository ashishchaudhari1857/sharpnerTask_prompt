import {Form} from '../Form/Form';
import { useState } from 'react'

import {Empty } from '../Components/DilogueBox/Empty'
const Form_check=(props)=>{
    
const check=(obj)=>{
   
    if(obj.username.trim().length  ===0)
    {
        console.log("kdfnkfdn")  
        setisvalid(false)
        return ;
    }
    setisvalid(true);
      props.add(obj);
    
}
const WarningHandler=(e)=>{
    console.log("hey buddy")
    setisvalid(true);
}

const [isvalid ,setisvalid]=useState(false)
return(
<>

<Form check={check}></Form>
{!isvalid &&  <Empty WarningHandler={WarningHandler}></Empty>}
</>

);

}

export {Form_check};
// src\Form\Form.jsx
