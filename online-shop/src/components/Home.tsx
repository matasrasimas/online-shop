import React from 'react'
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div className='main-container'>
           <header>From beginners to pros, we've got the gear to suit every player!</header>
           <Link to='/products' className='main-container-button'>GEAR UP!</Link>
        </div>
    );
}

export default Home;