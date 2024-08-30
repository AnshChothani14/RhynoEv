import * as React from 'react';
import './FloatingButton.css'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

export default function FloatingActionButtonExtendedSize() {
    return (
        <Box sx={{ '& > :not(style)': { m: 0 } }} className="fab-button">
            <Fab variant="extended" size="large" color="primary" sx={{
                backgroundColor: '#202020', 
                color: '#FFF225',
                borderRadius: '25px 0 0 25px',
                fontSize: 'medium',
                padding: '0 16px',
                boxShadow: '0 3px 5px rgba(0, 0, 0, 0.2)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontWeight: 'bold',
                border: '2px solid #FFF225',
                borderRight: '0px',
                '&:hover': {
                        backgroundColor: '#F9ED32', 
                        color: '#202020'           
                    }
            }}>
                Pre Book Now
            </Fab>
        </Box>
    );
}
