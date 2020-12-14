import React from 'react';
import {Switch, Route} from "react-router-dom"; 
import styled from "styled-components";
import SearchBar from './SearchBar';
import JobInfo from './JobInfo';
import JobList from './JobList';



const AppStyle = styled.div`
    background: whitesmoke;
`

function App() {
    return (
        <AppStyle>
            <h1>Github Jobs</h1>
            <SearchBar />
            <Switch>
                <Route exact path="/">
                    <JobList />
                </Route>
                <Route path="/job/:jobId">
                    <JobInfo />
                </Route>
            </Switch>
        </ AppStyle>
    )
}

export default App
