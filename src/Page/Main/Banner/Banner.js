import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner'>
            <div className='lg:ml-12 lg:relative top-36'>
                <p className='banner-title'>Search Between More <br /> Then <span className='text-[#24d671]'>50,000</span> Open Jobs.</p>
                <p className='banner-Keywords'>Trending Jobs Keywords: <span className='text-[#26ae61]'> Web Designer Web Developer IOS Developer Android Developer</span></p>
            </div>
        </div>
    );
};

export default Banner;