import React, {useState} from 'react';
import "./search.css";
import "bootstrap-icons/icons/search.svg";
import "bootstrap-icons/font/bootstrap-icons.min.css";


function Search(props) {
    const[search,setSearch] = useState("");
    // console.log(props.searchM);
    const handleSearch = (e) => {
        setSearch(e.target.value)
    };
    const handleKey = (e) => {
        if (e.key === "Enter"){
            props.searchM(search);
        }
    };

    const handleBtn = () => {
      props.searchM(search)
    };


    return (
        <>
            <div className="d-flex w-100">
                <div className="input-group mt-5">
                    <input
                        type="text"
                        className="form-control border-top-0 border-left-0 border-right-0 rounded-0"
                        placeholder="Search..."
                        name="search"
                        value={search}
                        onChange={handleSearch}
                        onKeyDown={handleKey}
                    />
                        <div className="input-group-append">
                            <button className="btn btn__search" type="search" onClick={handleBtn}>
                                <i className="bi-search"></i>
                            </button>
                        </div>
                </div>

            </div>
        </>
    );
}

export default Search;