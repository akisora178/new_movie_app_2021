import React from "react";
import {Link} from "react-router-dom";
function Movie({id, year, title, summary, poster}){
    return  ( 
                <div className="contents_box" >
                    <Link to={{
                            pathname: `movie/${id}`,
                            state:{
                                title,
                                year,
                                poster,
                                summary
                                }
                            }}>
                        <h3 className="movie_title" title={title} >{title}</h3>
                        <p className="movie_year mt5">{year}</p>
                        <img className="movie_poster" src={poster} alt={title} />
                        <p className="desc movie_desc mt10">{summary}</p>
                    </Link>
                </div>
                );
}

export default Movie;