import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';

const Book = () => {
    const [loggedInUser, setLoggedInUser]=useContext(UserContext);
    const {bedType} = useParams();
    const handleIT=()=>{
     const name=   document.getElementById("name").value;
      const age =  document.getElementById("age").value;
      const info ={name,age}
      console.log(info);
        fetch("http://localhost:3002/allInfo",{
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
              body: JSON.stringify({name,age}),
              

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
            <input type="text" name="age" placeholder="age" id="age" />
            <br /> <br />
            <button onClick={handleIT}>Sumbit to mongodb</button>

        </div>
    );
};

export default Book;