import React, {useState} from 'react';
import './App.css'
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
const TrendingDetails = React.lazy(()=> import('./pages/TrendingDetails'));
const PopularDetails = React.lazy(()=> import('./pages/PopularDetails'));
const Popular = React.lazy(()=> import('./pages/Popular'));
const Trending = React.lazy(()=> import('./pages/Trending'));


function App() {
  const [detailsId, setDetailsId] = useState();
  const [trendingId, setTrendingId] = useState();
  const [backG, setBackG] = useState(false);
  return (
    <div className="App" style={{backgroundColor: backG? 'rgb(36, 35, 35)': '#FFF'}}>
      <BrowserRouter>
      <Navbar backG={backG} setBackG={setBackG}/>
      <React.Suspense fallback={<Loading/>}>
        <Routes>
            <Route path='/' element={<Popular detailsId={detailsId} setDetailsId={setDetailsId}/>} exact />
            <Route path='/trending' element={<Trending trendingId={trendingId} setTrendingId={setTrendingId}/>} exact/>
            <Route path='/trending/details' element={<TrendingDetails trendingId={trendingId} setTrendingId={setTrendingId}/>} exact/>
            <Route path='/popular/details' element={<PopularDetails detailsId={detailsId} setDetailsId={setDetailsId}/>} exact/>
        </Routes>
        </React.Suspense>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
