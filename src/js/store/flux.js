import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			peoples: [],
			favoritos: [],
			//detalle: [],
			img: [
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2F9%2F9b%2FLuke_Skywalker.png&f=1&nofb=1",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.nIit7LTOy8Vo_41ETzKmTgHaJQ%26pid%3DApi&f=1",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.XHmOOLBf_WcjvG6p4A1ehAHaHa%26pid%3DApi&f=1",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.t7k_5nz0mvgM-pR02OL-KwHaD4%26pid%3DApi&f=1",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fam21.akamaized.net%2Ftms%2Fcnt%2Fuploads%2F2018%2F06%2Fleia-organa-star-wars-1200x669.png&f=1&nofb=1",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.hCxSrZLZVa-_Bq8Yn9prAgHaIJ%26pid%3DApi&f=1",
				"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.darthsanddroids.net%2Fcast%2FBeruWhitesun.jpg&f=1&nofb=1",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.ZM-M0RhFw9y7k_LEJqsxyAHaEK%26pid%3DApi&f=1",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.HTA5QsVXvGo77qtWulenygHaHa%26pid%3DApi&f=1",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.nGR30Zsf8eyLg2F4hWaqXwHaKl%26pid%3DApi&f=1"
			],

			imgP: [
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%3Fid%3DOIP.6OHmW5ttXzKnOeduoFjAYgHaEK%26pid%3DApi&f=1",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Ffz9Oq2Um_D3HlCWgr2HfwHaEK%26pid%3DApi&f=1",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.FHQVPLdwp3myb1n2zHR4JAHaDt%26pid%3DApi&f=1",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.YCP5bT5pJYGxa6-03YCidgHaEK%26pid%3DApi&f=1",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.tVIFB2C94uil1ltH9-7OdwHaEa%26pid%3DApi&f=1",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdata1.origin.com%2Fcontent%2Fdam%2Foriginx%2Fweb%2Fapp%2Fgames%2Fbastion%2FScreenshots%2FSWBF_dlc_screenhi_930x524_en_US_bespin_cloud2_v1.jpg&f=1&nofb=1",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.F_nszvk-Do00ys_7OKQelwHaEK%26pid%3DApi&f=1",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.LxShcxHcgjmIB5H7zwBSYwHaDT%26pid%3DApi&f=1",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.PJy4hhu4W9xPCbqNGr-3dQHaEK%26pid%3DApi&f=1",
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.fv8LAz8ZQFMuWDLLMH8bNAHaDJ%26pid%3DApi&f=1"
			]
		},
		actions: {
			// Use getActions to call a function within a fuction

			//carga en el array de planets lo que se obtenga en el fetch
			getPlanets: async () => {
				const store = getStore();
				fetch("https://swapi.dev/api/planets/")
					.then(response => response.json())
					.then(data => {
						setStore({ planets: data.results });
					})
					.catch(error => console.log("error", error));
			},

			//carga en el array de people lo que se obtenga en el fetch
			getPeoples: async () => {
				const store = getStore();
				fetch("https://swapi.dev/api/people/")
					.then(response => response.json())
					.then(data => {
						setStore({ peoples: data.results });
						//	getInfPeoples1(data.results.uid);
					})

					.catch(error => console.log("error", error));
			},

			//Agregar a un array de favoritos cuando el usuario le de click al corazón
			Favorite: (id, name, url) => {
				const store = getStore();
				//forma para agregar si esta vacido el array
				if (store.favoritos.length <= 0) {
					setStore({ favoritos: [{ id: id, name: name, url: url }] });

					//forma para agregar si tiene valor el array
				} else {
					setStore({ favoritos: [...store.favoritos, { id: id, name: name, url: url }] });
				}
				//console.log(store.favoritos);
			},

			//Funcion para eliminar los favoritos en el navbar
			Delete: i => {
				//get the store
				const store = getStore();
				//elimina el valor de acuerdo al index que se le envie
				store.favoritos.splice(i, 1);
				//sobre escribe el nuevo valor
				setStore({ favoritos: store.favoritos });
			},

			/*getInfPeoples: async id => {
				const store = getStore();

				fetch("https://www.swapi.tech/api/people/" + id)
					.then(response => response.json())
					.then(data => {
						//	setStore({ detalle: data.result });
						setStore({ detalle: data.result.properties });
					})
					.catch(result => console.log("error", result));

				console.log(store.detalle);
			},

			getInfPlanets: id => {
				const store = getStore();
				console.log(id);
				fetch("www.swapi.tech/api/planets/" + id)
					.then(response => response.json())
					.then(result => {
						// setStore({ detalle: result });
						setStore({ detalle: data.result.properties });
						//setStore({ favoritos: data.result.properties });
					})
					.catch(error => console.log("error", error));
            },*/

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
