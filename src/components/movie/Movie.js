import React from 'react';
import "./movie.css";

function Movie(props) {
    // console.log(props);
    const {Poster,Title,Year,imdbId,Type} = props;
    return (
        <>
            <div className="card" key={imdbId}>
                <div className="card-header p-0 p-1 text-success">
                    <p className="text-center d-block">
                        {Title}
                    </p>
                </div>

                <div className="card-body">
                    <img className="w-100" src={Poster} alt={"Image of: " + Title}/>
                </div>

                <div className="card-footer d-flex justify-content-between">
                    <p className="text-info">{Year}</p>
                    <p className="text-warning">{Type}</p>
                </div>
            </div>
        </>
    );
}

export default Movie;