import { useState } from "react";
import {data} from "./Birthday"
function App()
{
  const [people,setPeople]=useState(data)
  const remove=(id)=>
  {
    let newPerson=people.filter((person) =>person.id!==id)
    setPeople(newPerson)
  } 
  return(
    <>
    <h3 style = {{backgroundColor:"yellow",color:"purple",textAlign:"center",fontSize:"40px"}}>
        YOU HAVE {people.lenght} BIRTHDAY's TODAY</h3>
        {people.map((person)=> {const {id,name,age,city,image}=person
        return(
          <div className="container">
          <img src={image} alt={name} />
          <ul>
          <li>{name}</li>
          <li>{age}</li>
          <li>{city}</li>
          </ul>
          
            <button onClick={() => remove(id)}>DISMISS</button>
          
          </div>
    
        )

      })}
    </>

  )
}
export default App
