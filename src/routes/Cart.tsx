import React from "react";
import CustomerReviewCard from "../components/CustomerReviewCard";
import DeliveryForm from "../components/DeliveryForm";
import NavBar from "../components/NavBar";
import OrderCard from "../components/OrderCard";

function Cart() {
	return (
		<div>
			<NavBar />
			<h1 className="font-roboto text-4xl text-center pt-8 underline underline-offset-8 decoration-base">
				Orders
			</h1>
			<div className="mt-10 flex divide-x justify-between mx-14">
				<div className="grid grid-rows-3 gap-10">
					<OrderCard />
					<OrderCard />
					<OrderCard />
				</div>
				<div className="px-48">
					<OrderCard />
					<OrderCard />
					<OrderCard />
				</div>
			</div>
			<div>
				<h1 className="font-roboto text-4xl text-center pt-8 underline underline-offset-8 decoration-base">
					Devlivery Details
				</h1>
				<DeliveryForm />
			</div>
		</div>
	);
}

export default Cart;
