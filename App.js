import React from 'react';
import SearchBar from './SearchBar';
import JobList from "./JobList";

function App() {
    return (
        <div>
            <h1>Github Jobs</h1>
            <SearchBar />
            <JobList />
        </div>
    )
}

export default App
