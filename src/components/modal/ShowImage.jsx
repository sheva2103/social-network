import { Box } from '@mui/system'
import React, { useEffect, useRef, useState } from 'react'

const ShowImage = ({linkImages}) => {

    let [height, setHeight] = useState('auto')
    const refImage = useRef(null)
    useEffect(() => {
        
        if(refImage.current.width < refImage.current.height) {
            //console.log(refImage.current.width, refImage.current.height)
            setHeight(window.innerHeight - 100)
        }
    },[refImage])
    return (
        <Box sx={{padding: '0px' ,textAlign: 'center', margin: '0 auto'}}>
            <img ref={refImage} src={linkImages} alt='photo' style={{width: '100%',height: height, objectFit: 'contain'}}/>
        </Box>
    )
}

export default ShowImage