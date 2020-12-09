import React, { useContext } from 'react';
// import { useParams } from 'react-router-dom';
// import { Context } from "./Context";

function JobInfo() {
    const {jobs} = useContext(Context);
    const {jobId} = useParams();


    const job = jobs.find(job => job === jobId);

    return (
        <div>
            <p>Heey</p>
            {job?.title}
        </div>
    )
}

export default JobInfo;
