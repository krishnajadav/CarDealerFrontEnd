import React from "react"
import UserForm from "./UserForm";
import {useForm} from "react-hook-form";

// This code has been referenced from : https://github.com/machadop1407/multi-step-form-react/tree/main/src

function Registration({formData, setFormData}) {
  
  const {register} = UserForm();
  return (
    <div className='register-container'>


      <input type="text"
       placeholder="First Name" value={formData.firstname} pattern="[a-zA-Z]+" oninvalid="setCustomValidity('Please enter  alphabets only. ')" class="form-control" name="first_name" 
      onChange= {(event) => setFormData({...formData, firstname: event.target.value }) }    />

      <input type="text" placeholder="Last Name" value={formData.lastname} pattern="[a-zA-Z]+" oninvalid="setCustomValidity('Please enter alphabets only. ')" class="form-control" name="last_name"
      onChange= {(event) => setFormData({...formData, lastname: event.target.value }) }    /> 

      <input type="email" placeholder="Email" value={formData.email}  
      onChange= {(event) => setFormData({...formData, email: event.target.value }) }    />

      <input type="text" placeholder="Password" pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$" />
      <input type="text" placeholder="Confirm Password" />


      {/* 
       Form validation sources : https://stackoverflow.com/questions/37548397/html5-validate-input-to-accept-alphabets-only
       https://www.w3schools.com/howto/howto_js_password_validation.asp 
       https://stackoverflow.com/questions/27976446/html-password-regular-expression-validation

        */}

      {/* <button type="button"> Submit </button> */}


    </div>

  )
}

export default Registration;
