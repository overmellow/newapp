import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { IPerson } from '../IPerson';
import { Outlet, Link } from "react-router-dom";
// import Person from './Note';

export default function HumansList(props) {

    return (
        <>
            <ul>
            {props.persons.map((p)=> (
                <li key={p.id}>
                    {p.id}: <Link to={`/humans/${p.id}`}>{p.name}</Link> - <Link to={`/humans/${p.id}/detail`} state={{ data: p }}>{p.email}</Link>
                </li>
            ))}
            </ul>
            
        </>        
    )
}