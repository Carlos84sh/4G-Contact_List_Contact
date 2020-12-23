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
		//Declaracion del endpoint

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
						}).catch(error => console.log(error));
                    }
            
            //////// CREAR USUARIOS
			createUser(data) {
				const store = getStore();
				const endpoint = "https://assets.breatheco.de/apis/fake/contact/agenda";
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
					})
            

            }

			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	}
};

export default getState;
