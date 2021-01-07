import React from 'react';
import './NotFound.css';

export const NotFound = () =>
{
    return (
        <React.Fragment>
            <a className="text-3d" href="#">404</a>
            <h1 className="returnhome">Page is Missing, Click Code to Return Home</h1>
        </React.Fragment>
    );
};