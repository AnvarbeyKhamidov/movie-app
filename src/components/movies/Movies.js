import React from 'react';
import "./movies.css";
import Movie from "../movie/Movie";

function Movies(props) {
    // console.log(props);
    const {movies = []} = props;
    return (
        <>
            <div className="movies">
                {movies.length ? props.movies.map(item => (
                        <Movie key={item.imdbID} {...item}/>
                    )) : <h1 className="mt-5 text-center">Nothing has found...!</h1>}

            </div>
        </>
    );
}

export default Movies;