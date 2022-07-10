// // import React, { useState } from "react";
// // import { Link, Redirect } from "react-router-dom";
// // import { connect } from "react-redux";
// // import PropTypes from "prop-types";
// // import { login } from "../../actions/auth";
// // import Alert from "../layout/Alert";

// // const Login = ({ login, isAuthenticated }) => {
// // 	const [error, setError] = useState(null);
// // 	const [formData, setFormData] = useState({
		
// // 		email: "",
// // 		password: "",
// // 	});

// // 	const validateEmail = (email) => {
// // 		const re =
// // 		  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// // 		return re.test(String(email).toLowerCase());
// // 	  };

// // 	const { email, password } = formData;

// // 	const onChange = (e) =>
// // 		setFormData({ ...formData, [e.target.name]: e.target.value });

// // 	const onSubmit = async (e) => {
// // 		e.preventDefault();
// // 		if (!validateEmail(formData.email)) {
// // 			setError('Invalid Email');
// // 		  }
	  
// // 		  if (formData.password.length < 8) {
// // 			setError('Password must be at least 8 chars long');
// // 		  }
	  
// // 		  if (!error) {
// // 			// No errors.
// // 		  }
// // 		login(email, password);
// // 	};

// // 	// Redirect if logged in
// // 	if (isAuthenticated) {
// // 		return <Redirect to="/dashboard" />;
// // 	}

// // 	return (
// // 		<div className="login-form">
// // 			<h1 className="heading">Sign In</h1>
// // 			<p className="lead">
// // 				<i className="fas fa-user"></i> Sign Into Your Account
// // 			</p>
// // 			<Alert />
// // 			<br />
// // 			{error && <div style={{ color: 'red' }}>{error}</div>}
// // 			<form className="form" onSubmit={(e) => onSubmit(e)}>
// // 				<div className="form-group">
// // 					<input
// // 						type="email"
// // 						placeholder="Email Address"
// // 						name="email"
// // 						value={email}
// // 						onChange={(e) => onChange(e)}
					
// // 					/>
// // 				</div>
// // 				<div className="form-group">
// // 					<input
// // 						type="password"
// // 						placeholder="Password"
// // 						name="password"
// // 						minLength="6"
// // 						value={password}
// // 						onChange={(e) => onChange(e)}
						
// // 					/>
// // 				</div>
// // 				<input type="submit" className="btn" value="Login" />
// // 			</form>
// // 			<p className="link">
// // 				Dont have an account? <Link to="/register">Sign Up</Link>
// // 			</p>
// // 		</div>
// // 	);
// // };

// // Login.propTypes = {
// // 	login: PropTypes.func.isRequired,
// // 	isAuthenticated: PropTypes.bool,
// // };

// // const mapStateToProps = (state) => ({
// // 	isAuthenticated: state.auth.isAuthenticated,
// // });

// // export default connect(mapStateToProps, { login })(Login);



// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { login } from '../../actions/auth';
// import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';

// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       password: '',
//     };

//     this.onSubmit = this.onSubmit.bind(this);
//     this.onChange = this.onChange.bind(this);
//   }


//   onSubmit(e) {
//     e.preventDefault();
//       this.props.login(this.state).then(
//         // make sure we use arrow functions to bind `this` correctly
//         (res) => this.props.history.push('/dashboard'),
//         // (err) => {
//         //   debugger
//         // });
// 		);
//   }

//   onChange(e) {
//     this.setState({ [e.target.name]: e.target.value });
//   }

//   render() {
//     const { email, password } = this.state;

//     return (
//       <div className="row">
//         <div className="col-md-4 col-md-offset-4">
//       <form onSubmit={this.onSubmit}>
//         <h1>Login</h1>
//         <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input type="text" id="email" name="email" value={email} onChange={this.onChange}/>
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">password</label>
//             <input type="password" id="password" name="password" value={password} onChange={this.onChange}/>
//           </div>
//         <button type="submit" className="btn btn-primary">Login</button>
//       </form>
//       </div>
//       </div>
//     );
//   }
// }
// // let's add some propTypes for additional validation and readability
// Login.propTypes = {
//   login: PropTypes.func.isRequired,
//   history: PropTypes.object.isRequired,
// }

// // we do not want any state mapped to props, so let's make that first parameter to connect `null`
// export default withRouter(connect(null, { login })(Login));



