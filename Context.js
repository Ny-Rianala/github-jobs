import React, {useEffect, useState} from "react";
const Context = React.createContext();   


function ContextProvider ({ children }) {
    const [jobs, setJobs] = useState([]);
    const [jobList, setJobList] = useState([]);
    
                const searchJobs = async (e) => {
                    e.preventDefault();
                    console.log("Submitting");


                    const url ="https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=1&search=code";
                        const res = await fetch(url);
                        const data = await res.json();
                        setJobs(data);
                        console.log(data);
                }

                const getJobList = async() => {
                    const LIST_OF_JOBS_URL = "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=ruby&page=1"
                    const res = await fetch(LIST_OF_JOBS_URL);
                    const data = await res.json();
                    setJobList(data);
                }
                
    useEffect(() => {
        searchJobs();
        getJobList();
    }, [])
    
    return (
        
        <Context.Provider value={{ jobs, searchJobs, getJobList, jobList }}>
            {children}
        </Context.Provider>
    )
}


export {ContextProvider, Context}