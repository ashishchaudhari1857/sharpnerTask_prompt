import React from "react";
import {Display} from "./Display";
import { Form_check } from "../Form/Form_check";
const AddUser = (props) => {
    const {setuser} =props;
    const add=(obj)=>{
        
        setuser((prevuser) => [...prevuser, obj]);
    }
  const userlist = props.user.map((data, i) => {
    return (
        <React.Fragment key={i}>
        <Display data={data}></Display>
      </React.Fragment>
    );
  });

  return(
    <>
    <Form_check add={add}></Form_check>
    {userlist}
    </>
  );
}

export default AddUser;

