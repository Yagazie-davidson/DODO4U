import React from "react";
import Img from "../assets/productImg.png";

function ProductsCard() {
	return (
		<div className="border-2 border-base mt-10 max-w-xs h-full py-10 flex justify-center rounded-md flex-col px-5 ">
			<img src={Img} alt="pic" className="rounded-lga" />
			<div className="pt-4 leading-loose">
				<p className="font-poppins font-semibold">Mini Chips Bag</p>
				<p className="font-poppins font-semibold">Price: N100</p>
				<p className="font-poppins font-semibold">
					Quty:{" "}
					<span className="bg-base text-white p-2 h-5 w-5 rounded-full">-</span>{" "}
					1{" "}
					<span className="bg-base text-white p-2 w-full h-full rounded-full">
						+
					</span>
				</p>
			</div>
		</div>
	);
}

export default ProductsCard;
