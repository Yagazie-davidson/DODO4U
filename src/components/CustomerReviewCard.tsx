import React from "react";

function CustomerReviewCard() {
	return (
		<div className="w-96 border-2 border-base py-10 pl-3 rounded-md">
			<h5 className="font-poppins font-semibold text-lg">
				Harry Potter,{" "}
				<span className="italic font-normal">Godric Gryffindor</span>
			</h5>
			<p className="font-poppins">
				Lorem ipsum dolor sit amet, consectet adipiscing elit. eiusmod tempor.
			</p>
		</div>
	);
}

export default CustomerReviewCard;
