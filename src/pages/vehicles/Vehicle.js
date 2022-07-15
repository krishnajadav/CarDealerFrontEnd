/*
Author: Harsh Hariramani (B00899363)

This page renders the Vehicle Requirements Form component to the user
*/

import * as React from 'react';
import RequirementsForm from './RequirementsForm';

function VehicleForm() {
    return (
        <div classname="main">
            <br></br>  <br></br>
            <div>
                <RequirementsForm />
            </div>
        </div>
    );
}

export default VehicleForm;