import {
  Dialog,
  DialogActions,
  DialogContent,
  Button,
  DialogTitle,
} from "@mui/material";
import { carModels, timeSlot, location } from "./helper";
import { useForm } from "react-hook-form";
import { formatDate } from "./helper";

const ServiceFormDialog = ({
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

  const updateHandler = (id, data) => {
    onUpdate({
      id,
      type: service,
      ...data,
    });
  };

  console.log(formatDate(new Date()));
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
        >
          {carModels.map((option, index) => (
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
        <label>Date:</label>

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
        <label>Time:</label>
        <select
          style={{ border: errors.timeSlot ? "1px solid red" : "" }}
          {...register("timeSlot", { required: true })}
        >
          {timeSlot.map((option, index) => (
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
            {isUpdate ? "Update" : "Submit"}
          </Button>
        </div>
      </DialogActions>
    </form>
  );
}

export default ServiceFormDialog;
