import React from 'react';
import '../styles/Landing.css';
import { Link } from 'react-router-dom';

const Landing = () => {
	return (
		<div className="landing-container">
			<div class="header">
				<div class="inner-header flex">
					<h1 className="heading">niMans</h1>
					<h5>
						Discover Your Soundtrack: Personalized Music Recommendations with Nimans 
					</h5>
					<button class="pulse">
						<Link to="/about">Get Started</Link>
					</button>
				</div>

				<div>
					<svg
						class="waves"
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						viewBox="10 24 150 28"
						preserveAspectRatio="none"
						shape-rendering="auto"
					>
						<defs>
							<path
								id="gentle-wave"
								d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
							/>
						</defs>
						<g class="parallax">
							<use
								xlinkHref="#gentle-wave"
								x="48"
								y="0"
								fill="rgb(15, 180, 202)"
							/>
							<use
								xlinkHref="#gentle-wave"
								x="48"
								y="3"
								fill="rgb(15, 180, 202)"
							/>
							<use
								xlinkHref="#gentle-wave"
								x="48"
								y="5"
								fill="rgb(15, 180, 202)"
							/>
							<use
								xlinkHref="#gentle-wave"
								x="48"
								y="7"
								fill="rgb(15, 180, 202)"
							/>
						</g>
					</svg>
				</div>

				<footer>
					<div className="footer-links">
						<Link to="/about">About</Link>
						<a href="https://github.com/adityassharma-ss">GitHub</a>
						<a href="https://www.linkedin.com/in/adityasharma23/">LinkedIn</a>
					</div>
					{/* <p>
						Made with ❤️ by{' '}
						<a href="https://github.com/adityassharma-ss">Aditya</a>
					</p> */}
				</footer>
			</div>

			<div class="content flex"></div>
		</div>
	);
};

export default Landing;
