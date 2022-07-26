import React from 'react';
import Facebook from '../images/icon-facebook.svg';
import Twitter from '../images/icon-twitter.svg';
import LinkedIn from '../images/linkedin.svg';
import Github from '../images/github.svg';
import styled from 'styled-components';


const Footer = () => {
  return (
    <FooterStyle>
        <div className="footer-text">
			<p>Created by Victoria Olumide</p>
			<p>Email: olumideronke@gmail.com</p>
			<p>TMDB API</p>
		</div>
		<div className="footer-cover">
			<a href="https://www.facebook.com/olumide.victoria.56"><img src={Facebook} alt="facebook_icon"/></a>
			<a href="https://twitter.com/OlumideVictori3"><img src={Twitter} alt="twitter_icon"/></a>
			<a href="https://www.linkedin.com/in/victoria-olumide-90439b163/"><img src={LinkedIn} alt="Linkedin_icon"/></a>
			<a href="https://github.com/vickova"><img src={Github} alt="Github_icon"/></a>
		</div>
    </FooterStyle>
  )
}
const FooterStyle = styled.div`
	background-color: rgb(36, 35, 35);
	border-top: 1px solid gray;
	display: flex;
	justify-content: space-around;
	margin-top: 2rem;
	padding: 2rem;
	color:#E1E2E2;

    .footer-text{
        display: flex;
        justify-content: space-between;
        gap: 2rem;
    }
    .footer-cover a{
        margin: 2rem;
    }
    @media screen and (max-width: 685px){
        display: block;
        .footer-text{
            display: block;
        }
        .footer-cover{
            margin: 0;
        }
        .footer-cover a{
            margin: 1rem;
        }
    }
`

export default Footer