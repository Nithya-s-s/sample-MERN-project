import axios from 'axios'
import { useState } from 'react'

function FormComponent() {
    const[Name,setname]=useState();
    const[email,setemail]=useState();
    const[phone_number,setphonenumber]=useState();

    const senddata=async(e)=>{
        e.preventDefault();
        try{
          const response=await axios.post('http://localhost:3000/rout/user',
          {
            Name,
            email,
            phone_number

          }
        );
        console.log(response.data);
        }
        catch(error){
            console.error(error);

        }

    };

  return (
    <div>
      <form onSubmit={senddata}>
        <h1>welcome</h1>
        Name:<input type="text" name="Name" placeholder='Enter your name' onChange={(e)=>setname(e.target.value)}/><br/>
        EMAIL:<input type="text" name="email" placeholder='Enter your Email'  onChange={(e)=>setemail(e.target.value)}/><br/>
        Phone number:<input type="number" name="phone_number" placeholder='Enter your phone number'  onChange={(e)=>setphonenumber(e.target.value)}/><br/>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  )
}

export default FormComponent
