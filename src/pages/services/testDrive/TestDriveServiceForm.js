import {
    Dialog,
    DialogActions,
    DialogContent,
    Button,
    DialogTitle,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { formatDate } from "../helper";
import { useState, useEffect } from "react";
import { getCars, getTimes, getUnavailableTimes } from "./testDriveHelper"

/*
Authors: 
Leah Isenor
Adarsh Kannan Iyengar

This file is a modified version of ServiceForm.js, specialized for dynamically displaying
test drive booking options.

References:
Used react hook form library for form validations.
https://react-hook-form.com/
*/
const TestDriveServiceFormDialog = ({
    isUpdate,
    open,
    handleClose,
    handleSubmit,
    onUpdate,
    service,
    id
}) => {
    const [loadingOptions, setLoadingOptions] = useState(true);
    const [serviceOptions, setServiceOptions] = useState();
    const options = {};

    useEffect(() => { async function getOptions(){ 
            options.timeSlot = await getTimes();
            options.carModels = await getCars();
            options.unavailable = await getUnavailableTimes();
            setLoadingOptions(false);
            setServiceOptions(options)
        } 
        getOptions(); 
    }, []);

    if (!loadingOptions) {
        return (
            <Dialog
                sx={{
                ".MuiPaper-root": {
                    width: "50vw",
                },
                }}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{service}</DialogTitle>
                <DialogContent>
                <Form
                    onUpdate={onUpdate}
                    id={id}
                    isUpdate={isUpdate}
                    onSubmit={handleSubmit}
                    service={service}
                    serviceOptions={serviceOptions}
                />
                </DialogContent>
            </Dialog>
        );
    }
};

function Form({ service, onSubmit, isUpdate, id, onUpdate, serviceOptions }) {

    const [date, setDate] = useState("");
    const [car, setCar] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const updateHandler = (id, data) => {
        onUpdate({
            id,
            type: service,
            ...data,
        });
    };
    
    const timeBooked = (time) => {
        let dates = serviceOptions.unavailable[car];
        if (dates) {
            let times = dates[date];
            return times && times.includes(time);
        }
        return false;
    }
    
    return (
        <form
        onSubmit={handleSubmit((data) =>
            isUpdate ? updateHandler(id, data) : onSubmit(data)
        )}
        >
        <div
        className={"input-wrapper"}
        style={{ display: "flex", justifyContent: "flex-start", gap: "15px" }}
        >
            <label>Car model:</label>
            <select
            style={{ border: errors.carModel ? "1px solid red" : "" }}
            {...register("carModel", { required: true })}
            onChange = {(e) => setCar(e.target.value)}
            >
            {serviceOptions.carModels.map((option, index) => {
                return (
                    <option
                    disabled={index === 0}
                    selected={index === 0}
                    value={option}
                    >
                    {option}
                    </option>
                )
            })}
            </select>
        </div>

        <div
            className={"input-wrapper"}
            style={{ display: "flex", justifyContent: "flex-start", gap: "15px" }}
        >
            <label>Date:</label>

            <input
            style={{ border: errors.date ? "1px solid red" : "" }}
            {...register("date", { required: true })}
            type="date"
            min={formatDate(new Date())}
            onChange={(e)=>setDate(e.target.value)}
            />
        </div>

        <div
            className={"input-wrapper"}
            style={{ display: "flex", justifyContent: "flex-start", gap: "15px" }}
        >
            <label>Time:</label>
            <select
            style={{ border: errors.timeSlot ? "1px solid red" : "" }}
            {...register("timeSlot", { required: true })}
            >
            {serviceOptions.timeSlot.map((option, index) => (
                <option
                disabled={index === 0 || timeBooked(option)}
                selected={index === 0}
                value={option}
                >
                {option}
                </option>
            ))}
            </select>
        </div>

        <DialogActions>
            <div
            style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "baseline",
            }}
            >
            {Object.keys(errors).length > 0 && (
                <span style={{ color: "red" }}>All fields are required!!!</span>
            )}
            <Button style={{ marginLeft: "auto" }} autoFocus type="submit">
                {isUpdate ? "Update" : "Submit"}
            </Button>
            </div>
        </DialogActions>
        </form>
    );
}

export default TestDriveServiceFormDialog;
