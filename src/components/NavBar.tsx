import { Link } from "react-router-dom";
import cart from "../assets/cart.png";
function NavBar() {
	let navs: string[][];
	navs = [
		["Home", "/"],
		["Products", "/products"],
	];
	return (
		<div className="bg-base flex justify-between items-center w-full h-20 px-14">
			<Link to="/">
				<h2 className="text-white text-2xl font-bold font-Josefin">DODO4U</h2>
			</Link>
			<div className="flex gap-x-8">
				{navs.map(([title, url]) => (
					<Link to={url} className="text-white font-bold text-lg font-Josefin	">
						{title}
					</Link>
				))}
				<Link to="/cart">
					<img src={cart} alt="cart" />
				</Link>
			</div>
		</div>
	);
}

export default NavBar;
