import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Login(){
	const [data, setData] = useState({ userEmail: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	
	function handleSubmit(e) {
		e.preventDefault();
		const url = "http://localhost:8080/login";
		axios.post(url, data)
			.then((res) => {
				console.log(res.data.token);
				localStorage.setItem("token", res.data.token);
				console.log("login successful");
			})
			.then(() => {
				window.location = "/profile";
			})
			.catch((error) => {
				console.error("Error during login:", error);
			});
	}
	

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="userEmail"
							onChange={handleChange}
							value={data.userEmail}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sing In
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Sing Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;