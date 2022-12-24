import React from "react";
import Plantain from "../assets/AirPlantain.png";

function Hero() {
	return (
		<div className="bg-base h-[87vh]">
			<div className="flex justify-between tablet:justify-center laptop:justify-between flex-wrap items-center pt-16 px-12">
				<div className="bg-ellipse tablet:order-last laptop:order-first">
					<p className="text-white text-4xl font-Josefin font-bold bg-bg-ellipse">
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
