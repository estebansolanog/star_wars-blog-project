import "bootstrap/dist/css/bootstrap.min.css";
import { TrashFill } from "react-bootstrap-icons";

import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	//<a href="./demo.html">
	const { store, actions } = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/" className="star_wars">
					<span className="star_wars navbar-brand mb-0 h1 fw-bold text-white">
						STAR
						<br />
						WARS
					</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div>
				<div>
					<div className="nav-item dropdown">
						<div className="nav-link dropdown-toggle btn-primary text-white rounded" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favoritos <span className="bg-secondary px-2 rounded">{store.favoritos.length}</span>
						</div>
						<ul className="dropdown-menu list-unstyled" aria-labelledby="navbarDropdown">
							{store.favoritos && store.favoritos.length > 0 ? <>
								{store.favoritos.map((item, index) => {
									return <li className="m-2 d-flex justify-content-between">
										<Link key={index} to={item.link}>
											<span>{item.name}</span>
										</Link>
										<button className="border-0 bg-white" onClick={() => { actions.eliminarFavorito(index) }}><TrashFill /></button>
									</li>
								})}
							</> : <><span className="d-flex justify-content-center">(empty)</span></>}

						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

/*

[{},{},{
	label:"",
	done:false
} ] 

[{},{},{
	name:"",
	uid:1,
	categoy:"people"
} ] 

*/