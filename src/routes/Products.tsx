import React from "react";
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
			<div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4 place-self-center">
				<ProductsCard />
				<ProductsCard />
				<ProductsCard />
			</div>
			{/* <Footer /> */}
		</div>
	);
}

export default Products;
