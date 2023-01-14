import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Outlet, Link, useLoaderData } from "react-router-dom";


export default function Persons() {
    const [persons, setPersons] = useState([]);
    useEffect(() => {
        axios
        .get('http://localhost:8080/persons')
        .then(res => setPersons(res.data))
    },[]);

    return (
        <>
            <h2>Persons</h2>
            <ul>
            {
                persons.map(p => {
                    return <li key={p.id}>{p.name}</li>
                })
            }
            </ul>       
            <Outlet />
        </>        
    )
}
