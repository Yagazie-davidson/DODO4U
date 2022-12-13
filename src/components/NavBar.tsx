import React from "react";

function NavBar() {
	return (
		<div className="bg-base flex flex-between">
			<h2 className="text-white px-3 py-2">DODO4U</h2>
			{/* {[
				["Home", "/dashboard"],
				["Team", "/team"],
			].map(([title, url]) => (
				<a href={url} className="px-3 py-2 text-white">
					{title}
				</a>
			))} */}
		</div>
	);
}

export default NavBar;
