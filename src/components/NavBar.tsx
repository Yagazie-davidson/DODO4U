import { Link } from "react-router-dom";

function NavBar() {
	let navs: string[][];
	navs = [
		["Home", "/"],
		["Products", "/products"],
		["Cart", "/cart"],
	];
	return (
		<div className="bg-base flex flex-between">
			<h2 className="text-white px-3 py-2">DODO4U</h2>
			<div>
				{navs.map(([title, url]) => (
					<Link to={url}>{title}</Link>
				))}
			</div>
		</div>
	);
}

export default NavBar;
