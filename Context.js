import React, {useEffect, useState} from "react";
const Context = React.createContext();   


function ContextProvider ({ children }) {
    
    const [jobs, setJobs] = useState([]);

                const getJobList = async() => {
                    const LIST_OF_JOBS_URL = "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=ruby&page=1"
                    const res = await fetch(LIST_OF_JOBS_URL);
                    const data = await res.json();
                    setJobs(data);
                }
                
    useEffect(() => {
        getJobList();
    }, [])
    
    return (
        
        <Context.Provider value={{ getJobList, jobs }}>
            {children}
        </Context.Provider>
    )
}


export {ContextProvider, Context}