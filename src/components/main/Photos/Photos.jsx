import React from 'react'
import { messageAPI } from '../../../api/api';


function test() {
    messageAPI.test()
        
}

const Photos = () => {
    return ( 
        <div>
            <button onClick={test}>ttttttttt</button>
        </div>
     );
}
 
export default Photos;