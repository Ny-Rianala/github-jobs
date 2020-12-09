import React, { useContext } from "react";
import { Context} from "./Context";
import styled from "styled-components";
import { Link } from "react-router-dom";



const ListStyle = styled.ul`
    background: white;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    list-style: none;
    border-radius: 4px;
    box-shadow: 5px 5px 14px -8px #000000;
    li {
        padding: 20px;
        margin: 0;
        color: black;
    }
    li a {
        list-style: none;
        text-decoration: none;
    }
`



function JobList() {

const { jobs } = useContext(Context);
console.log(jobs);

return (
    <div>
        {jobs.map((job) => {
            return (
                <Link to={`/job/${job.id}`} key={job.id}>
                        <ListStyle key={job.id}>
                            <div>
                                <div>{job.company}</div>
                                <div>{job.title}</div>
                                <div>{job.location}</div>
                            </div>
                            <div>
                                <div>{job.company}</div>
                                {/* <img src={job.url.poster_post}/> */}
                            </div>
                        </ListStyle>
                </Link>
            )
        })}
    </div>
)
    }

export default JobList;