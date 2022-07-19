/*
Author: Harsh Hariramani (B00899363)

This page fetches the customer requirements from MongoDB and displays them to the dealer.

The code snippet has been referenced from:
https://therichpost.com/reactjs-fetch-api-data-from-json-server/

*/

//import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

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
        <TableContainer>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Brand</TableCell>
            <TableCell>Model</TableCell>
            <TableCell>Dealer</TableCell>
            <TableCell>Customer name</TableCell>
            <TableCell>Email address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
       {Users.map((item, i)=>(
        <TableRow
        key={i}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell>{item.brand}</TableCell>
        <TableCell>{item.model}</TableCell>
        <TableCell>{item.dealer}</TableCell>
        <TableCell>{item.customer}</TableCell>
        <TableCell>{item.email}</TableCell>
      </TableRow>
       ))}     
        </TableBody>
      </Table>
    </TableContainer>
       </div>
    )
}
export default CustomerList;

/* 
Code references:
https://therichpost.com/reactjs-fetch-api-data-from-json-server/
*/
