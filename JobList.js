import React, { useContext } from "react";
import { Context} from "./Context";
  

function Jobs() {

const { jobList } = useContext(Context);

console.log(jobList);

return (
    <div>
        {jobList.map((job) => {
            return (
            <ul>
                <li>{job.company}</li>
                <li>{job.title}</li>
                <li>{job.location}</li>
                <li>{job.company}</li>
                <li>{job.created_at}</li>
            </ul>
            )
        })}
    </div>
)
    }

export default Jobs;