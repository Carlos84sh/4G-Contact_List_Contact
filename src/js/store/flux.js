const getState = ({ getStore, setStore }) => {
	return {
		store: {
			user: []
		},
		actions: {
			getUser() {
				const store = getStore();
				const urlBase = "https://assets.breatheco.de/";

				if (store.user.length === 0) {
					const endpoint = `${urlBase}apis/fake/contact/agenda/CSanchez`;
					const config = {
						method: "GET",
						cors: true
					};
					fetch(endpoint, config)
						.then(response => {
							return response.json();
						})
						.then(json => {
							console.log(json);
							setStore({ user: json.results });
						})
						.catch(error => console.log(error));
				}
				//(Arrow) Functions that update the Store
				// Remember to use the scope: scope.state.store & scope.setState()
			}
		}
	};
};

export default getState;
