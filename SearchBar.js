import React, { useContext, useState} from 'react';
import { Context } from "./Context";
import styled from "styled-components";


const FormStyle = styled.form `
    margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: url(backgroundImg.png);
        background-position: 50%;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 8px;
        height: 138px;
        margin: 32px auto 0;
        padding: 0 18px;
`



export default function SearchBar() {
    const {searchJobs} = useContext(Context);
    const [query, setQuery] = useState("") 


    return (
        <div>
            <FormStyle className="form" onSubmit={searchJobs}>
              <input className="input" type="text" name="query"  placeholder="smth" value={query} onChange={(e) => setQuery(e.target.value)}/>
              <button className="button" type="submit">Search</button>
            </FormStyle>

        </div>
        )
        }