import React, { useEffect, useState } from 'react';
import { useFormState } from 'react-hook-form';
import JobsCart from '../../component/JobsCart';

const BrowseAllJobs = () => {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/jobs/")
            .then(res => res.json())
            .then(data => setJobs(data.data))
    }, [])

    return (
        <div className='mt-16'>

            <div className='grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 mx-12 mb-5 gap-10'>
                {
                    jobs?.map((job) => <JobsCart
                        job={job}
                    />)
                }
            </div>

        </div>
    );
};

export default BrowseAllJobs;