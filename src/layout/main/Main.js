import React, {useEffect, useState} from 'react';
import "./main.css";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import Search from "../../components/search/Search";
import Movies from "../../components/movies/Movies";
import Loader from "../../components/loader/Loader";

function Main(props) {
    const[movies,setMovies] = useState([]);
    const[loader,setLoader] = useState(true);
    const [string,setString] = useState("");
    useEffect(()=> {
        axios.get("https://www.omdbapi.com/?i=tt3896198&apikey=4762f797&s=spider")
            .then((res) => {
                setMovies(res.data.Search);
                console.log(res.data.Search);

                setLoader(false);
            })
    },[]);

    // Search uchun funksiya
    const searchMovie = (str) => {
        setLoader(true);
        setString(str);
        axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=4762f797&s=${str}`)
            .then((res) => {
                console.log(res);
                setMovies(res.data.Search);
                setLoader(false);
            })
    };

    // Filter Uchun funksiya
    const filterMovie = () => {
        let value = document.getElementById("movieType").value;
        console.log(value);

        setLoader(true);
        if (string.length){
            axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=4762f797&s=${string}&type=${value}`)
                .then((res) => {
                    setMovies(res.data.Search);
                    setLoader(false);
                })
        } else {
            axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=4762f797&s=spider&type=${value}`)
                .then((res) => {
                    setMovies(res.data.Search)
                    setLoader(false);
                })
        }

    };

    return (
        <>

            <div className="d-flex align-items-center m-auto w-50">
                <select
                    name="type"
                    id="movieType"
                    className="mt-5 form-control w-25 rounded-0"
                    onChange={filterMovie}
                >
                    <option>Choose type</option>
                    <option value="movie">Movie</option>
                    <option value="series">Series</option>
                    <option value="episode">Episode</option>
                </select>
                <Search searchM = {searchMovie}/>

            </div>
            <div className="container">
                {loader ? <Loader/> :<Movies movies = {movies}/>}
            </div>
        </>
    );
}

export default Main;