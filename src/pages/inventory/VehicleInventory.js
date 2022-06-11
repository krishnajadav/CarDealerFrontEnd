import AddVehicle from "./AddVehicle"
import {useState} from 'react'

const VehicleInventory = () => {

  const [vehicles,setvehicles]=useState([])

  const AddVehicleCallback = (vehicleAdd) =>{
    var c=vehicles;
    c.push(vehicleAdd);
    setvehicles(c);   
}

const EditVehicleCallback = (vehicleEdit) =>{ 
var i = vehicles.length;
while ( i --> 0 ) {
    if ( vehicles[i].id === vehicleEdit.id ) {
      vehicles[i].vehicleName=vehicleEdit.vehicleName;
      vehicles[i].vehicleModelNumber=vehicleEdit.vehicleModelNumber;
      vehicles[i].companyName=vehicleEdit.companyName;
      vehicles[i].vehiclePrice=vehicleEdit.vehiclePrice;
        break;
    }
}
setvehicles(vehicles);
}

const DeleteVehicleCallback = (ID) =>{
  setvehicles(vehicles.filter((vehicle) => vehicle.id !== ID))
}

  return (
      <div>
    <AddVehicle vehicles={vehicles} onAddVehicle={AddVehicleCallback} onEditVehicle={EditVehicleCallback} onDeleteVehicle={DeleteVehicleCallback} />
      </div>
  )
}

export default VehicleInventory