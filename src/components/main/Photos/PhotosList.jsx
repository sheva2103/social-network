import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { SHOW_IMAGE } from '../../modal/Modal';
//import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
//import FavoriteIcon from '@mui/icons-material/Favorite';

const PhotoList = ({setModalOpen, photos, currentUser}) => {
    
    

    return (
        <Box sx={{padding: '8px'}}>
            <Grid spacing={1} container justifyContent={'center'}>
                {photos.map((image, index) => (
                    <Grid key={index} item xs={'auto'} md={'auto'} >
                        <img src={image.link} 
                                style={{width: '200px', height: '150px', objectFit: 'cover'}} 
                                alt={image.link} 
                                onClick={() => setModalOpen({type: SHOW_IMAGE, isOpen: true, linkImage: image.link})}
                        />
                        {/* <div style={{display: 'flex', alignItems: 'center'}}>
                            {image.likes.some(user => user === currentUser) ?
                                    <FavoriteIcon sx={{color:'#fff', fontSize: '16px', paddingRight: '2px'}}/>
                                    :
                                    <FavoriteBorderIcon sx={{color:'#fff', fontSize: '16px', paddingRight: '2px'}}/>
                                }
                            
                            <span style={{fontSize: '17px'}}>{image.likes.length}</span>
                        </div> */}
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default PhotoList

