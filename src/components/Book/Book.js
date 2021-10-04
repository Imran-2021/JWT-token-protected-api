import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Collections from './Collections';

const Book = () => {
    const [loggedInUser, setLoggedInUser]=useContext(UserContext);
    const {bedType} = useParams();
    const handleIT=()=>{
     const name=   document.getElementById("name").value;
      const age =  document.getElementById("age").value;
      const email =  document.getElementById("email").value;
      const info ={name,age}
      console.log(info);
        fetch("http://localhost:3002/allInfo",{
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
              body: JSON.stringify({name,age,email}),
              

        })
        .then(response => response.json())
        .then(json => {
            console.log(json)
        });


    }
    return (
        <div style={{textAlign: 'center'}}>
            <p>{loggedInUser.name}</p>
            <h1>Let's book a {bedType} Room.</h1>
            <p>Want a <Link to="/home">different room?</Link> </p>

            <input type="text" name="name" placeholder="name" id="name" />
            <br /><br />
            <input type="email" name="email" placeholder="name" value={loggedInUser.email} id="email" readOnly/>
            <br /><br />
            <input type="text" name="age" placeholder="age" id="age" />
            <br /> <br />
            <button onClick={handleIT}>Sumbit to mongodb</button>
{
    <Collections/>
}
        </div>
    );
};

export default Book;