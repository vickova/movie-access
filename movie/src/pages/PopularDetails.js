import React from 'react';
import { Link } from 'react-router-dom';


const PopularDetails = ({detailsId, setDetailsId}) => {
  console.log(detailsId)
  const image_base_url= 'https://image.tmdb.org/t/p/w500';
  
  return (
    <div className="moviedetails-card">
 			<img src={`${image_base_url}${detailsId.backdrop}`} alt={`${detailsId.original_title}`}/>
 			<div className="moviedetails-text">
 			<h3>{detailsId.original_title}</h3>
 			<p>{detailsId.overview}</p>
 			<p>{detailsId.release_date}</p>
			 <div className="youtube">
 				<Link to='/'><button>Back</button></Link>
			 </div>
 			</div>
 		</div>
  )
}

export default PopularDetails