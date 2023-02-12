import React from 'react';
import './JobsCart.css'
import { Link } from 'react-router-dom';
const JobsCart = ({ job }) => {
    const { jobTitle, jobType, jobLocation, company,salary,vacancy,_id } = job

    return (
        <div className='jobs-cart lg:flex md:flex justify-between items-center'>
            <div>
                <p className='jobs-title'>{jobTitle}</p>
                <p className='jobs-company'>{company}</p>
                <div className='flex justify-start mt-3'>
                    <p className='jobs-time'>{jobType}</p>
                    <p className='ml-3'>{jobLocation}</p>
                </div>

            </div>
            <div>
                <Link to={`/applyjobs/${_id}`} className='apply-btn'>
                    Apply Now
                </Link>

            </div>
        </div>
    );
};

export default JobsCart;