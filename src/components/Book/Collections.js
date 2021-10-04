import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Collections = () => {
    const [data,setData]=useState([])
    const [loggedInUser, setLoggedInUser]=useContext(UserContext);
    useEffect(() => {
        fetch("http://localhost:3002/user?email="+ loggedInUser.email,{
            method:'GET',
            headers: {'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        
        },



            

        })
        .then(res=>res.json())
        .then(data => {
            setData(data)
            // console.log(data);
        })
    },[])
  
    return (
        <div>
            <p>Total  {data.length} data here</p>
            {
                data.map((data,indc )=><div key={indc}>
                   <div style={{padding:"20px",margin:"10px",backgroundColor:"yellow"}}>
                   <p>name : {data.name}</p>
                    <p>age :{data.age}</p>
                    <p>go corona go . </p>
                   </div>
                </div>)
            }
        </div>
    );
};

export default Collections;