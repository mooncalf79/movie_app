import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
import "./movie.css";

// movie.js에 Movie 함수를 만들고 타이틀을 return 한다.
// proptypes를 선언하여, Movie 함수안의 각 요소를 number/string 으로 타입을 정의한다.
/// 타입이 정의된 Movie함수를 App.js로 보낸다.
function Moive({year,title,summary,poster,genres}){
    return (
        <Link to = {{
            pathname : "/movie-detail",
            state: {
                year,
                title,
                summary, 
                poster,
                genres
            }
        }}>
    <div className = "movie">        
        <img src={poster} alt = {title} title ={title}/>
    <div className = "movie_data">
        <h3 className ="movie__title">{title}</h3>
        <h5 className ="movie__year">{year}</h5>
        <ul className="movie__gneres"> 
        {genres.map((genres,index) => (<li key ={index} className="genres__gnere">{genres}</li>))}
        </ul>
        <p className = "movie__summary">{summary.slice(0,180)}...</p>
        </div>
    </div>
    </Link>
    );
}

Moive.propTypes = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Moive; 