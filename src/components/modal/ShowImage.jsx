import { Box, textAlign } from '@mui/system'
import React from 'react'

const ShowImage = ({linkImages}) => {
    return (
        <Box sx={{padding: '0px' ,textAlign: 'center', margin: '0 auto'}}>
            <img src={linkImages} alt='photo' style={{width: '100%',height: 'auto', objectFit: 'contain'}}/>
        </Box>
    )
}

export default ShowImage