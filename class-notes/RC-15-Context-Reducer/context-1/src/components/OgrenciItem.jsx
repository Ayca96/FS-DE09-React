import React, { useContext } from 'react'
import { StudentContext } from '../App';

const OgrenciItem = () => {

  //! 3- (Context Consumer denir.) globalde (mesela App.js de tanimladigim degerleri buraya cagirdik.)

  const {students, changeColor}=useContext(StudentContext);


  return (
    <div>
      {students.map((i)=>(
      <div style={{backgroundColor:i.color}} key={i.id}>
        <h3>
         NAME: {i.name}
        </h3>

        <h4>
        EMAIL: {i.email}
        </h4>

        <h4>
         AGE:{i.age}
        </h4>

        Color: <input
         type="text" 
         value={i.color}
         onChange={(e)=> changeColor (i.id, e.target.value)}
          />

      </div>

      ))}
    </div>
  )
}

export default OgrenciItem