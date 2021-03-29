import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
//import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { propTypes } from "react-bootstrap/esm/Image";
import { Card } from "./card";
import { Context } from "../store/appContext";

export const Navbar = props => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar">
			<div className="container-fluid">
				<Link to="/">
					<a className="navbar-brand" href="/">
						<img
							src="https://www.freepnglogos.com/uploads/star-wars-logo-png-8.png"
							alt=""
							width="90"
							height="45 !important"
							className="d-inline-block align-top"
							backgroundColor="white !important"
						/>{" "}
					</a>
				</Link>

				<div className="dropdown">
					<Dropdown>
						<Dropdown.Toggle variant="info" id="dropdown-basic">
							Favoritos <i className="fas fa-eye" />
							{store.favoritos.length}
						</Dropdown.Toggle>
						<Dropdown.Menu>
							{store.favoritos.map((items, i) => {
								return (
									<Dropdown.Item key={i}>
										{items.name} {"    "}
										<i
											className="fas fa-times"
											style={{ color: "red" }}
											onClick={() => actions.Delete(i)}
										/>
									</Dropdown.Item>
								);
							})}
						</Dropdown.Menu>
					</Dropdown>
				</div>
			</div>
		</nav>
	);
};
