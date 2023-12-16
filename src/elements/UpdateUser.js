import React, { useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export const UpdateUser=()=>{
    const {id}=useParams()
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [age,setAge]=useState()
    const navigate=useNavigate()

    useEffect(()=>{
        axios.get('https://crud-backend-api-beta.vercel.app/get/'+id)
        .then(res=>{
            console.log(res);
            setName(res.data.name);
            setEmail(res.data.email);
            setAge(res.data.age);
        })
        .catch(err=>console.log(err))
    }, [])

    const Update=(e)=>{
        e.preventDefault();
        axios.put("https://crud-backend-api-beta.vercel.app/update/"+id,{name,email,age})
        .then(res=>{
            console.log(res);
            navigate("/");
        })
        .catch(err=>console.log(err))
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col-10'>
                    <form onSubmit={Update}>
                        <h2>Update User</h2>
                        <div>
                            <label htmlFor=''>Name</label>
                            <input type='text' placeholder='Enter Name' className='form-control' value={name} onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor=''>Email</label>
                            <input type='text' placeholder='Enter Email' className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor=''>Age</label>
                            <input type='number' placeholder='Enter Age' className='form-control' value={age} onChange={(e)=>setAge(e.target.value)}/>
                        </div>
                        <div>
                            <button className='btn btn-success'>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
