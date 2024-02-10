import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';

const PositionedTooltips = ({ check }) => {

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };
    return (
        <>

            <Box
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                sx={{

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mt: 2,

                    '@media (max-width: 1200px)': {
                        display: "none"
                    },
                }}>
                <Typography
                    sx={{
                        position: 'relative',
                        display: 'inline-block',
                        // color: '#504f4f',
                        color: "#a6a6a6",
                        fontSize: 15,
                        fontWeight: 600,
                        mr: 5,
                        '&:hover': {
                            color: '#F6A62C',
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                bottom: '-10px',
                                width: '100%',
                                borderBottom: '2px solid #F6A62C', // Specify the border color and thickness
                            },
                        },
                    }}
                >
                    GET HIRED
                    <ArrowDropDownIcon sx={{ marginLeft: '5px', verticalAlign: 'middle', marginBottom: "3px" }} />
                </Typography>
                <Typography
                    sx={{
                        position: 'relative',
                        display: 'inline-block',
                        color: "#a6a6a6",
                        fontSize: 15,
                        fontWeight: 600,
                        mr: 5,
                        '&:hover': {
                            color: '#F6A62C',
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                bottom: '-10px',
                                width: '100%',
                                borderBottom: '2px solid #F6A62C', // Specify the border color and thickness
                            },
                        },
                    }}
                >
                    OPPORTUNITY
                    <ArrowDropDownIcon sx={{ marginLeft: '5px', verticalAlign: 'middle', marginBottom: "3px" }} />
                </Typography>
                <Typography
                    sx={{
                        position: 'relative',
                        display: 'inline-block',
                        color: "#a6a6a6",
                        fontSize: 15,
                        fontWeight: 600,
                        mr: 5,
                        '&:hover': {
                            color: '#F6A62C',

                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                bottom: '-10px',

                                width: '100%',
                                borderBottom: '2px solid #F6A62C', // Specify the border color and thickness
                            },
                        },
                    }}
                >
                    EVENTS
                    <ArrowDropDownIcon sx={{ marginLeft: '5px', verticalAlign: 'middle', marginBottom: "3px" }} />
                </Typography>   <Typography
                    sx={{
                        position: 'relative',
                        display: 'inline-block',
                        color: "#a6a6a6",
                        fontSize: 15,
                        fontWeight: 600,
                        mr: 5,
                        '&:hover': {
                            color: '#F6A62C',
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                bottom: '-10px',
                                width: '100%',
                                borderBottom: '2px solid #F6A62C', // Specify the border color and thickness
                            },
                        },
                    }}
                >
                    COMPETITIONS
                    <ArrowDropDownIcon sx={{ marginLeft: '5px', verticalAlign: 'middle', marginBottom: "3px" }} />
                </Typography>
                <Typography
                    sx={{
                        position: 'relative',
                        display: 'inline-block',
                        color: "#a6a6a6",
                        fontSize: 15,
                        fontWeight: 600,
                        mr: 5,
                        '&:hover': {
                            color: '#F6A62C',
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                bottom: '-10px',
                                width: '100%',
                                borderBottom: '2px solid #F6A62C', // Specify the border color and thickness
                            },
                        },
                    }}
                >
                    CAREER RESOURCES
                    <ArrowDropDownIcon sx={{ marginLeft: '5px', verticalAlign: 'middle', marginBottom: "3px" }} />
                </Typography>
                <Typography
                    sx={{
                        position: 'relative',
                        display: 'inline-block',
                        color: "#a6a6a6",
                        fontSize: 15,
                        fontWeight: 600,
                        mr: 5,
                        '&:hover': {
                            color: '#F6A62C',

                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                bottom: '-10px',
                                width: '100%',
                                borderBottom: '2px solid #F6A62C', // Specify the border color and thickness
                            },
                        },
                    }}
                >
                    BLOG, NEWS & ADVICE
                    <ArrowDropDownIcon sx={{ marginLeft: '5px', verticalAlign: 'middle', marginBottom: "3px" }} />
                </Typography>

            </Box>
            {isHovering && (
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mt: 2,
                        mr: 10
                    }}
                >
                    <Box>
                        <Typography
                            sx={{

                                color: "#a6a6a6",
                                fontSize: 15,
                                fontWeight: 600,
                                mt: 1,
                                mr: 5,
                            }}
                        >
                            Subcategory 1
                        </Typography>
                        <Typography
                            sx={{

                                color: "#a6a6a6",
                                fontSize: 15,
                                fontWeight: 600,
                                mt: 1,
                                mr: 5,
                            }}
                        >
                            Subcategory 1
                        </Typography>
                        <Typography
                            sx={{

                                color: "#a6a6a6",
                                fontSize: 15,
                                fontWeight: 600,
                                mt: 1,
                                mr: 5,
                            }}
                        >
                            Subcategory 1
                        </Typography>


                    </Box>
                    <Box>
                        <Typography
                            sx={{

                                color: "#a6a6a6",
                                fontSize: 15,
                                fontWeight: 600,
                                mt: 1,
                                mr: 5,
                            }}
                        >
                            Subcategory 1
                        </Typography>
                        <Typography
                            sx={{

                                color: "#a6a6a6",
                                fontSize: 15,
                                fontWeight: 600,
                                mt: 1,
                                mr: 5,
                            }}
                        >
                            Subcategory 1
                        </Typography>
                        <Typography
                            sx={{

                                color: "#a6a6a6",
                                fontSize: 15,
                                fontWeight: 600,
                                mt: 1,
                                mr: 5,
                            }}
                        >
                            Subcategory 1
                        </Typography>


                    </Box>
                    <Box>
                        <Typography
                            sx={{

                                color: "#a6a6a6",
                                fontSize: 15,
                                fontWeight: 600,
                                mt: 1,
                                mr: 5,
                            }}
                        >
                            Subcategory 1
                        </Typography>
                        <Typography
                            sx={{

                                color: "#a6a6a6",
                                fontSize: 15,
                                fontWeight: 600,
                                mt: 1,
                                mr: 5,
                            }}
                        >
                            Subcategory 1
                        </Typography>
                        <Typography
                            sx={{

                                color: "#a6a6a6",
                                fontSize: 15,
                                fontWeight: 600,
                                mt: 1,
                                mr: 5,
                            }}
                        >
                            Subcategory 1
                        </Typography>


                    </Box>
                    <Box>
                        <Typography
                            sx={{

                                color: "#a6a6a6",
                                fontSize: 15,
                                fontWeight: 600,
                                mt: 1,
                                mr: 5,
                            }}
                        >
                            Subcategory 1
                        </Typography>
                        <Typography
                            sx={{

                                color: "#a6a6a6",
                                fontSize: 15,
                                fontWeight: 600,
                                mt: 1,
                                mr: 5,
                            }}
                        >
                            Subcategory 1
                        </Typography>
                        <Typography
                            sx={{

                                color: "#a6a6a6",
                                fontSize: 15,
                                fontWeight: 600,
                                mt: 1,
                                mr: 5,
                            }}
                        >
                            Subcategory 1
                        </Typography>


                    </Box> <Box>
                        <Typography
                            sx={{

                                color: "#a6a6a6",
                                fontSize: 15,
                                fontWeight: 600,
                                mt: 1,
                                mr: 5,
                            }}
                        >
                            Subcategory 1
                        </Typography>
                        <Typography
                            sx={{

                                color: "#a6a6a6",
                                fontSize: 15,
                                fontWeight: 600,
                                mt: 1,
                                mr: 5,
                            }}
                        >
                            Subcategory 1
                        </Typography>
                        <Typography
                            sx={{

                                color: "#a6a6a6",
                                fontSize: 15,
                                fontWeight: 600,
                                mt: 1,
                                mr: 5,
                            }}
                        >
                            Subcategory 1
                        </Typography>


                    </Box>
                    <Box>
                        <Typography
                            sx={{

                                color: "#a6a6a6",
                                fontSize: 15,
                                fontWeight: 600,
                                mt: 1,
                                mr: 5,
                            }}
                        >
                            Subcategory 1
                        </Typography>
                        <Typography
                            sx={{

                                color: "#a6a6a6",
                                fontSize: 15,
                                fontWeight: 600,
                                mt: 1,
                                mr: 5,
                            }}
                        >
                            Subcategory 1
                        </Typography>
                        <Typography
                            sx={{

                                color: "#a6a6a6",
                                fontSize: 15,
                                fontWeight: 600,
                                mt: 1,
                                mr: 5,
                            }}
                        >
                            Subcategory 1
                        </Typography>


                    </Box>
                </Box>


            )}
        </>
    );
}

export default PositionedTooltips;
