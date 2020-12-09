import React, { useContext } from 'react';
import {Context} from "./Context";
import { Link } from 'react-router-dom'
import JobList from "./JobList";


function Job() {
    const  { jobs } = useContext(Context);


    const getJobsInfo = () => {
        return (
            <Link to={`/job/${job.id}`} key={job.id}>
                <p>{job.title}</p>
            </Link>
        )
    }


    return (
        <div>
            {getJobsInfo}            
        </div>
    )
}

export default Job
