/**
 * Author : rajansingh
 * Created On : 12/12/20
 */
import React from 'react';
import {Link} from "react-router-dom";


function Home() {
    return (
        <div className='quiz-container'>
            <h1>404:The page you are looking for doesnot exists !!</h1>
            <Link to='/' className='button'>Go to home</Link>
        </div>
    );
}

export default Home;
