import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';

const About = () => {
	return (
		<div className="about-container">
			<h1>About Nimans</h1>
			<p>
				Nimans is a Content Based Recommendation Service which suggests songs similar
				to the one chosen by the user. It has approximately 140,000+ songs in its database
				and takes less than 400ms to generate recommendations. It can also track your mood & recommend you the songs accordingly.
                All you have to do is to let us detect your mood & enjoy. We promise that we keep your privacy completely protected. You can go further & make a choice.
			</p>
			<div className="options">
				<Link to="/search">Search for Songs</Link>
				<Link to="/recommend">Get Recommendations</Link>
			</div>
		</div>
	);
};

export default About;
