import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from "./Context";

function JobInfo() {
    const { jobs } = useContext(Context);
    const { jobId } = useParams();


    const job = jobs.find(job => job.id == jobId);
    console.log(job);

    return (
        <div>
            <img src={job?.company_logo}/> 
            <div>{job?.company}</div>
            <p>{job?.description}</p>
        </div>
    )
}

export default JobInfo;
