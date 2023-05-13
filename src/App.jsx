import { useState } from 'react'
import React from 'react';
import AddUser from './Components/AddUser';
function App() { 
  const [user ,setuser]=useState([{username:"ashish" ,age:12}]);
   
  return (
    <>
      <AddUser user={user} setuser={setuser} ></AddUser>
    </>
  );
}

export default App
