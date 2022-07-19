<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use --->

# Credentials

- Credentials for employees<br/>
  _username_ : sl.rahmanhamid@gmail.com<br/>
  _password_ : 12345678

- Credentials for customers<br/>
  _username_ : tn220771@dal.ca<br/>
  _password_ : 12345678

# Assignment 3

**[Optional]** If what is being submitted is an individual Lab or Assignment. Otherwise, include a brief one paragraph description about the project.

- _Date Created_: 16 June 2022
- _Last Modification Date_: 15 JUL 2022
- _Live frontend_ : <https://project-group9-frontend.herokuapp.com/>
- _Backend API_:<https://group9-backend.herokuapp.com/>
- _Git URL_: <https://git.cs.dal.ca/lisenor/5709_group9/-/tree/main>
- _Backend Git URL_: <https://git.cs.dal.ca/jadav/5709_cardealerbackend_group9>

## Authors

**[Optional]** If what is being submitted is an individual Lab or Assignment, you may simply include your name and email address. Otherwise list the members of your group.

- [Adarsh Kannan Iyengar](adarsh.kannan@dal.ca) - _(Developer)_
- [Elizabeth James](elizabeth.james@dal.ca) - _(Developer)_
- [Harsh Hariramani](hr951414@dal.ca) - _(Developer)_
- [Krishna Sanjaybhai Jadav](krishna.jadav@dal.ca) - _(Developer)_
- [Tuan Hamid](tn220771@dal.ca) - _(Developer)_
- [Leah Isenor](leah.isenor@dal.ca) - _(Developer)_

## Built With

<!--- Provide a list of the frameworks used to build this application, your list should include the name of the framework used, the url where the framework is available for download and what the framework was used for, see the example below --->

