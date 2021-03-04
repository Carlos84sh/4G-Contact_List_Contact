const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			contacts: [],
			contacto: {
				full_name: null,
				phone: null,
				email: null,
				address: null
			},
			user: "CSanchez"
		},

		actions: {
			getUsers() {
				const store = getStore();
				const urlBase = "https://assets.breatheco.de/";
				console.log("lista de contacts", store.contacts);
				if (store.contacts.length === 0) {
					const endpoint = `${urlBase}apis/fake/contact/agenda/CSanchez`;
					const config = {
						method: "GET"
					};
					fetch(endpoint, config)
						.then(response => {
							return response.json();
						})
						.then(json => {
							console.log("JSON", json);
							setStore({ contacts: json });
						})
						.catch(error => console.log(error));
				}
			},

			///////
			getUser(id) {
				const store = getStore();
				const endpoint = "https://assets.breatheco.de/apis/fake/contact/" + id;
				const config = {
					method: "GET"
				};
				fetch(endpoint, config)
					.then(response => {
						return response.json();
					})
					.then(json => {
						setStore({
							contacto: json
						});
					});
			},

			createUser(data) {
				const store = getStore();
				const endpoint = "https://assets.breatheco.de/apis/fake/contact/";
				const config = {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
				};
				fetch(endpoint, config)
					.then(response => {
						return response.json();
					})
					.then(json => {
						getActions().listContacts(store.user);
					});
			},

			updateUser(id, data) {
				const store = getStore();
				const endpoint = "https://assets.breatheco.de/apis/fake/contact/" + id;
				const config = {
					method: "PUT",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
				};
				fetch(endpoint, config)
					.then(response => {
						return response.json();
					})
					.then(json => {
						getActions().listContacts(store.user);
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},

			deleteUser(id) {
				const store = getStore();
				const endpoint = "https://assets.breatheco.de/apis/fake/contact/" + id;
				const config = {
					method: "DELETE"
				};
				fetch(endpoint, config)
					.then(response => {
						return response.json();
					})
					.then(json => {
						getActions().listContacts(store.user);
					});
			},

			listContacts(slug) {
				const store = getStore();
				const endpoint = "https://assets.breatheco.de/apis/fake/contact/agenda/" + slug;
				const config = {
					method: "GET"
				};
				fetch(endpoint, config)
					.then(response => {
						return response.json();
					})
					.then(json => {
						setStore({
							agenda: json
						});
					});
			}

			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
