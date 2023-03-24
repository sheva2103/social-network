import React from 'react'
import { useLocation, useParams } from 'react-router-dom';

const Friends = () => {
    let location = useLocation()
    let params = useParams()
    console.log(location, params)
    return ( 
        <div>
            друзья
        </div>
    );
}

export default Friends