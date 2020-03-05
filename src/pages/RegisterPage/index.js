import React, { Component } from "react";
import "./index.css";
import RegisterForm from "../../components/RegisterForm";

export default class RegisterPage extends Component {
	render() {
		return (
			<div className="register-page">
				<RegisterForm />
			</div>
		);
	}
}
