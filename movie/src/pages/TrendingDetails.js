import React from 'react';
import { Link } from 'react-router-dom';


const TrendingDetails = ({trendingId, setTrendingId}) => {
  console.log(trendingId)
  const image_base_url= 'https://image.tmdb.org/t/p/w500';
  return (
    <div className="moviedetails-card">
 			<img src={`${image_base_url}${trendingId.backdrop}`} alt={`${trendingId.original_title}`}/>
 			<div className="moviedetails-text">
 			<h3>{trendingId.original_title}</h3>
 			<p>{trendingId.overview}</p>
 			<p>{trendingId.release_date}</p>
			 <div className="youtube">
 				<Link to="/trending"><button>Back</button></Link>
			 </div>
 			</div>
 		</div>
  )
}


export default TrendingDetails