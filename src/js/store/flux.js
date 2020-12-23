const getState = ({ getStore, setStore, getActions }) => {
return {
		store: {
			agenda: [],
			contacto: {
				full_name: null,
				phone: null,
				email: null,
				address: null
			},
			user: "CSanchez"
		},

		actions: {
            ///////////// OBTENER USUARIOS
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
						}).catch(error => console.log(error));
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
						getActions().listContacts(store.usuario);
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
						getActions().listContacts(store.usuario);
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
						getActions().listContacts(store.usuario);
					});
			},

			listUser(slug) {
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
