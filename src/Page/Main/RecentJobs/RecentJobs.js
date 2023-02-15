import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import JobsCart from '../component/JobsCart';
import './RecentJobs.css'
const RecentJobs = () => {
    const[jobs,setJobs]=useState([])
    
    useEffect(()=>{
        fetch("http://localhost:5000/jobs/")
        .then(res => res.json())
        .then(data => setJobs(data.data))
    },[])
    return (
        <div className='mt-16'>
            <div className='recent-job'>
                <h1 className='recent-job-title'>Recent Jobs</h1>
            </div>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 mx-12 mb-5 gap-10'>
                {
                    jobs?.map((job)=><JobsCart 
                    job={job}
                    />)
                }
            </div>
            <div className='text-center mb-5 mt-12'>
                <Link to='/browseAllJobs' className='all-jobs'>Browse All Jobs</Link>
            </div>
        </div>
    );
};

export default RecentJobs;