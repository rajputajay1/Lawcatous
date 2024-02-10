
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Box } from '@mui/material';

function Appbars({ check, change }) {
    console.log('check:', check); // Check if the value of check is correct
    console.log('typeof change:', typeof change);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div">
                        Yourbae
                    </Typography>
                    <div style={{ marginLeft: 'auto' }}>

                        <IconButton color="inherit" onClick={change}>
                            {check ? <Brightness4Icon /> : <Brightness7Icon />}
                        </IconButton>

                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Appbars;
