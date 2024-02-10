import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import ForumIcon from '@mui/icons-material/Forum';
import CallIcon from '@mui/icons-material/Call';
import { useState } from 'react';

const SimpleBottomNavigation = ({ check }) => {
    const [value, setValue] = useState(0);

    return (
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            sx={{
                backgroundColor: check ? "#191919" : "#f5f5f5",
                width: "100%",
                position: "absolute",
                bottom: 0,
                '@media (min-width: 900px)': {
                    display: "none"
                },
            }}
        >
            <BottomNavigationAction
                sx={{
                    color: value === 0 ? "red" : "grey"
                }}
                label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction
                sx={{
                    color: value === 1 ? "red" : "grey"
                }}
                label="Courses" icon={<ContentPasteIcon />} />
            <BottomNavigationAction
                sx={{
                    color: value === 2 ? "red" : "grey"
                }}
                label="Chat" icon={<ForumIcon />} />
            <BottomNavigationAction
                sx={{
                    color: value === 3 ? "red" : "grey"
                }}
                label="Contact" icon={<CallIcon />} />
        </BottomNavigation>
    );
}

export default SimpleBottomNavigation;
