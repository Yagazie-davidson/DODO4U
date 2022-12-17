import React from "react";
import Plantain from "../assets/AirPlantain.png";

function Hero() {
	return (
		<div className="bg-base h-screen">
			<div className="flex justify-between items-center pt-16 px-12">
				<div className="">
					<p className="text-white text-4xl	">
						Sweetened <span>PLANTAIN</span> chips <br /> For all kinds of MOOD
					</p>
				</div>
				<div>
					<img src={Plantain} alt="plantain" />
				</div>
			</div>
		</div>
	);
}

export default Hero;
