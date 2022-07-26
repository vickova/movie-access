import React from 'react';
import MovieIcon from '../images/movie-icon.svg';
import styled, {keyframes} from 'styled-components';

const Loading = () => {
  return (
    <LoadingStyle>
      <div>
        <img src={MovieIcon} alt="movie" />
        <div className='inner'>

        </div>
      </div>
    </LoadingStyle>
  )
}
const spin = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  	`
const LoadingStyle = styled.div`
  display: flex;
		justify-content: center;
		align-items: center;
    .inner{
      border-radius: 50%;
		width: 50px;
		height: 50px;
		border: 3px solid #ffffff6a;
		border-top-color: rgb(36, 35, 35);
		animation: ${spin} 1s infinite linear;
    }
`

export default Loading