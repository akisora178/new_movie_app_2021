import axios from "axios";
import React from "react";
import './App.css';
import Movie from './Movie.js';

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  }
  getMovies = async()=>{
    const {data:
            {data:{movies}
            }
          } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    console.log(movies);
    this.setState({movies, isLoading: false});
  }
  componentDidMount(){
    
    this.getMovies();
    
  }
  render(){
    const {isLoading, movies} = this.state;
    return (
      <div className={isLoading ? "loading" : "contents"}>{isLoading ? 
            "Loading Now..." : 
            movies.map(movie =>
              {console.log(movies)
                  return <Movie id={movie.id} title={movie.title} year={movie.year} summary={ movie.summary} poster={movie.medium_cover_image} />; 
              }
            )
          }
        
      </div>
    );
  }
};

export default App;