// import React, { Component } from 'react';
// import {	Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// // import { userActions } from '../../actions';
// import { signIn } from "../../actions/authActions";
// import PropTypes from "prop-types";
// class Login extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.props.logout();
// 		this.state = {
// 			email: '',
// 			password: '',
// 			submitted: false
// 		};
// 		this.handleInputChange = this.handleInputChange.bind(this);
// 		this.submitLogin = this.submitLogin.bind(this);
		
// 	}

// 	handleInputChange(e) {
// 	  const name = e.target.name;
// 		const value = e.target.value;
// 		this.setState({
// 			[name]: value
// 		});
// 	}

// 	submitLogin(e) {
// 		e.preventDefault();
// 		this.setState({ submitted: true });
// 		const { email, password } = this.state;
// 		if (email && password) {
// 			this.props.login(email, password);
// 		}
// 	}

// 	render(){
// 		//  const { loggingIn } = this.props;
// 		const { email, password, submitted } = this.state;
// 		return(
// 			<div className="col-md-4 col-md-offset-4">
// 		 		<h2 className="text-center">User Login</h2>
// 				 	<form name="form">
// 						<div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
// 							<label htmlFor="email">Email:</label>
// 							<input type="text" id="email" className="form-control input-shadow" placeholder="Enter Email" value={this.state.email} onChange={this.handleInputChange} name="email"/>
// 							{submitted && !email && <div className="help-block">Email is required</div> }
// 						</div>
// 						<div className={'form-group' + (submitted && !password ? ' has-error' : '')}>                    
// 							<label>Password: </label>
// 							<input type="password" id="exampleInputPassword" className="form-control input-shadow" placeholder="Enter Password" value={this.state.password}	onChange={this.handleInputChange}	name="password"/>
// 							{submitted && !email && <div className="help-block">Password is required</div> }
// 						</div>
						
// 						<button type="button" onClick={this.submitLogin} className="btn btn-primary btn-block">Sign In</button>
// 						<Link to="/register" className="btn btn-link">Register</Link>
// 					</form>
// 			 </div>
		
// 		)
// 	}
// }
// function mapState(state) {
// 	const { loggingIn } = state.authentication;
// 	return { loggingIn };
// }

// const actionCreators = {
// 	login: signIn.login,
// 	logout: signIn.logout
// };

// Login.propTypes = {
// 	logout: PropTypes.object.isRequired,
// 	login: PropTypes.object.isRequired,
	
// 	//  	isAuthenticated: PropTypes.bool.isRequired,
// 	//  location: PropTypes.object.isRequired
// 	 };
// const connectedLoginPage = connect(mapState, actionCreators)(Login);
// export { connectedLoginPage as Login };


import React, {  useState } from "react";
import { Link, Redirect } from "react-router-dom";
import {  useDispatch, connect } from "react-redux";
import PropTypes from "prop-types";
// import { login } from "../../actions/auth";
import { signIn } from "../../actions/authActions";
// import Alert from "../layout/Alert";

const Login = ({ signIn, isLoggedIn }) => {
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const { email, password } = formData;
	//  const dispatch = useDispatch();

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		dispatch(signIn(formData));
		signIn(email, password);
	};

	// Redirect if logged in
	if (isLoggedIn) {
		return <Redirect to="/dashboard" />;
	}

	return (
		<div className="login-form">
			<h1 className="heading">Sign In</h1>
			<p className="lead">
				<i className="fas fa-user"></i> Sign Into Your Account
			</p>
			{/* <Alert /> */}
			<br />
			<form className="form" onSubmit={(e) => onSubmit(e)}>
				<div className="form-group">
					<input
						type="email"
						placeholder="Email Address"
						name="email"
						value={email}
						onChange={(e) => onChange(e)}
						required
					/>
				</div>
				<div className="form-group">
					<input
						type="password"
						placeholder="Password"
						name="password"
						minLength="6"
						value={password}
						onChange={(e) => onChange(e)}
						required
					/>
				</div>
				<input type="submit" className="btn" value="Login" />
			</form>
			<p className="link">
				Dont have an account? <Link to="/register">Sign Up</Link>
			</p>
		</div>
	);
};

Login.propTypes = {
	signIn: PropTypes.func.isRequired,
	isLoggedIn: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps, { signIn })(Login);