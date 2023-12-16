import axios from 'axios';
import React, { useEffect, useState } from 'react';
import{Link} from 'react-router-dom';

export const User=()=>{
    const [users,setusers]=useState([
        {
            Name:"Himan",
            Email:"himan@gmail.com",
            Age:20
        }
    ]);
    axios.defaults.withCredentials=true;
    useEffect(()=>{
        axios
          .get("https://crud-backend-api-beta.vercel.app")
          .then(res =>setusers(res.data) )
          .catch(err => console.error(err));
    },[])

    const handleDelete=(id)=>{
        axios.delete('https://crud-backend-api-beta.vercel.app/delete/'+id)
        .then(res=>{
            console.log(res);
            window.location.reload();
        })
        .catch(err=>console.log(err))
    }

    return(
        <div className='container'>
            <div className='row d-flex justify-content-between'>
                <div className='col-12'>
                    <table className='table'>
                        <thead>
                            <tr className='row justify-content-center'>
                                <th scope="col" className='col-3'>Name</th>
                                <th scope="col" className='col-4'>Email</th>
                                <th scope="col" className='col-2'>Age</th>
                                <th scope="col" className='col-3'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user)=>{
                                    return(<tr className='row justify-content-center'>
                                        <td className='col-3'>{user.name}</td>
                                        <td className='col-4'>{user.email}</td>
                                        <td className='col-2'>{user.age}</td>
                                        <td className='col-3'><Link to={`/update/${user._id}`} className='btn btn-success px-auto'>Update</Link><button className='btn btn-danger'onClick={(e)=>handleDelete(user._id)}>Delete</button></td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>
                    <Link to="/create" className='btn btn-success px-auto'>Add+</Link>
                </div>
            </div>
        </div>
    )
}
