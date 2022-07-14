import {
  CardActionArea,
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
  Grid,
} from "@mui/material";
import React from "react";
import { services } from "./serviceData";
import TimeSlotDialog from "./Timeslotform";
const CardItem = (props) => {
  const { service, image, content, onClick } = props;
  return (
    <Card onClick={onClick} sx={{ pb: 3 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          src={image}
          alt="tyre service"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {service}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button size="small" variant={"contained"} color="primary">
          Allocate Time Slot
        </Button>
      </CardActions>
    </Card>
  );
};

export default function Timeslot() {
  const [open, setOpen] = React.useState(false);
  const [activeService, setActiveService] = React.useState(null);
  const openModal = (service) => {
    setActiveService(service);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setActiveService(null);
  };

  const onSubmit = (data) => {
    alert(`Slots for ${activeService} updated successfully!`);
    closeModal();
  };

  return (
    <div style={{ height: "100vh", paddingBottom: "10%" }}>
      <h1 className="header">Welcome! Dealer..</h1>
      <Grid
        container
        spacing={3}
        sx={{ paddingInline: "30px", marginBlock: "50px" }}
      >
        {services.map((item) => {
          return (
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <CardItem
                onClick={() => openModal(item.service)}
                image={item.image}
                service={item.service}
                content={item.content}
              />
            </Grid>
          );
        })}
      </Grid>

      <TimeSlotDialog
        isUpdate={false}
        handleSubmit={onSubmit}
        service={activeService}
        open={open}
        handleClose={closeModal}
      />
    </div>
  );
}
