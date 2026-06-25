import { useState } from "react";

function NameForm(){
    const [formData,setFormData]=useState({
        firstname:"",
        lastname:"",
    });
    const HandleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    
    return(
        <div>
           

          <input 
          type="text"
          name="firstname"
          value={formData.firstname}
          placeholder="firstname"
          onChange={HandleChange}></input>

          <input 
          type="text"
          name="lastname"
          value={formData.lastname}
          placeholder="lastname"
          onChange={HandleChange}></input>
           <p>hello {formData.firstname} {formData.lastname}</p>
        </div>
    )
} 
export default NameForm