import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { getState } from "../store/flux.js";

import { Context } from "../store/appContext.js";

export function AddContact() {
	const { store, actions } = useContext(Context);

	const [fullName, setFullName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");

	const saveContact = e => {
		const newContact = {
			agenda_slug: store.user,
			full_name: fullName,
			phone: phone,
			email: email,
			address: address
		};
		console.log(newContact); //////////////////////////////////////////////////  BORRAR

		actions.createUser(newContact);
		alert("new contact created");
		setFullName("");
		setPhone("");
		setEmail("");
		setAddress("");
	};

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							onChange={event => setFullName(event.target.value)}
							value={fullName}
						/>
					</div>

					<div className="form-group">
						<label>Email</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter email"
							onChange={event => setEmail(event.target.value)}
							value={email}
						/>
					</div>

					<div className="form-group">
						<label>Phone</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter phone"
							onChange={event => setPhone(event.target.value)}
							value={phone}
						/>
					</div>

					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							onChange={event => setAddress(event.target.value)}
							value={address}
						/>
					</div>
					<Link to="/">
						<button type="button" className="btn btn-primary form-control" onClick={saveContact}>
							Save
						</button>
					</Link>

					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
}