- [React](https://reactjs.org/) - The web framework used
- [MUI](https://mui.com/material-ui/getting-started/overview/) - UI Component Library

## Sources Used

If in completing your lab / assignment / project you used any interpretation of someone else's code, then provide a list of where the code was implement, how it was implemented, why it was implemented, and how it was modified. See the sections below for more details.

_FileName_: carFrom.js<br/>
_line_: #70 and #79<br/>
_why_: I need to select date in my form<br/>
_how_: I referred to the user guide and its properties<br/>
_source_: https://www.npmjs.com/package/react-date-picker<br/>

_FileName_: carResults.js<br/>
_line_: #40 to #45<br/>
_why_: to display the list in pretty format,make use of pagination buttons and sort icons, make the list searchable, make the list sortable<br/>
_how_: reffered code samples and usages to understand the usage of material table.The car component's properties were used in the material table tag<br/>
_source 1_: https://blog.logrocket.com/material-table-react-tutorial-with-examples/<br/>
_author_: Mohammad Fasil<br/>
_source 2_: https://material-table.com/#/ (official documentation)<br/>
_source 3_: https://mui.com/material-ui/react-progress/ - circular progrss bar used at line #45 of CarMoreDeals.js
_source 3_: https://stackoverflow.com/questions/63647493/react-material-table-is-not-displaying-table-icons <br/>
_author_: Jimi D<br/>

_FileName_: CarMoreDeals.js<br/>
_line_ : #45<br/>
_why_: show progress bar until the results are loaded<br/>
_source_: https://mui.com/material-ui/react-progress/<br/>

_FileName_: rental.controller.js (backend proj)<br/>
_line_ : #75<br/>
_why_: convert Date to string in YYYY-MM-DD:<br/>
_source 4_: https://stackoverflow.com/questions/23593052/format-javascript-date-as-yyyy-mm-dd
_Author_: Darth Egregious

_FileName_: Carform.js, CarResults.js, TableIcons.js, CarLoan.js
These were implemented as part of CSCI 5709 Assignment 1 and 3 by Elizabeth James
These include Feature 1: Car Rentals and Feature 2: Car Loans
<br/>

https://mui.com/material-ui/react-progress/ - circular
used at line #45 of CarMoreDeals.js

### CustomerNavBar.js /DealerNavBar.js

_Lines 55 - 209_

```
Copy and paste your code on lines mentioned
const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
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
                  <MenuItem
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    component={navLink}
                    to={page.link}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
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
                  key={page.name}
                  component={navLink}
                  to={page.link}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar src="/static/images/avatar/2.jpg" />
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
                  <MenuItem
                    key={setting.name}
                    onClick={handleCloseUserMenu}
                    component={navLink}
                    to={setting.link}
                  >
                    <Typography textAlign="center">{setting.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      The code above was created by adapting the code in [App bar React component - Material UI](https://mui.com/material-ui/react-app-bar/) as shown below:
```

```

Copy and paste the snippet of code you are referencing
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
const [anchorElNav, setAnchorElNav] = React.useState(null);
const [anchorElUser, setAnchorElUser] = React.useState(null);

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

return (
<AppBar position="static">
<Container maxWidth="xl">
<Toolbar disableGutters>
<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
<Typography
variant="h6"
noWrap
component="a"
href="/"
sx={{
mr: 2,
display: { xs: 'none', md: 'flex' },
fontFamily: 'monospace',
fontWeight: 700,
letterSpacing: '.3rem',
color: 'inherit',
textDecoration: 'none',
}}
>
LOGO
</Typogra
<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
phy>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
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
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
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

```

- <!---How---> The code in [App bar React component - Material UI](https://mui.com/material-ui/react-app-bar/)  was implemented to be the navigation bar of my website
- <!---Why---> [App bar React component - Material UI](https://mui.com/material-ui/react-app-bar/) 's Code was used because it shows how the library works in creating the navigation bar
- <!---How---> [App bar React component - Material UI](https://mui.com/material-ui/react-app-bar/) 's Code was modified by making changes to the required navigation buttons and dropdown menu. Also a suitable logo replacement icon was taken from MUI Icon pack at https://mui.com/material-ui/material-icons/

### AccessoryHomeCustomer.js

_Lines 210 - 234_
_Lines 258 - 282_
_Lines 307 - 331_
_Lines 355 - 378_

```
Copy and paste your code on lines mentioned
<Grid card xs={4} sm={4} md={4} key={elem._id}>
                                <Card sx={{ m: 1 }}>
                                    <CardActionArea onClick={()=>{
                                        navigate("/accessories/" + elem._id)
                                    }}>
                                        <CardMedia
                                            component="img"
                                            alt="product image"
                                            height="140"
                                            image={elem.image}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {elem.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.primary">
                                                {elem.description}
                                            </Typography>
                                            <Typography sx={{ fontWeight: 'bold' }} mt={2}>
                                                ${elem.price}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>

The code above was created by adapting the code in [React Card component - Material UI](https://mui.com/material-ui/react-card/) as shown below:

```

```
<Card sx={{ maxWidth: 345 }}>
<CardActionArea>
<CardMedia
component="img"
height="140"
image="/static/images/cards/contemplative-reptile.jpg"
alt="green iguana"
/>
<CardContent>
<Typography gutterBottom variant="h5" component="div">
Lizard
</Typography>
<Typography variant="body2" color="text.secondary">
Lizards are a widespread group of squamate reptiles, with over 6,000
species, ranging across all continents except Antarctica
</Typography>
</CardContent>
</CardActionArea>
</Card>

```

- <!---How---> The code in [React Card component - Material UI](https://mui.com/material-ui/react-card/) was implemented by using it display a product information as a card
- <!---Why---> [React Card component - Material UI](https://mui.com/material-ui/react-card/)'s Code was used because it shows the standard implementation of a MUI card component
- <!---How---> [React Card component - Material UI](https://mui.com/material-ui/react-card/)'s Code was modified by product content, color palette and additional buttons for functionality

### AccessoryHomeEmployee.js

_Lines 253 - 281_
_Lines 310 - 338_
_Lines 368 - 396_
_Lines 426 - 454_

```
Copy and paste your code on lines mentioned
<Card sx={{ m: 1 }}>
                                    <CardMedia
                                        component="img"
                                        alt="product image"
                                        height="140"
                                        image={elem.image}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {elem.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {elem.description}

                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="secondary" onClick={()=>{
                                            navigate("/manage/accessories/edit/" + elem._id)
                                        }}>
                                            Edit
                                        </Button>
                                        <Button size="small" color="error" onClick={()=>{
                                            handleClickOpen(elem._id);
                                        }}>
                                            Remove
                                        </Button>
                                    </CardActions>
                                </Card>
The code above was created by adapting the code in [React Card component - Material UI](https://mui.com/material-ui/react-card/) as shown below:

```

```
<Card sx={{ maxWidth: 345 }}>
<CardActionArea>
<CardMedia
component="img"
height="140"
image="/static/images/cards/contemplative-reptile.jpg"
alt="green iguana"
/>
<CardContent>
<Typography gutterBottom variant="h5" component="div">
Lizard
</Typography>
<Typography variant="body2" color="text.secondary">
Lizards are a widespread group of squamate reptiles, with over 6,000
species, ranging across all continents except Antarctica
</Typography>
</CardContent>
</CardActionArea>
</Card>

```

- <!---How---> The code in [React Card component - Material UI](https://mui.com/material-ui/react-card/) was implemented by using it display a product information as a card
- <!---Why---> [React Card component - Material UI](https://mui.com/material-ui/react-card/)'s Code was used because it shows the standard implementation of a MUI card component
- <!---How---> [NAME](link)'s Code was modified by product content, color palette and additional buttons for functionality

### AccessoryHomeCustomer.js

_Lines 175 - 187_

```
<Tabs
                        textColor="secondary"
                        indicatorColor="secondary"
                        value={value}
                        color="secondary"
                        onChange={handleChange}
                        aria-label="category tabs"
                    >
                        <Tab label="Oil" />
                        <Tab label="Car Care" />
                        <Tab label="Tools" />
                        <Tab label="Tires" />
                    </Tabs>

```

The code above was created by adapting the code in [React Tabs component - Material UI ](https://mui.com/material-ui/react-tabs/) as shown below:

```
Copy and paste the snippet of code you are referencing
<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
    <Tab label="Item One" {...a11yProps(0)} />
    <Tab label="Item Two" {...a11yProps(1)} />
    <Tab label="Item Three" {...a11yProps(2)} />
  </Tabs>
</Box>
<TabPanel value={value} index={0}>
  Item One
</TabPanel>
<TabPanel value={value} index={1}>
  Item Two
</TabPanel>
<TabPanel value={value} index={2}>
  Item Three
</TabPanel>

```

- <!---How---> The code in [React Tabs component - Material UI ](https://mui.com/material-ui/react-tabs/) was implemented to show a tabbed view of avaiable products in categories
- <!---Why---> [React Tabs component - Material UI ](https://mui.com/material-ui/react-tabs/)'s Code was used because it shows the implementation for tabs
- <!---How---> [React Tabs component - Material UI ](https://mui.com/material-ui/react-tabs/)'s Code was modified by adjusting for color palette and product content rendering for categories

### AccessoryHomeEmployee.js

_Lines 214 - 226_

```
<Tabs
                        textColor="secondary"
                        indicatorColor="secondary"
                        value={value}
                        color="secondary"
                        onChange={handleChange}
                        aria-label="category tabs"
                    >
                        <Tab label="Oil" />
                        <Tab label="Car Care" />
                        <Tab label="Tools" />
                        <Tab label="Tires" />
                    </Tabs>

```

The code above was created by adapting the code in [React Tabs component - Material UI ](https://mui.com/material-ui/react-tabs/) as shown below:

```
Copy and paste the snippet of code you are referencing
<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
    <Tab label="Item One" {...a11yProps(0)} />
    <Tab label="Item Two" {...a11yProps(1)} />
    <Tab label="Item Three" {...a11yProps(2)} />
  </Tabs>
</Box>
<TabPanel value={value} index={0}>
  Item One
</TabPanel>
<TabPanel value={value} index={1}>
  Item Two
</TabPanel>
<TabPanel value={value} index={2}>
  Item Three
</TabPanel>

```

- <!---How---> The code in [React Tabs component - Material UI ](https://mui.com/material-ui/react-tabs/) was implemented to show a tabbed view of avaiable products in categories
- <!---Why---> [React Tabs component - Material UI ](https://mui.com/material-ui/react-tabs/)'s Code was used because it shows the implementation for tabs
- <!---How---> [React Tabs component - Material UI ](https://mui.com/material-ui/react-tabs/)'s Code was modified by adjusting for color palette and product content rendering for categories

### TradeIn.js

_Line 50_

```
const dummyYearRange = {min:2010, max:2022};
```

_Line 138_

```
 <TextField type="number" label="Year" inputProps = {dummyYearRange} onChange={e => updateYear(e.target.value)}/>

```

The code above was created by adapting the code in [React TextField component - Material UI ](https://mui.com/material-ui/api/text-field/) as shown below:

```
const inputProps = {
  step: 300,
};

return <TextField id="time" type="time" inputProps={inputProps} />;

```

- <!---How---> The code in [React TextField component - Material UI ](https://mui.com/material-ui/api/text-field/) was implemented to create a number input field with a min and max value.
- <!---Why---> [React TextField component - Material UI ](https://mui.com/material-ui/api/text-field/)'s Code was used because it shows how to include props to the underlying input.
- <!---How---> [React TextField component - Material UI ](https://mui.com/material-ui/api/text-field/)'s Code was modified by using different props.

### Vehicles/Navbar.js

The code used in this file was referenced from : https://mui.com/material-ui/react-app-bar/

_Lines 16 - 95_

```
export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dealership website
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

```

### CustomerForm.js

The code used in this file was referenced from : https://github.com/mui/material-ui/blob/v5.8.4/docs/data/material/getting-started/templates/sign-in/SignIn.js and modified according to the requirements.

_Lines 12 - 77_

```
const handleClick = () => {

        setOpen(true);
        //window.alert("The requirements have been submitted");
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        console.log({
            brand: data.get('brand'),
            model: data.get('model'),
        });

    };

    return (
        <form classname>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width:'100%'
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h4">
                    Vehicle Requirements Form
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1,display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '50%' }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="brand"
                        label="Vehicle Brand"
                        name="brand"
                        autoComplete="brand"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="model"
                        label="Preferred model"
                        type="model"
                        id="model"
                        autoComplete="car-model"
                    />
```

The radio button was adapted from: https://mui.com/material-ui/react-radio-button/ and changed as per the requiremnts.

_Lines 80 - 91_

```
<FormLabel id="demo-row-radio-buttons-group-label">Select the fuel variant</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            defaultValue="petrol"
                        >
                            <FormControlLabel value="petrol" control={<Radio />} label="Petrol" />
                            <FormControlLabel value="diesel" control={<Radio />} label="Diesel" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />

                        </RadioGroup>
```

### EmployeeList.js

_Lines 155 - 164_

```
		<DataGrid
                getRowId={(row) => row._id}
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />

```

The code above was created by adapting the code in [MUI](https://mui.com/x/react-data-grid/) as shown below:

```
<DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
```

- <!---How---> The code in [MUI](https://mui.com/x/react-data-grid/) was implemented by using it for employee list
- <!---Why---> [MUI](https://mui.com/x/react-data-grid/)'s Code was used because it shows how to create data grid
- <!---How---> [MUI](https://mui.com/x/react-data-grid/)'s Code was modified by adding custom id and fields

_Repeat as needed_

### EmployeeList.js

_Lines 27 - 42_

```
const renderAction = (params) => {
        if (params.row.isEnabled) {
            return(
                <strong>
                    <Button
                        onClick={() => {
                            handleClickOpen(params.row.username)
                        }}
                        color="error"
                    >
                        Deactivate
                    </Button>
                </strong>
            )
        }
    }

```

The code above was created by adapting the code in [StackOverflow](https://stackoverflow.com/a/67380953) as shown below:

```
 const renderDetailsButton = (params) => {
        return (
            <strong>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    style={{ marginLeft: 16 }}
                    onClick={() => {
                        parseName(params.row.col6)
                    }}
                >
                    More Info
                </Button>
            </strong>
        )
    }

```

- <!---How---> The code in [StackOverflow](https://stackoverflow.com/a/67380953) was implemented by using it for action buttons in data grid
- <!---Why---> [StackOverflow](https://stackoverflow.com/a/67380953)'s Code was used because it shows how to modify data grid
- <!---How---> [StackOverflow](https://stackoverflow.com/a/67380953)'s Code was modified by adding custom logic for button rendering on specific condition

### AddAccessory.js

_Lines 83 - 96_

```
const handleFileUpload = async (event) => {
        const newImg = await convertToBase64(event.target.files[0]);
        setConvertedImage(newImg);
    }

    const convertToBase64 = (file) => {
        return new Promise(resolve => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                resolve(reader.result);
            }
        })
    }

```

The code above was created by adapting the code in [Medium](https://raz-levy.medium.com/upload-images-to-aws-s3-using-react-js-and-node-js-express-server-bc15b959372c) as shown below:

```
Copy and paste the snippet of code you are referencing
    const onSelectFile = async (event) => {
        const file = event.target.files[0];
        const convertedFile = await convertToBase64(file);

        // Request will be sent from here in the future
    }
    const convertToBase64 = (file) => {
        return new Promise(resolve => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                resolve(reader.result);
            }
        })
    }


```

- <!---How---> The code in [Medium](https://raz-levy.medium.com/upload-images-to-aws-s3-using-react-js-and-node-js-express-server-bc15b959372c) was implemented to store images as base64 strings
- <!---Why---> [Medium](https://raz-levy.medium.com/upload-images-to-aws-s3-using-react-js-and-node-js-express-server-bc15b959372c)'s Code was used because it shows how to store images in the database
- <!---How---> [Medium](https://raz-levy.medium.com/upload-images-to-aws-s3-using-react-js-and-node-js-express-server-bc15b959372c)'s Code was modified by displaying previews of image before they are stored

### EditAccessory.js

_Lines 99 - 112_

```
const handleFileUpload = async (event) => {
        const img = await convertToBase64(event.target.files[0]);
        setConvertedImage(img);
    }

    const convertToBase64 = (file) => {
        return new Promise(resolve => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                resolve(reader.result);
            }
        })
    }

```

The code above was created by adapting the code in [Medium](https://raz-levy.medium.com/upload-images-to-aws-s3-using-react-js-and-node-js-express-server-bc15b959372c) as shown below:

```
Copy and paste the snippet of code you are referencing
    const onSelectFile = async (event) => {
        const file = event.target.files[0];
        const convertedFile = await convertToBase64(file);

        // Request will be sent from here in the future
    }
    const convertToBase64 = (file) => {
        return new Promise(resolve => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                resolve(reader.result);
            }
        })
    }


```

- <!---How---> The code in [Medium](https://raz-levy.medium.com/upload-images-to-aws-s3-using-react-js-and-node-js-express-server-bc15b959372c) was implemented to store images as base64 strings
- <!---Why---> [Medium](https://raz-levy.medium.com/upload-images-to-aws-s3-using-react-js-and-node-js-express-server-bc15b959372c)'s Code was used because it shows how to store images in the database
- <!---How---> [Medium](https://raz-levy.medium.com/upload-images-to-aws-s3-using-react-js-and-node-js-express-server-bc15b959372c)'s Code was modified by displaying previews of image before they are stored

### ServicesContainer.js

The code was adapted from [App bar React Component](https://mui.com/material-ui/react-app-bar/) of Material UI.

_Lines 24 - 128_

```
const CardItem = (props) => {
  const { service, image, content, onClick } = props;
  return (
    <Card onClick={onClick} sx={{ pb: 3 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
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
          Book Appointment Now
        </Button>
      </CardActions>
    </Card>
  );
};

// Services Container starts here

export default function ServicesContainer() {
  const [open, setOpen] = React.useState(false);
  const [activeService, setActiveService] = React.useState(null);
  const { addBooking } = useBookings();
  const openModal = (service) => {
    setActiveService(service);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setActiveService(null);
  };

  const onSubmit = async(data) => {
    if(activeService === "Test Drive"){
      if (!localStorage.getItem("id")) {
        alert("Please log in first");
      } else {
        let result = await bookTestDrive(data);
        alert(result);
      }
    } else {
      addBooking({
        ...data,
        type: activeService,
        // id: Math.floor(Math.random() * 500000),
      });
      alert(`Appointment for ${activeService} booked successfully!`);
    }
    closeModal();
  };

  return (
    <div style={{ height: "100vh", paddingBottom: "10%" }}>
      <h1 className="header">Services Provided:</h1>
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
      {activeService === "Test Drive"?
      <TestDriveServiceFormDialog
        isUpdate={false}
        handleSubmit={onSubmit}
        service={activeService}
        open={open}
        handleClose={closeModal}
      /> :
      <ServiceFormDialog
        isUpdate={false}
        handleSubmit={onSubmit}
        service={activeService}
        open={open}
        handleClose={closeModal}
      />
      }
    </div>
  );
}

```

### ServiceCard.js

The code was adapted from [React Card Component](https://mui.com/material-ui/react-card/#main-content) of Material UI.
_Lines 40 - 62_

```
<Card onClick={onClick} sx={{pb:3 }}>
  <CardActionArea>
    <CardMedia
      component="img"
      height="140"
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
  <CardActions sx={{display:'flex',justifyContent:'center'}}>
    <Button size="small" variant={'contained'} color="primary">
      Book Appointment Now
    </Button>
  </CardActions>
</Card>
```

### ServicesContainer.js

_Lines 30-50_

```
const CardItem = (props) => {
  const { service, image, content, onClick } = props;
  return (
    <Card onClick={onClick} sx={{ pb: 3 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
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
          Book Appointment Now
        </Button>
      </CardActions>
    </Card>
  );
};

// Services Container starts here

export default function ServicesContainer() {
  const [open, setOpen] = React.useState(false);
  const [activeService, setActiveService] = React.useState(null);
  const { addBooking } = useBookings();
  const openModal = (service) => {
    setActiveService(service);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setActiveService(null);
  };

  const onSubmit = async(data) => {
    if(activeService === "Test Drive"){
      if (!localStorage.getItem("id")) {
        alert("Please log in first");
      } else {
        let result = await bookTestDrive(data);
        alert(result);
      }
    } else {
      addBooking({
        ...data,
        type: activeService,
        // id: Math.floor(Math.random() * 500000),
      });
      alert(`Appointment for ${activeService} booked successfully!`);
    }
    closeModal();
  };

  return (
    <div style={{ height: "100vh", paddingBottom: "10%" }}>
      <h1 className="header">Services Provided:</h1>
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
      {activeService === "Test Drive"?
      <TestDriveServiceFormDialog
        isUpdate={false}
        handleSubmit={onSubmit}
        service={activeService}
        open={open}
        handleClose={closeModal}
      /> :
      <ServiceFormDialog
        isUpdate={false}
        handleSubmit={onSubmit}
        service={activeService}
        open={open}
        handleClose={closeModal}
      />
      }
    </div>
  );
}

```

### customerBookings.js

The code was adapted from [React Card Component](https://mui.com/material-ui/react-card/#main-content) of Material UI.

```
    <Card className="booking-card">
      <div className="car-model">{model}</div>
      <div className="type">{type}</div>
      <div className="date">{date}</div>
      <div className="time">{time}</div>
      <div className="location">{location}</div>
      <div className="actions">
        <EditIcon style={{ cursor: "pointer" }} onClick={onUpdate} />
        <DeleteIcon style={{ cursor: "pointer" }} onClick={onDelete} />
      </div>
    </Card>
```
The car icon was displayed using the Material UI icon - ElectricCarSharpIcon and was taken from this source:
https://mui.com/material-ui/material-icons/

The Material UI library was used to implement a responsive customer form with Material UI components. It was changed as per needed and its source can be found here:
https://mui.com/material-ui/getting-started/templates/sign-in/

The code inside the Navbar.js class was added and modified from [React App bar](https://mui.com/material-ui/react-app-bar/) of Material UI.

The Yup validator was used for validating the form components: https://formik.org/docs/guides/validation 

### RequirementsForm.js

*Lines 88 - 125* of the RequirementsForm.js file were referenced from this source: https://github.com/mui/material-ui/blob/v5.8.2/docs/data/material/getting-started/templates/sign-in/SignIn.js

```
      <Box
                    sx={{
                        marginTop: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '100%'
                    }}
                >
                    <Avatar sx={{ m: 2, bgcolor: 'secondary.main', width: 65, height: 65 }}>
                        <ElectricCarSharpIcon />
                    </Avatar>
                    <Typography component="h1" variant="h4">
                        Vehicle Requirements Form
                    </Typography>
                    <Box component="form" sx={{
                        mt: 1, display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '50%'
                    }}>
                        <br></br>
                        <TextField
                            placeholder="Enter the vehicle brand"
                            id="brand"
                            name="brand"
                            label="Vehicle Brand"
                            type="string"
                            fullWidth
                            margin="dense"
                            {...register('brand')}
                            error={errors.brand ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                            {errors.brand?.message}
                        </Typography>

```


## Image credits

### src/pages/services/assets/testdrivecar.png, src/pages/services/dealer/assets/testdrivecar.png

"2022 Toyota Agya 1.2 G GR Sport B101RA (20220317) 01" by オーバードライブ 83 is licensed under CC BY-SA 4.0. To view a copy of this license, visit https://creativecommons.org/licenses/by-sa/4.0/?ref=openverse.

### src/pages/services/assets/repairscar.png, src/pages/services/dealer/assets/repairscar.png

"2022 Hyundai Atos 1.1 Plus" by RL GNZLZ is licensed under CC BY-SA 2.0. To view a copy of this license, visit https://creativecommons.org/licenses/by-sa/2.0/?ref=openverse.

### src/mocks/carLoanStub.js, src/mocks.carStub.js

Toyota: https://www.drivespark.com/images/2021-01/toyota-fortuner-exterior-1.jpg <br/>
Mercedes: https://cdn.motor1.com/images/mgl/7xQZW/s1/2021-mercedes-amg-gt-stealth-edition.jpg <br/>
Innova: https://gaadiwaadi.com/wp-content/uploads/2022/04/Toyota-Innova-next-gen-rendered-img1-1068x601.jpg <br/>
Suzuki: https://s1.cdn.autoevolution.com/images/models/SUZUKI_Swift-5-Doors-2020_main.jpg <br/>

### src/vehicles/CustomerForm.js

LockoutlinedIcon logo: https://mui.com/material-ui/getting-started/templates/sign-in/ & https://mui.com/material-ui/material-icons/

### Accessories remote images
https://www.flickr.com/photos/jeepersmedia/14061604449
https://www.flickr.com/photos/jeepersmedia/14061639880/in/photostream/
https://www.flickr.com/photos/jeepersmedia/14061639170/in/photostream/
https://www.flickr.com/photos/jeepersmedia/14268423653/in/photostream/

https://pxhere.com/en/photo/1548209
https://www.shutterstock.com/image-photo/1463332910?utm_source=iptc&utm_medium=googleimages&utm_campaign=image

https://www.flickr.com/photos/chdot/2694946585
https://commons.wikimedia.org/wiki/File:OBD_Auto_Scanner_connecting_to_the_ECU.JPG

https://www.flickr.com/photos/concavowheels/8383098766
https://commons.wikimedia.org/wiki/File:Prestone_AMAM_5050_with_Superiority_Claim.jpg
## Acknowledgments

https://pixabay.com/photos/bottle-container-engine-oil-liquid-3108641/ for the creative commons image used
https://www.lipsum.com/ for lorem ipsum generator
