import React from "react";

function Movie({id, year, title, summary, poster}){
    return  (
                <div className="contents_box">
                    <h3 className="movie_title">{title}</h3>
                    <p className="movie_year mt5">{year}</p>
                    <img className="movie_poster" src={poster} />
                    <p class="desc movie_desc mt10">{summary}</p>
                </div>);
}

export default Movie;