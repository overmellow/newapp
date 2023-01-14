import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Outlet, Link, useLoaderData } from "react-router-dom";
import HumansList from './HumansList';


export default function Humans() {
    // const persons = useLoaderData();

    const [persons, setPersons] = useState([]);
    useEffect(() => {
        axios
        .get('http://localhost:8080/persons')
        .then(res => setPersons(res.data))
    },[]);

    function handleClick(i) {
        console.log( i)

    }

    function personLoader(i) {
        return persons.find((p) => p.id == i)
    }
    return (
        <>
            <h2>Humans</h2>
            <Link to="new">New Human</Link> 
            <HumansList persons={persons} onClick={(i) => handleClick(i)} />
            <Outlet />
        </>        
    )
}
