import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import LightModeIcon from '@mui/icons-material/LightMode';
import Divider from '@mui/material/Divider';
import PositionedTooltips from './Hover';
import { useState } from 'react';
import { Drawer, Container } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    color: "white",
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,

}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    fontSize: 17,
    borderRadius: "10px",
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(0)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up(900)]: {
            width: '30ch',
        },
        [theme.breakpoints.up(1200)]: {
            width: '45ch',
        },
        [theme.breakpoints.up(1300)]: {
            width: '55ch',
        },
        [theme.breakpoints.up(1375)]: {
            width: '65ch',
        },

    },
}));

const Appbar = ({ check, change }) => {
    // console.log(check);
    const [sidebar, setsidebar] = useState(false)
    const [dropdown1, setDropdown1] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
    const [dropdown3, setDropdown3] = useState(false);
    const [dropdown4, setDropdown4] = useState(false);


    const handleDropdown1 = () => {
        setDropdown1(!dropdown1);
        setDropdown2(false);
        setDropdown3(false);
    };

    const handleDropdown2 = () => {
        setDropdown1(false);
        setDropdown2(!dropdown2);
        setDropdown3(false);
    };

    const handleDropdown3 = () => {
        setDropdown1(false);
        setDropdown2(false);
        setDropdown3(!dropdown3);
    };
    const handleDropdown4 = () => {
        setDropdown1(false);
        setDropdown2(false);
        setDropdown3(false);
        setDropdown4(!dropdown4);

    };

    const handleSidebar = () => {
        setsidebar(!sidebar)
    }


    const drawer = (
        <Box sx={{ backgroundColor: "#504f4f", height: "100vh", width: 350 }}>
            <Container sx={{
                mt: 2,
                display: "flex",
                justifyContent: "space-between"
            }}>
                <Typography sx={{
                    fontSize: 25,
                    color: "white"
                }}>Lawctopus Ajay</Typography>
                <IconButton
                    onClick={handleSidebar}
                    sx={{
                        fontSize: 25,
                        color: "white"

                    }}
                >
                    <CloseIcon></CloseIcon>
                </IconButton>
            </Container>

            <Divider
                sx={{
                    backgroundColor: "whitesmoke",
                }}
            >
            </Divider>
            <Box>
                <Container>
                    <Typography
                        onClick={handleDropdown1}
                        sx={{
                            fontSize: 17,
                            mt: 1,
                            fontWeight: 550,
                            color: 'white',
                            '&:hover': {
                                color: '#F6A62C',
                            },
                        }}
                    >
                        Get Hired
                        <ArrowDropDownIcon
                            sx={{ marginLeft: '5px', verticalAlign: 'middle', marginBottom: '3px' }}
                        />
                    </Typography>

                    {dropdown1 && (
                        <Container>
                            <Typography
                                sx={{
                                    mt: "4px",
                                    fontSize: 14,
                                    fontWeight: 600,
                                    color: "white",
                                    p: "10px",
                                    '&:hover': {
                                        color: '#F6A62C',
                                        backgroundColor: "black",

                                    },
                                }}
                            >
                                Jobs
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: 14,
                                    fontWeight: 600,
                                    color: "white",
                                    // transition: 'color 0.3s, background-color 0.3s, padding 0.3s', 
                                    p: "10px",
                                    '&:hover': {
                                        color: '#F6A62C',
                                        backgroundColor: "black",

                                    },
                                }}
                            >
                                Interships and Small Projects
                            </Typography>
                        </Container>
                    )}
                </Container>
                <Container>
                    <Typography
                        onClick={handleDropdown2}
                        sx={{
                            fontSize: 17,
                            mt: 1,
                            fontWeight: 550,
                            color: 'white',
                            '&:hover': {
                                color: '#F6A62C',
                            },
                        }}
                    >
                        Category 2
                        <ArrowDropDownIcon
                            sx={{ marginLeft: '5px', verticalAlign: 'middle', marginBottom: '3px' }}
                        />
                    </Typography>

                    {dropdown2 && (
                        <Container>
                            <Typography
                                sx={{
                                    mt: "4px",
                                    fontSize: 14,
                                    fontWeight: 600,
                                    color: "white",
                                    p: "10px",
                                    '&:hover': {
                                        color: '#F6A62C',
                                        backgroundColor: "black",

                                    },
                                }}
                            >
                                Subcat 3
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: 14,
                                    fontWeight: 600,
                                    color: "white",
                                    // transition: 'color 0.3s, background-color 0.3s, padding 0.3s', 
                                    p: "10px",
                                    '&:hover': {
                                        color: '#F6A62C',
                                        backgroundColor: "black",

                                    },
                                }}
                            >
                                Subcat 4
                            </Typography>
                        </Container>
                    )}
                </Container>
                <Container>
                    <Typography
                        onClick={handleDropdown3}
                        sx={{
                            fontSize: 17,
                            mt: 1,
                            fontWeight: 550,
                            color: 'white',
                            '&:hover': {
                                color: '#F6A62C',
                            },
                        }}
                    >
                        Category 3
                        <ArrowDropDownIcon
                            sx={{ marginLeft: '5px', verticalAlign: 'middle', marginBottom: '3px' }}
                        />
                    </Typography>

                    {dropdown3 && (
                        <Container>
                            <Typography
                                sx={{
                                    mt: "4px",
                                    fontSize: 14,
                                    fontWeight: 600,
                                    color: "white",
                                    p: "10px",
                                    '&:hover': {
                                        color: '#F6A62C',
                                        backgroundColor: "black",

                                    },
                                }}
                            >
                                Subcat 5
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: 14,
                                    fontWeight: 600,
                                    color: "white",
                                    // transition: 'color 0.3s, background-color 0.3s, padding 0.3s', 
                                    p: "10px",
                                    '&:hover': {
                                        color: '#F6A62C',
                                        backgroundColor: "black",

                                    },
                                }}
                            >
                                Subcat 6

                            </Typography>
                        </Container>
                    )}
                </Container>
                <Container>
                    <Typography
                        onClick={handleDropdown4}
                        sx={{
                            fontSize: 17,
                            mt: 1,
                            fontWeight: 550,
                            color: 'white',
                            '&:hover': {
                                color: '#F6A62C',
                            },
                        }}
                    >
                        Category 4
                        <ArrowDropDownIcon
                            sx={{ marginLeft: '5px', verticalAlign: 'middle', marginBottom: '3px' }}
                        />
                    </Typography>

                    {dropdown4 && (
                        <Container>
                            <Typography
                                sx={{
                                    mt: "4px",
                                    fontSize: 14,
                                    fontWeight: 600,
                                    color: "white",
                                    p: "10px",
                                    '&:hover': {
                                        color: '#F6A62C',
                                        backgroundColor: "black",

                                    },
                                }}
                            >
                                Subcat 7
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: 14,
                                    fontWeight: 600,
                                    color: "white",
                                    // transition: 'color 0.3s, background-color 0.3s, padding 0.3s', 
                                    p: "10px",
                                    '&:hover': {
                                        color: '#F6A62C',
                                        backgroundColor: "black",

                                    },
                                }}
                            >
                                Subcat 8
                            </Typography>
                        </Container>
                    )}
                </Container>
            </Box>


        </Box>
    )
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static"
                sx={{
                    backgroundColor: "transparent",
                    // height: 190
                }}
            >
                <Toolbar
                    sx={{ mt: 1 }}
                >

                    <IconButton

                        size="large"
                        edge="start"
                        // color="inherit"
                        aria-label="open drawer"
                        onClick={handleSidebar}
                        sx={{
                            color: check ? "white" : "black",
                            mr: 2,
                            '@media (min-width: 1200px)': {
                                display: "none"
                            },
                        }}  >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant='h5' sx={{
                        // ml: 1,
                        mr: 8,
                        color: check ? "white" : "black",
                    }}>
                        Lawctoppus
                    </Typography>
                    <Search sx={
                        {
                            backgroundColor: check ? "#383838" : "#f4f4f4",
                            borderRadius: 2,
                            height: 40,
                            ml: 6,
                            '@media (max-width: 1200px)': {
                                display: "none"
                            },

                        }
                    }>
                        <SearchIconWrapper>
                            <SearchIcon sx={{
                                color: check ? "white" : "grey"
                            }} />
                        </SearchIconWrapper>
                        <StyledInputBase
                            // color:check?"#9b9b9b"
                            placeholder="Search On Lawctopus..."
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <CallIcon
                        sx={{
                            color: "#f6a62c",
                            ml: 3,
                            '@media (max-width: 1200px)': {
                                display: "none"
                            },

                        }}
                    ></CallIcon>
                    <Button
                        sx={{
                            color: "#f6a62c",
                            mr: 3,
                            '@media (max-width: 1200px)': {
                                display: "none"
                            },

                        }}
                    >CONTECT</Button>
                    <Button
                        sx={{
                            backgroundColor: "#f6a62c",
                            color: "black",
                            borderRadius: 2,
                            mr: 3,
                            '@media (max-width: 1200px)': {
                                display: "none"
                            },

                        }}
                    >SUBMIT POSTS</Button>
                    <Button
                        sx={{
                            backgroundColor: "white",
                            color: "black",
                            border: "1px solid black",
                            borderRadius: 2,
                            '@media (max-width: 1200px)': {
                                display: "none"
                            },


                        }}
                    >LLS COURSES</Button>

                    <Box sx={{ flexGrow: 2 }} />
                    <Box >
                        <IconButton onClick={change}
                            sx={{
                                // color: "red",
                                color: check ? "white" : "black",
                            }}
                        >
                            {/* <LightModeIcon ></LightModeIcon> */}
                            {check ? < LightModeIcon /> : < DarkModeIcon />}
                        </IconButton>

                    </Box>

                </Toolbar>
                <Divider
                    sx={{
                        mt: 2,
                        backgroundColor: "rgb(197, 194, 194)",

                    }}
                >
                </Divider>
                {/* <Typography>Ajay</Typography> */}
                <PositionedTooltips
                
                ></PositionedTooltips>
            </AppBar>
            <Box>
                <Drawer variant='temporary' open={sidebar}
                // onclose={handleSidebar}
                >
                    {drawer}
                </Drawer>
            </Box>

        </Box>
    );
}
export default Appbar;

// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';

// function Appbar({ check, change }) {
//     console.log('check:', check); // Check if the value of check is correct
//     // console.log('typeof change:', typeof change);
//     return (
//         <AppBar position="static">
//             <Toolbar>
//                 <Typography variant="h6" component="div">
//                     Yourbae
//                 </Typography>
//                 <div style={{ marginLeft: 'auto' }}>

//                     <IconButton color="inherit" onClick={change}>
//                         {check ? <Brightness4Icon /> : <Brightness7Icon />}
//                     </IconButton>

//                 </div>
//             </Toolbar>
//         </AppBar>
//     );
// }

// export default Appbar;
