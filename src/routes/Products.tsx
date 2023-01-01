import React from "react";
import CustomerReviewCard from "../components/CustomerReviewCard";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ProductsCard from "../components/ProductsCard";

function Products() {
	return (
		<div>
			<NavBar />
			<h2 className="font-roboto text-4xl text-center pt-8 underline underline-offset-8 decoration-base">
				Our Products
			</h2>
			<div className="flex mx-24 justify-between">
				<ProductsCard />
				<ProductsCard />
				<ProductsCard />
			</div>
			<div className="mt-12">
				<h2 className="font-roboto text-4xl text-center pt-8 underline underline-offset-8 decoration-base">
					WHAT OUR CUSTOMERS ARE SAYING
				</h2>
				<div className="flex flex-row justify-between mx-24 mt-20">
					<CustomerReviewCard />
					<CustomerReviewCard />
					<CustomerReviewCard />
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Products;
