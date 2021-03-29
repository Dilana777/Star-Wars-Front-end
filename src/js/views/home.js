import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Card } from "../component/card";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

import { PlanetsCard } from "../component/planetsCard";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getPlanets();
		actions.getPeoples();
	}, []);
	//crea vector imgs

	return (
		<div className="container-fluid ">
			<h1 className="pers">Personajes</h1>
			<div className="scrollmenu scro1">
				<div className="row text-center">
					<div className="col" style={{ margin: "3rem 1rem 1rem 1rem" }}>
						{store.peoples.map((items, i) => {
							//actions.getInfPeoples(i + 1);
							return (
								<div key={i} style={{ marginRight: "10px" }}>
									<Card
										title={items.name}
										gender={items.gender}
										hair={items.hair_color}
										index={i + 1}
										eye={items.eye_color}
										url={items.url}
										imgUrl={store.img[i]}
										/*<img
										src={store.img[m]}
										className=""
										alt="Responsive image"
										width="290px"
										height="230px"
									/>*/
										//gender={store.people1.gender}
										//hair={store.people1.hair_color}
										//eye={store.people1.eye_color}
										//	gender={store.inf.gender}
									/>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<h1 className="plane">Planetas</h1>
			<div className="scrollmenu scro">
				<div className="row text-center">
					<div className="col" style={{ margin: "3rem 1rem 1rem 1rem" }}>
						{store.planets.map((items, i) => {
							return (
								<div key={i} style={{ marginRight: "10px" }}>
									<PlanetsCard
										UrlImage={items.UrlImage}
										name={items.name}
										terrain={items.terrain}
										population={items.population}
										index={i + 1}
										urlImgP={store.imgP[i]}
									/>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
