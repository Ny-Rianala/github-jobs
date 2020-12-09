import React, { useContext, useState} from 'react';
import { Context } from "./Context";




export default function SearchBar() {
    const {searchJobs} = useContext(Context);
    const [query, setQuery] = useState("") 


    return (
        <div>
            <form className="form" onSubmit={searchJobs}>
              <input className="input" type="text" name="query"  placeholder="smth" value={query} onChange={(e) => setQuery(e.target.value)}/>
              <button className="button" type="submit">Search</button>
            </form>

        </div>
        )
        }