import React, { useEffect, useState } from 'react'
import axios from 'axios'
function ViewComponent() {
    const[data,setData]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            try{
            const {data:response}=await axios.get('http://localhost:3000/rout/use')
            setData(response);
            }
            catch(error){
                console.error(error.message);


            }
        }
        fetchData();
    },[]);
  return (
    <div>
      <h1>DATA  ENTERED</h1>
      <table border='1px'>
        <thead>
            <tr>
                <th>
                    Name
                </th>
               <th>Email</th> 
               <th>Phone number</th>
            </tr>
        </thead>
        <tbody>
            {data.map((r,i)=>(
                <tr key={i}>
                    <td>{r.Name}</td>
                    <td>{r.email}</td>
                    <td>{r.phone_number}</td>
                </tr>

            ))}
        </tbody>
      </table>
    </div>
  )
}

export default ViewComponent
