
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import axios from "axios";
import NotFound from './NotFound';

const TeacherDetails = () => {

//! 1.Yol

const {id}= useParams();

// path ile yollana id useParams hook u ile yakalandi.

console.log(id);

const [person, setPerson] = useState({});
const [error,setError]= useState(false);

  
useEffect(() => {
  axios
    .get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => setPerson(res.data)).catch((err)=>setError(true));
}, [id]);
// console.log(person);


  if(error){
    return <NotFound/>
  }



  return (
    <div className='container text-center mt-4'>
    <img  src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${person.name}`} alt="" />
      <h3>{person.name}</h3>
      <h2>{person.email}</h2>
      <h5>{person.website}</h5>
      <h5>{person.phone}</h5>
    </div>
  )
}

export default TeacherDetails