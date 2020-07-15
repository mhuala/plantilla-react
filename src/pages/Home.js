import React, { useState, useEffect, useRef} from 'react';
import {FbLoginButton} from '../components/FbLoginButton'

export const Home = (props) => {

return(
        <div className="container mx-auto my-auto px-4 py-4">
            <FbLoginButton/>
        </div>
    )
}