<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use ---> 

# Proposal

**[Optional]** If what is being submitted is an individual Lab or Assignment. Otherwise, include a brief one paragraph description about the project.

* *Date Created*: 16 June 2022
* *Last Modification Date*: 16 June 2022
* *Lab URL*: <http://example.com/>
* *Git URL*: <http://example.com/>

## Authors

**[Optional]** If what is being submitted is an individual Lab or Assignment, you may simply include your name and email address. Otherwise list the members of your group.

* [Adarsh Kannan Iyengar](adarsh.kannan@dal.ca) - *(Developer)*
* [Elizabeth James](elizabeth.james@dal.ca) - *(Developer)*
* [Harsh Hariramani](hr951414@dal.ca) - *(Developer)*
* [Krishna Sanjaybhai Jadav](krishna.jadav@dal.ca) - *(Developer)*
* [Tuan Hamid](tn220771@dal.ca) - *(Developer)*
* [Leah Isenor](leah.isenor@dal.ca) - *(Developer)*

## Built With

<!--- Provide a list of the frameworks used to build this application, your list should include the name of the framework used, the url where the framework is available for download and what the framework was used for, see the example below --->

* [React](https://reactjs.org/) - The web framework used
* [MUI](https://mui.com/material-ui/getting-started/overview/) - UI Component Library


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
_source 3_: https://stackoverflow.com/questions/63647493/react-material-table-is-not-displaying-table-icons <br/>
_author_: Jimi D<br/>

_FileName_: Carform.js, CarResults.js, TableIcons.js
These were implemented as part of CSCI 5709 Assignment 1 by Elizabeth James
<br/>



### CustomerNavBar.js /DealerNavBar.js

*Lines 55 - 209*

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
</Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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


- <!---How---> The code in [App bar React component - Material UI](https://mui.com/material-ui/react-app-bar/)  was implemented to be the navigation bar of my website
- <!---Why---> [App bar React component - Material UI](https://mui.com/material-ui/react-app-bar/) 's Code was used because it shows how the library works in creating the navigation bar
- <!---How---> [App bar React component - Material UI](https://mui.com/material-ui/react-app-bar/) 's Code was modified by making changes to the required navigation buttons and dropdown menu. Also a suitable logo replacement icon was taken from MUI Icon pack at https://mui.com/material-ui/material-icons/ 

*Repeat as needed*

### AccessoryHomeCustomer.js

*Lines 170 - 191*
*Lines 217 - 238*
*Lines 265 - 286*
*Lines 312 - 333*


```
Copy and paste your code on lines mentioned 
 <Card sx={{ m: 1 }}>
                                    <CardActionArea component={Link} to={`/accessories/view`}>
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
                                            <Typography variant="body2" color="text.primary">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Ut vel quam eget orci laoreet ...
                                            </Typography>
                                            <Typography sx={{ fontWeight: 'bold' }} mt={2}>
                                                $45
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
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


### AccessoryHomeEmployee.js

*Lines 178 - 202*
*Lines 231 - 255*
*Lines 289 - 313*
*Lines 343 - 367*


```
Copy and paste your code on lines mentioned 
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
                                        <Button size="small" color="secondary" component={Link} to="/manage/accessories/edit">
                                            Edit
                                        </Button>
                                        <Button size="small" color="error" onClick={handleClickOpen}>
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

*Lines 134 - 146*

```
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

*Lines 139 - 151*

```
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


*Line 50*

```
const dummyYearRange = {min:2010, max:2022};
```
*Line 138*

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

*Lines 16 - 95*

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

*Lines 12 - 77*

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

*Lines 80 - 91*

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

## Image credits

### src/pages/services/assets/testdrivecar.png, src/pages/services/dealer/assets/testdrivecar.png

"2022 Toyota Agya 1.2 G GR Sport B101RA (20220317) 01" by オーバードライブ83 is licensed under CC BY-SA 4.0. To view a copy of this license, visit https://creativecommons.org/licenses/by-sa/4.0/?ref=openverse.

### src/pages/services/assets/repairscar.png, src/pages/services/dealer/assets/repairscar.png

"2022 Hyundai Atos 1.1 Plus" by RL GNZLZ is licensed under CC BY-SA 2.0. To view a copy of this license, visit https://creativecommons.org/licenses/by-sa/2.0/?ref=openverse.


### src/mocks/carLoanStub.js, src/mocks.carStub.js
Toyota: https://www.drivespark.com/images/2021-01/toyota-fortuner-exterior-1.jpg <br/>
Mercedes: https://cdn.motor1.com/images/mgl/7xQZW/s1/2021-mercedes-amg-gt-stealth-edition.jpg <br/>
Innova: https://gaadiwaadi.com/wp-content/uploads/2022/04/Toyota-Innova-next-gen-rendered-img1-1068x601.jpg <br/>
Suzuki: https://s1.cdn.autoevolution.com/images/models/SUZUKI_Swift-5-Doors-2020_main.jpg  <br/>

### src/vehicles/CustomerForm.js
LockoutlinedIcon logo: https://mui.com/material-ui/getting-started/templates/sign-in/ & https://mui.com/material-ui/material-icons/


## Acknowledgments
https://pixabay.com/photos/bottle-container-engine-oil-liquid-3108641/ for the creative commons image used
https://www.lipsum.com/ for lorem ipsum generator
