import * as React from 'react';
import CustomerForm from './CustomerForm';
//import MenuAppBar from './Navbar';
import RequirementsForm from './RequirementsForm';

function VehicleForm() {
    return (
        <div classname="main">

            {/* <div>
                <CustomerForm />
            </div> */}
            <br></br>
        
            <div>
                <RequirementsForm />
            </div>
        </div>
    );
}

export default VehicleForm;