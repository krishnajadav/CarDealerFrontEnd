/*
Author: Harsh Hariramani (B00899363)

This page fetches the customer requirements from MongoDB and displays them to the dealer.

The code snippet has been referenced from:
https://therichpost.com/reactjs-fetch-api-data-from-json-server/

*/

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react'
function CustomerList() {
    const [Users, fetchUsers] = useState([])
    useEffect(() => {
        fetch('https://group9-backend.herokuapp.com/api/getVehicle')
        .then((res) => res.json())
        .then((res) => {
            fetchUsers(res.list)
            console.log(res);
        })
    }, []);
   
    return (
       <div className="container p-5">
        <h1 className='mb-5'> Vehicle requirements of customers  </h1>
       
        <table className="table">
            <thead>
                <tr>
                <th scope="col">Brand</th>
                <th scope="col">Model</th>
                <th scope="col">Dealer</th>
                
                </tr>
            </thead>
            <tbody>
            
            {Users.map((item, i) => {
                                return <tr>
                                    
                                    <td>{item.brand}</td>
                                    <td>{item.model}</td>
                                    <td>{item.dealer}</td>
                                </tr>      
                                       })}
                <tr>
               
                </tr>
            </tbody>
            </table>
       </div>
    )
}
export default CustomerList;

/* 
Code references:
https://therichpost.com/reactjs-fetch-api-data-from-json-server/
*/
