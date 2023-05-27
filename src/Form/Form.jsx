import './Form.css'
import React, { useRef } from 'react';
const Form= (props)=>{
    const userefLocation=useRef();
   const submitHandler=(e)=>{
    console.log(userefLocation.current.value)
    event.preventDefault(); 
     const obj={
        username:e.target.username.value,
        age:e.target.age.value,
        location:userefLocation.current.value
     }
    e.target.reset();
   props.check(obj);
   
   }

    return(
        <>
    <form  onSubmit={submitHandler}>
        <div>
            <label htmlFor="username">username</label><br></br>
            <input type="text" name="username" ></input>
        </div>
        <div>
            <label htmlFor="age">Age</label><br></br>
            <input type="number" name="age" ></input>
        </div>
        <div>
            <label htmlFor="location" >loaction</label><br></br>
            <input type="text"  ref={userefLocation} ></input>
        </div>
        <button type="submit">Click</button>
    </form>
     </>
    );
}

export {Form};