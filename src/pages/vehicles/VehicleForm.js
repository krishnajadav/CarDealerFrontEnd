import React, { useState } from 'react';
import Registration from "./Registration"

import Profile from './Profile';

function UserForm() {
        
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
    });


    const FormTitles = ["Registration Form", "Profile page"];

    const DisplayForm = () => {

        if (page === 0) {
            return <Registration formData={formData} setFormData={setFormData} />;
        }

        else {
            return <Profile />;
        }
    };

    return (
        <div className="form">
            <div className="statusbar">
                <div style={{ width: page === 0 ? "50%" : "100%" }}>
                </div>

            </div>

            <div className="form-container">

                <div className="top">
                    <h1> {FormTitles[page]} </h1>
                </div>

                <div className="body">
                    {DisplayForm()}
                </div>

                <div className="bottom">
                    <button
                        disabled={page === 0}
                        onClick={() => {
                            setPage((currentPage) => currentPage - 1);
                        }}
                    >
                        Previous
                    </button>

                    <button
                        type='submit'
                        disabled={page === FormTitles.length - 1}
                        onClick={() => {
                            setPage((currentPage) => currentPage + 1);
                            
                        }}
                    >
                        Submit
                    </button>
                </div>

            </div>
        </div>
    )
}

export default UserForm