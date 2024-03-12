import React from 'react';
import "./loader.css";
import {BounceLoader,PacmanLoader,ClockLoader} from "react-spinners";

function Loader(props) {
    return (
        <>
            <div className="loader">
                <ClockLoader color="#36d7b7" />
            </div>
        </>
    );
}

export default Loader;