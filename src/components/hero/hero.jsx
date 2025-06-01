import React from "react";
import "./hero.scss";

const Hero = () => {
	return (
		<div className="hero">
			<div className="hero-container">
				<div className="title">
					<h1>End to End Devops project</h1>
				</div>
				<div className="description">
					<p>
						This is a sample project to demonstrate the use of AWS,
						Jenkins, and Docker in a DevOps pipeline.
					</p>
				</div>
				<div className="button-container">
					<button>
						<p>git-hub</p>
					</button>
					<button>
						<p>medium</p>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
