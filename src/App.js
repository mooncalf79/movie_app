// https://yts-proxy.now.sh/list_movies.json

import React from "react";
import axios from "axios";
import Movie from "./movie";
import "./app.css";


class App extends React.Component{
  state = {
    isLoading : true,
    movies:[]
  };

/// async를 쓰려면, 선언한 함수안에서 await를 선언해야 한다. 
/// axios.get을 통해서 api를 가져온다 .

getMovies = async() => {
  const {data:{data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by = rating");
  this.setState({movies , isLoading : false});
};

  componentDidMount(){
  this.getMovies();
  }

  /// render 하는 내용이 web으로 나오고, 자동으로 html이 업데이트 되면서 실행된다 . 
  /// ? -> true // : -> false // => 함수선언
  render(){
    const {isLoading, movies} = this.state;
    return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className ="loader__text">Loading...</span>
        </div>
      ): (
        <div className = "movies">
            {movies.map(movie => (
            <Movie 
                key = {movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image} 
                genres = {movie.genres} />
      ))}
        </div>
      )}      
    </section>
  );
  }
}
            

export default App;
