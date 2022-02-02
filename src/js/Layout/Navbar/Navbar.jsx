import React from "react";
import { Link } from "react-router-dom";

//Img
import StarWars from "../../../img/starwars.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 px-4">
			<Link to="/">
				<img src={StarWars} />
			</Link>
			<div className="ml-auto">
				<div className="btn-group">
					<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						Favourites
					</button>
					<ul className="dropdown-menu">
					</ul>
				</div>
			</div>
		</nav>
	);
};
