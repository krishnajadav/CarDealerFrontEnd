import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "./App.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import SearchIcon from "@mui/icons-material/Search";

const pages = ["Vehicles", "Accessories", "Repairs", "Services"];
const settings = ["Account", "Logout"];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function App() {
  const [textTab1, setTextTab1] = React.useState("");
  const [helperTextTab1, setHelperTextTab1] = React.useState();
  const [helperTextTab1Error, setHelperTextTab1Error] = React.useState(false);
  
  const [textTab2, setTextTab2] = React.useState("");
  const [helperTextTab2, setHelperTextTab2] = React.useState();
  const [helperTextTab2Error, setHelperTextTab2Error] = React.useState(false);

  const [textTab3, setTextTab3] = React.useState("");
  const [helperTextTab3, setHelperTextTab3] = React.useState();
  const [helperTextTab3Error, setHelperTextTab3Error] = React.useState(false);

  const [textTab4, setTextTab4] = React.useState("");
  const [helperTextTab4, setHelperTextTab4] = React.useState();
  const [helperTextTab4Error, setHelperTextTab4Error] = React.useState(false);

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Home
    </Link>,
    <Typography key="2" color="inherit">
      Accessories
    </Typography>,
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const checkTab1 = () => {
    if (textTab1 === "") {
      setHelperTextTab1Error(true);
      setHelperTextTab1("Search field must not be empty to search.");
    } else {
      setHelperTextTab1Error(false);
      setHelperTextTab1("");
    }
  }

  const checkTab2 = () => {
    if (textTab2 === "") {
      setHelperTextTab2Error(true);
      setHelperTextTab2("Search field must not be empty to search.");
    } else {
      setHelperTextTab2Error(false);
      setHelperTextTab2("");
    }
  }

  const checkTab3 = () => {
    if (textTab3 === "") {
      setHelperTextTab3Error(true);
      setHelperTextTab3("Search field must not be empty to search.");
    } else {
      setHelperTextTab3Error(false);
      setHelperTextTab3("");
    }
  }

  const checkTab4 = () => {
    if (textTab4 === "") {
      setHelperTextTab4Error(true);
      setHelperTextTab4("Search field must not be empty to search.");
    } else {
      setHelperTextTab4Error(false);
      setHelperTextTab4("");
    }
  }
  return (
    <div>
      <AppBar position="static" color="secondary">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <DirectionsCarIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <DirectionsCarIcon
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Divider />
      <div className="thumb-nav">
        <Stack spacing={2}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            textColor="secondary"
            indicatorColor="secondary"
            value={value}
            color="secondary"
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Oil" />
            <Tab label="Car Care" />
            <Tab label="Tools" />
            <Tab label="Tires" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Stack direction="row" m={1} justifyContent="space-between">
            <Button variant="contained" color="secondary">
              Add
            </Button>

            <Stack direction="row">
              <TextField
                color="secondary"
                label="Search field"
                type="search"
                variant="filled"
                value={textTab1}
                onChange={(event) => setTextTab1(event.target.value)}
                error={helperTextTab1Error}
                helperText={helperTextTab1}
              />
              <Button variant="contained" color="secondary" onClick={checkTab1}>
                <SearchIcon></SearchIcon>
              </Button>
            </Stack>
          </Stack>
          <Grid container columns={{ xs: 4, sm: 8, md: 16 }}>
            {Array.from(Array(6)).map((_, index) => (
              <Grid card xs={4} sm={4} md={4} key={index}>
                <Card sx={{ m: 1 }}>
                  <CardMedia
                    component="img"
                    alt="oil can"
                    height="140"
                    image="/oil.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Castrol GTX 10W30
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut vel quam eget orci laoreet ...
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="secondary">
                      Edit
                    </Button>
                    <Button size="small" color="error">
                      Remove
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Stack direction="row" m={1} justifyContent="space-between">
            <Button variant="contained" color="secondary">
              Add
            </Button>
            <Stack direction="row">
              <TextField
                color="secondary"
                label="Search field"
                type="search"
                variant="filled"
                value={textTab2}
                onChange={(event) => setTextTab2(event.target.value)}
                error={helperTextTab2Error}
                helperText={helperTextTab2}
              />
              <Button variant="contained" color="secondary" onClick={checkTab2}>
                <SearchIcon></SearchIcon>
              </Button>
            </Stack>
          </Stack>
          <Grid container columns={{ xs: 4, sm: 8, md: 16 }}>
            {Array.from(Array(6)).map((_, index) => (
              <Grid card xs={4} sm={4} md={4} key={index}>
                <Card sx={{ m: 1 }}>
                  <CardMedia
                    component="img"
                    alt="oil can"
                    height="140"
                    image="/oil.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Castrol GTX 10W30
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut vel quam eget orci laoreet ...
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="secondary">
                      Edit
                    </Button>
                    <Button size="small" color="error">
                      Remove
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Stack direction="row" m={1} justifyContent="space-between">
            <Button variant="contained" color="secondary">
              Add
            </Button>

            <Stack direction="row">
              <TextField
                color="secondary"
                label="Search field"
                type="search"
                variant="filled"
                value={textTab3}
                onChange={(event) => setTextTab3(event.target.value)}
                error={helperTextTab3Error}
                helperText={helperTextTab3}
              />
              <Button variant="contained" color="secondary" onClick={checkTab3}>
                <SearchIcon></SearchIcon>
              </Button>
            </Stack>
          </Stack>
          <Grid
            container
            // spacing={{ xs: 2, md: 2 }}
            columns={{ xs: 4, sm: 8, md: 16 }}
          >
            {Array.from(Array(6)).map((_, index) => (
              <Grid card xs={4} sm={4} md={4} key={index}>
                <Card sx={{ m: 1 }}>
                  <CardMedia
                    component="img"
                    alt="oil can"
                    height="140"
                    image="/oil.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Castrol GTX 10W30
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut vel quam eget orci laoreet ...
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="secondary">
                      Edit
                    </Button>
                    <Button size="small" color="error">
                      Remove
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Stack direction="row" m={1} justifyContent="space-between">
            <Button variant="contained" color="secondary">
              Add
            </Button>

            <Stack direction="row" >
              <TextField
                color="secondary"
                label="Search field"
                type="search"
                variant="filled"
                value={textTab4}
                onChange={(event) => setTextTab4(event.target.value)}
                error={helperTextTab4Error}
                helperText={helperTextTab4}
              />
              <Button variant="contained" color="secondary" onClick={checkTab4}>
                <SearchIcon></SearchIcon>
              </Button>
            </Stack>
          </Stack>
          <Grid container columns={{ xs: 4, sm: 8, md: 16 }}>
            {Array.from(Array(6)).map((_, index) => (
              <Grid card xs={4} sm={4} md={4} key={index}>
                <Card sx={{ m: 1 }}>
                  <CardMedia
                    component="img"
                    alt="oil can"
                    height="140"
                    image="/oil.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Castrol GTX 10W30
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut vel quam eget orci laoreet ...
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="secondary">
                      Edit
                    </Button>
                    <Button size="small" color="error">
                      Remove
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </TabPanel>
      </Box>
    </div>
  );
}

export default App;
