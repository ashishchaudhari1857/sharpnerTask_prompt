import './Form.css'
const Form= (props)=>{
   const submitHandler=(e)=>{
    event.preventDefault(); 
     const obj={
        username:e.target.username.value,
        age:e.target.age.value
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
        <button type="submit">Click</button>
    </form>
     </>
    );
}

export {Form};