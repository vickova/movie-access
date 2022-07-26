import React, {useState, useEffect} from 'react';
import { TrendingFetch, VideosFetch } from '../utils/fetchData';
import { Link } from 'react-router-dom';
import Youtube from '../images/youtube.svg'
import Pagination from '@mui/material/Pagination';


const Trending = ({setTrendingId, trendingId}) => {
  const [trendingData, setTrendingData] = useState([]);
  const [videoId, setVideoId] = useState({});
  const [trendingVideos, setTrendingVideos] = useState([]);
  const [videoButton, setVideoButton] = useState(false);

  const image_base_url= 'https://image.tmdb.org/t/p/w500';


  const [currentPage, setCurrentPage] = useState(1);
  const PerPage = 6;
  const indexOfLastExercise = currentPage * PerPage;

  const indexOfFirstExercise = indexOfLastExercise - PerPage
  const currentExercises = trendingData.slice(indexOfFirstExercise, indexOfLastExercise)

  useEffect(()=>{
      const fetchData = async ()=>{
        const MovieData = await TrendingFetch();
        setTrendingData(MovieData.results);
      }
      fetchData()
  }, [])

    useEffect(()=>{
      const fetchData = async ()=>{
        const MovieData = await VideosFetch(videoId);
        
        setTrendingVideos(MovieData.results[0].key);
      }
      fetchData()
}, [videoId, trendingVideos])

const Paginate = (e, value)=>{
  setCurrentPage(value)

  window.scrollTo({top: 1800, behavior: 'smooth'})
}
  return (
    <div className="movie-container">
      <div>
        <div className="movie-cover">
      {currentExercises.map((movies, i) =>
        <div className="movie-card" key={i}>
          <img src={`${image_base_url}${movies.poster_path}`} alt={movies.name}/>
          <div className="movie-text">
            <h3>{movies.original_title}</h3>
            <p>Released: {movies.release_date}</p>
            <div className="youtube">
            <Link to='/trending/details' id='movie-link'><button id="button" onClick={()=>setTrendingId({backdrop: movies.backdrop_path, original_title:movies.original_title, release_date: movies.release_date, overview:movies.overview})}>Read More...</button></Link>
            <button onClick={()=> {setVideoId(movies.id); setVideoButton(!videoButton)}}>Watch Trailer</button>
            <a href={`https://www.youtube.com/watch?v=${trendingVideos}`} style={{display: videoButton? 'block': 'none'}}><button><img style={{width: '20px', height:'20px'}} src={Youtube} alt='youtube-video'/></button></a>
            </div>
          </div>
      </div>
      )}
      <div>
      {trendingData.length > 9 && (
      <Pagination
              color="standard"
              shape="rounded"
              defualtpage={1}
              count={Math.ceil(trendingData.length / PerPage)}
              page={currentPage}
              onChange={Paginate}
              size="large"
            />
          )}
      </div>
      </div>
      </div>
    </div>
  )
}

export default Trending