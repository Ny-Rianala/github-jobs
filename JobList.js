import React, { useContext } from "react";
import { Context} from "./Context";
import styled from "styled-components";
import { Link } from "react-router-dom";



const ListStyle = styled.ul`
    background: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
    border-radius: 4px;
    box-shadow: 5px 5px 14px -8px #000000;
    text-decoration: none;
    
    li {
        padding: 20px;
        margin: 0;
        color: black;
    }
    li a {
        list-style: none;
        text-decoration: none;
    }
    img {
        max-width: 80%;
        display: flex;
        float: left;
    }
    .logo {
        align-items: left;
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
                            <div className="logo">
                                <img src={job.company_logo}/> 
                            </div>
                            <div>
                                <div>{job.company}</div>
                                <div>{job.title}</div>
                                <div>{job.location}</div>
                                <div>{job.company}</div>
                            </div>
                        </ListStyle>
                </Link>
            )
        })}
    </div>
)
    }

export default JobList;