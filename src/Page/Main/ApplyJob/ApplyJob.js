import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import './ApplyJobs.css'
const ApplyJob = () => {
    const { register, handleSubmit } = useForm();
    const { jobId } = useParams()
    const [jobs, setJobs] = useState([])
   
    useEffect(() => {
        fetch(`http://localhost:5000/jobs/${jobId}`)
            .then(res => res.json())
            .then(data => setJobs(data.data))
    }, [])
    const submit = (data) => {
        const product = {
            candidateName: data.candidateName,
            email: data.email,
            contactNumber: data.contactNumber,
            address: data.address,
            applyFor: {
                name: jobs.jobTitle,
                id: jobs._id
            },
            uploadResume:data.uploadResume

        };

        console.log(product);

    };
    return (
        <div className='grid lg:grid-cols-2 mx-12 gap-6'>
            <div className='jobs-details-content'>
                <p className='job-title mt-4'>{jobs.jobTitle}</p>
                <p className='text-xl'>{jobs.company}</p>
                <p className='text-lg'>jobType: {jobs.jobType}</p>
                <p className='text-lg'>vacancy: {jobs.vacancy}</p>
                <p className='text-lg'>Hiring Manager:  {jobs?.hiringManager?.name}</p>
                <p className='text-lg'>job Posting Date:{jobs.jobPostingDate}</p>
                <p className='jobs-description'>Job Description:</p>
                <p className='jobs-description-text'>{jobs.jobDescription}</p>
                <p>Salary: {jobs.salary}</p>
                <p>Last Application Date: <span>{jobs.lastApplicationDate}</span></p>

            </div>
            <div className='mt-5'>
                <form
                    className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-slate-400  mx-auto '
                    onSubmit={handleSubmit(submit)}>
                    <div className="form-control w-full mx-auto">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Candidate Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Candidate Name"
                            className="input input-bordered bg-white w-full py-3 rounded-md"
                            {...register("candidateName")}
                        />
                    </div>
                    <div className="form-control w-full mx-auto">
                        <label className="label">
                            <span className="label-text text-xl font-medium">email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="email"
                            className="input input-bordered bg-white w-full py-3 rounded-md"
                            {...register("email",{
                                required: {
                                    value: true,
                                    message: "email is required"
                                }
                            })}
                        />
                    </div>
                    <div className="form-control w-full mx-auto">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Contact Number</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Contact Number"
                            className="input input-bordered bg-white w-full py-3 rounded-md"
                            {...register("contactNumber",{
                                required: {
                                    value: true,
                                    message: "contact Number is required"
                                }
                            })}
                        />
                    </div>
                    <div className="form-control w-full mx-auto">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Address</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Address"
                            className="input input-bordered bg-white w-full py-3 rounded-md"
                            {...register("address")}
                        />
                    </div>
                    <div className="form-control w-full mx-auto">
                        <label className="label">
                            <span className="label-text text-xl font-medium ">Highest Education</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Highest Education Name"
                            className="input input-bordered bg-white w-full py-3 rounded-md"
                            {...register("highestEducation")}
                        />
                    </div>
                    <div className="form-control w-full mx-auto">
                        <label className="label">
                            <span className="label-text text-xl font-medium ">Resume Link</span>
                        </label>
                        <input
                            type="text"
                            placeholder="upload Resume"
                            className="input input-bordered bg-white w-full py-3 rounded-md"
                            {...register("uploadResume")}
                        />
                    </div>
                    <div className='flex justify-between items-center w-full'>
                        <button
                            className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
                            type='submit'
                        >
                            Submit
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default ApplyJob;