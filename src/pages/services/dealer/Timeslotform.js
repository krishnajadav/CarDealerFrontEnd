import {
  Dialog,
  DialogActions,
  DialogContent,
  Button,
  DialogTitle,
} from "@mui/material";
import { timeSlotFrom, timeSlotTill, location } from "./serviceData";
import { useForm } from "react-hook-form";
import { formatDate } from "./serviceData";

const TimeSlotDialog = ({
  isUpdate,
  open,
  handleClose,
  handleSubmit,
  onUpdate,
  service,
  id,
}) => {
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
        />
      </DialogContent>
    </Dialog>
  );
};

function Form({ service, onSubmit, isUpdate, id, onUpdate }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const updateHandler = (id, data) => {
  //   onUpdate({
  //     id,
  //     type: service,
  //     ...data,
  //   });
  // };

  console.log(formatDate(new Date()));
  return (
    <form onSubmit={handleSubmit((e) => onSubmit(e))}>
      <div
        className={"input-wrapper"}
        style={{ display: "flex", justifyContent: "flex-start", gap: "15px" }}
      >
        <label>From:</label>
        <select
          style={{ border: errors.timeSlotFrom ? "1px solid red" : "" }}
          {...register("timeSlotFrom", { required: true })}
        >
          {timeSlotFrom.map((option, index) => (
            <option
              disabled={index === 0}
              selected={index === 0}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>
      </div>
      <div
        className={"input-wrapper"}
        style={{ display: "flex", justifyContent: "flex-start", gap: "15px" }}
      >
        <label> Till:</label>
        <select
          style={{ border: errors.timeSlotTill ? "1px solid red" : "" }}
          {...register("timeSlotTill", { required: true })}
        >
          {timeSlotTill.map((option, index) => (
            <option
              disabled={index === 0}
              selected={index === 0}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>
      </div>
      <div
        className={"input-wrapper"}
        style={{ display: "flex", justifyContent: "flex-start", gap: "15px" }}
      >
        <label> Date:</label>

        <input
          style={{ border: errors.date ? "1px solid red" : "" }}
          {...register("date", { required: true })}
          type="date"
          min={formatDate(new Date())}
        />
      </div>

      <div
        className={"input-wrapper"}
        style={{ display: "flex", justifyContent: "flex-start", gap: "15px" }}
      >
        <label>Location:</label>
        <select
          style={{ border: errors.location ? "1px solid red" : "" }}
          {...register("location", { required: true })}
        >
          {location.map((option, index) => (
            <option
              disabled={index === 0}
              selected={index === 0}
              value={index === 0 ? "" : option}
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
            Submit
          </Button>
        </div>
      </DialogActions>
    </form>
  );
}

export default TimeSlotDialog;
