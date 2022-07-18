import AddVehicle from "./AddVehicle"
import {useState,useEffect} from 'react'

import { Url } from './../../constants/global';


/*
Author: Krishna Sanjaybhai Jadav(krishna.jadav@dal.ca)
*/

const VehicleInventory = () => {

  const [vehicles,setvehicles]=useState([])
  
  useEffect(() => {
    const getInventories = async () => {
    const InventoryList = await getInventory()
    setvehicles(InventoryList)
  }
  getInventories()
  }, [])

const getInventory = async () => {
  const res = await fetch(Url + '/api/inventory/get',{"method": "GET"})
  const data = await res.json()  
  return data
}  

const addInventory = async (vehicleAdd) => {

  var ImageURL="";
  if(vehicleAdd.carImageFile!=="")
  {
    const imageRes = await fetch('https://elw6xya3ch.execute-api.us-east-1.amazonaws.com/storewebimages',{"method": "POST",
    "body": JSON.stringify({
      "carImageFile":vehicleAdd.carImageFile
    })})
    const imageData = await imageRes.json(); 
    ImageURL=imageData.ImageURL;
  }

  const res = await fetch(Url + '/api/inventory/add',{"method": "POST",
  "headers": {
    "content-type": "application/json",
    "accept": "application/json"
  },
  "body": JSON.stringify({
    vehicleName: vehicleAdd.vehicleName,
    vehicleModelNumber: vehicleAdd.vehicleModelNumber,
    companyName: vehicleAdd.companyName,
    vehiclePrice: vehicleAdd.vehiclePrice,
    vehicleImageURL:ImageURL,
    vehicleSeatCount:vehicleAdd.vehicleSeatCount
  })})
  const data = await res.json()  
  return data;
} 

const deleteInventory = async (ID) => {
  const res = await fetch(Url + `/api/inventory/delete/${ID}`,{"method": "DELETE"})
  const data = await res.json()  
  return data
} 

const updateInventory = async (vehicleEdit) => {

  if(vehicleEdit.carImageFile!=="")
  {
    const imageRes = await fetch('https://elw6xya3ch.execute-api.us-east-1.amazonaws.com/storewebimages',{"method": "POST",
    "body": JSON.stringify({
      "carImageFile":vehicleEdit.carImageFile
    })})
    const imageData = await imageRes.json(); 
    vehicleEdit.vehicleImageURL=imageData.ImageURL;
  }
  const res = await fetch(Url + `/api/inventory/update/${vehicleEdit._id}`,{"method": "PUT",
  "headers": {
    "content-type": "application/json",
    "accept": "application/json"
  },
  "body": JSON.stringify({
    vehicleName: vehicleEdit.vehicleName,
    vehicleModelNumber: vehicleEdit.vehicleModelNumber,
    companyName: vehicleEdit.companyName,
    vehiclePrice: vehicleEdit.vehiclePrice,
    vehicleImageURL: vehicleEdit.vehicleImageURL,
    vehicleSeatCount:vehicleEdit.vehicleSeatCount
  })})
  const data = await res.json()  
  return data
} 

  const AddVehicleCallback = async (vehicleAdd) =>{
    await addInventory(vehicleAdd);
    const InventoryList=await getInventory()
    setvehicles(InventoryList)
}

const EditVehicleCallback = async (vehicleEdit) =>{ 
await updateInventory(vehicleEdit);
const InventoryList=await getInventory()
setvehicles(InventoryList)
}

const DeleteVehicleCallback = async (ID) =>{
  await deleteInventory(ID);
  const InventoryList=await getInventory()
  setvehicles(InventoryList)
}

  return (
      <div>
    <AddVehicle vehicles={vehicles} onAddVehicle={AddVehicleCallback} onEditVehicle={EditVehicleCallback} onDeleteVehicle={DeleteVehicleCallback} />
      </div>
  )
}

export default VehicleInventory