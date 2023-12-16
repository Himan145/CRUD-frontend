import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const CreateUser=()=>{
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [age,setAge]=useState()
    const navigate=useNavigate()
    axios.defaults.withCredentials=true;
    const Submit=(e)=>{
        e.preventDefault();
        axios.post("https://crud-backend-api-beta.vercel.app/create",{name,email,age})
        .then(result=>{
            console.log(result);
            navigate("/");
        })
        .catch(err=>console.log(err))
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col-10'>
                    <form onSubmit={Submit}>
                        <h2>Add User</h2>
                        <div>
                            <label htmlFor=''>Name</label>
                            <input type='text' placeholder='Enter Name' className='form-control' onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor=''>Email</label>
                            <input type='text' placeholder='Enter Email' className='form-control' onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor=''>Age</label>
                            <input type='number' placeholder='Enter Age' className='form-control' onChange={(e)=>setAge(e.target.value)}/>
                        </div>
                        <div>
                            <button className='btn btn-success'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
