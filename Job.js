import React from 'react';
import { Link } from 'react-router-dom'


function Job() {
    // const  { jobs } = useContext(Context);

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
