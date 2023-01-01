import React from "react";
import Img from "../assets/productImg.png";

function OrderCard() {
	return (
		<div className="border-2 border-base flex items-center py-2 px-2 rounded-md gap-x-7 w-fit">
			<img src={Img} alt="img" className="max-h-32 w-36" />{" "}
			<p className="font-bold text-lg">Mini Chips Bag (Riped) X 1 </p>
		</div>
	);
}

export default OrderCard;
