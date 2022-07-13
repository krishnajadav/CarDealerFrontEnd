import AddVehicle from "./AddVehicle"
import {useState,useEffect} from 'react'

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
  const res = await fetch('http://localhost:4200/api/inventory/get',{"method": "GET"})
  const data = await res.json()  
  return data
}  

const addInventory = async (vehicleAdd) => {
  const res = await fetch('http://localhost:4200/api/inventory/add',{"method": "POST",
  "headers": {
    "content-type": "application/json",
    "accept": "application/json"
  },
  "body": JSON.stringify({
    vehicleName: vehicleAdd.vehicleName,
    vehicleModelNumber: vehicleAdd.vehicleModelNumber,
    companyName: vehicleAdd.companyName,
    vehiclePrice: vehicleAdd.vehiclePrice,
  })})
  const data = await res.json()  
  return data
} 

const deleteInventory = async (ID) => {
  const res = await fetch(`http://localhost:4200/api/inventory/delete/${ID}`,{"method": "DELETE"})
  const data = await res.json()  
  return data
} 

const updateInventory = async (vehicleEdit) => {
  const res = await fetch(`http://localhost:4200/api/inventory/update/${vehicleEdit._id}`,{"method": "PUT",
  "headers": {
    "content-type": "application/json",
    "accept": "application/json"
  },
  "body": JSON.stringify({
    vehicleName: vehicleEdit.vehicleName,
    vehicleModelNumber: vehicleEdit.vehicleModelNumber,
    companyName: vehicleEdit.companyName,
    vehiclePrice: vehicleEdit.vehiclePrice,
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