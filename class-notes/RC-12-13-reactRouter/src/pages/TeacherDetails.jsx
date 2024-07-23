
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import axios from "axios";

const TeacherDetails = () => {

//! 1.Yol

const {id}= useParams();

// path ile yollana id useParams hook u ile yakalandi.

console.log(id);

const [person, setPerson] = useState({});

  
useEffect(() => {
  axios
    .get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => setPerson(res.data));
}, [id]);

  console.log(person);
  return (
    <div>
    <img style={{ width: '250px', height: '250px', borderRadius: '50%' }} src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${id}`} alt="" />
      <h3>{person.name}</h3>
      <h2>{person.email}</h2>
    </div>
  )
}

export default TeacherDetails