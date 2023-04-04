import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { SHOW_IMAGE } from '../../modal/Modal';

const PhotoList = ({setModalOpen, photos}) => {
    
    

    return (
        <Box sx={{padding: '8px'}}>
            <Grid spacing={1} container justifyContent={'center'}>
                {photos.map((image, index) => (
                    <Grid key={index} item xs={true} md={'auto'} >
                        <img src={image.link} 
                                style={{width: '300px', height: '150px', objectFit: 'cover'}} 
                                alt={image.link} 
                                onClick={() => setModalOpen({type: SHOW_IMAGE, isOpen: true, linkImage: image.link})}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default PhotoList

