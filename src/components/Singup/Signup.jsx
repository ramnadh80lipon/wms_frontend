	import { useState } from "react";
	import axios from "axios";
	import { Link, useNavigate } from "react-router-dom";
	import styles from "./styles.module.css";
	import Login from '../Login/Login';
  function Signup(){
		const [data, setData] = useState({
			fullName: "",
			phoneNumber: "",
			userEmail:"",
			address : "",
			userType : "",
			password:" ",


			
		});
		const [error, setError] = useState("");
		const navigate = useNavigate();
		console.table(data)

		const handleChange = ({ currentTarget: input }) => {
			setData({ ...data, [input.name]: input.value });
		};

		const handleSubmit = async (e) => {
			e.preventDefault();
			try {
				const response = await axios.post("http://localhost:8080/registration",data,{withCredentials:true})
				console.log(data);
				navigate("/login");
				console.log(response.message);
			} catch (error) {
				if (
					error.response &&
					error.response.status >= 400 &&
					error.response.status <= 500
				) {
					setError(error.response.data.message);

				}
			}
		};

		return (
			<div className={styles.signup_container}>
				<div className={styles.signup_form_container}>
					<div className={styles.left}>
						<h1>already hava an account ?</h1>
						<Link to="/login">
							<button type="button" className={styles.white_btn}>
								Sing in
							</button>
						</Link>
					</div>
					<div className={styles.right}>
						<form className={styles.form_container} onSubmit={handleSubmit}>
							<h1>Create Account</h1>
							<input
								type="text"
								placeholder="Full Name"
								name="fullName"
								onChange={handleChange}
								value={data.fullName}
								required
								className={styles.input}
							/>
							
						
							<input
								type="text"
								placeholder="Phone number"
								name="phoneNumber"
								onChange={handleChange}
								value={data.phoneNumber}
								required
								className={styles.input}
							/>
							<input
								type="email"
								placeholder="Email"
								name="userEmail"
								onChange={handleChange}
								value={data.userEmail}
								required
								className={styles.input}
							/>

							 {error && <p className={styles.error}>{error}</p>}
							 <input
								type="text"
								placeholder="address"
								name="address"
								onChange={handleChange}
								value={data.address}
								required
								className={styles.input}
							/>
							
							<select name="userType"   onChange={handleChange} value={data.userType} className={styles.select}>
								<option value="" disabled defaultValue hidden className={styles.option}>select</option>
								<option value="Admin" className={styles.option}>Admin</option>
								<option value="User" className={styles.option}>User</option>
								<option value="supervisor" className={styles.option}>Super visor</option>
								</select>
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
								Sing Up
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	};
	export default Signup;
