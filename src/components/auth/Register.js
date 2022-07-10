// import React, { useState } from "react";
// import { connect } from "react-redux";
// import { Link, Redirect  } from "react-router-dom";
// import { register } from "../../actions/auth";
// import PropTypes from "prop-types";
// import Alert from "../layout/Alert";

// const Register = ({ register, isAuthenticated }) => {
// 	const [error, setError] = useState(null);

// 	// const history = useHistory();

// 	// const historyToContacts = () => {
// 	//   // 👇️ navigate to /contacts
// 	//   history.push('/login');
// 	// };
// 	const [formData, setFormData] = useState({
// 		name: "",
// 		email: "",
// 		password: "",
		
// 	});
// 	const validateEmail = (email) => {
// 		const re =
// 		  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// 		return re.test(String(email).toLowerCase());
// 	  };

// 	const { name, email, password} = formData;

// 	const onChange = (e) =>
// 		setFormData({ ...formData, [e.target.name]: e.target.value });

// 	const onSubmit = async (e) => {
// 		console.log("Form data", e);
// 		e.preventDefault();

// 		if (formData.name.length < 12) {
// 			setError('Name  must be at least 12 chars long');
// 		  }
	  
// 		if (!validateEmail(formData.email)) {
// 			setError('Invalid Email');
// 		  }
	  
// 		  if (formData.password.length < 8) {
// 			setError('Password must be at least 8 chars long');
// 		  }
	  
// 		  if (!error) {
// 			// No errors.
// 		  }
// 			register({ name, email, password });
		
// 	};

// 	// Redirect if logged in
// 	 if (isAuthenticated) {
// 	 	return <Redirect to="/login" />;
// 	 }
	

// 	return (
// 		<div className="register-form">
// 			<h1 className="heading">Sign Up</h1>
// 			<p className="lead">
// 				<i className="fas fa-user"></i> Create Your Account
// 			</p>
// 			<Alert />
// 			<br />
// 			{error && <div style={{ color: 'red' }}>{error}</div>}
// 			<form className="form" onSubmit={(e) => onSubmit(e)}>
// 				<div className="form-group">
// 					<input
// 						type="text"
// 						placeholder="Name"
// 						name="name"
// 						value={name}
// 						onChange={(e) => onChange(e)}
// 					/>
// 				</div>
// 				<div className="form-group">
// 					<input
// 						type="email"
// 						placeholder="Email Address"
// 						name="email"
// 						value={email}
// 						onChange={(e) => onChange(e)}
						
// 					/>
// 				</div>
// 				<div className="form-group">
// 					<input
// 						type="password"
// 						placeholder="Password"
// 						name="password"
// 						minLength="6"
// 						value={password}
// 						onChange={(e) => onChange(e)}
						
// 					/>
// 				</div>
				
// 				<input type="submit" className="btn btn-primary" value="Register" />
// 			</form>
// 			<p className="link">
// 				Already have an account? <Link to="/login">Sign In</Link>
// 			</p>
// 		</div>
// 	);
// };

// Register.propTypes = {
// 	setAlert: PropTypes.func.isRequired,
// 	register: PropTypes.func.isRequired,
// 	isAuthenticated: PropTypes.bool,
// };

// const mapStateToProps = (state) => ({
// 	isAuthenticated: state.auth.isAuthenticated,
// });

// export default connect(mapStateToProps, {  register})(Register);




// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { register } from '../../actions/auth';
// import { withRouter } from 'react-router-dom';

// class Register extends Component {
//   // pretty standard
//   constructor(props) {
//     super(props);
//     this.state = {
// 		name: '',
//       email: '',
//       password: ''
//     };

//     this.onChange = this.onChange.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//   }

//   onChange(e) {
//     // change a key in state with whatever the name attribute is
//     // either username or password
//     this.setState({ [e.target.name]: e.target.value });
//   }

//   onSubmit(e) {
//     e.preventDefault();
//     // make sure we use an arrow function here to correctly bind this to this.props.history.push
//     this.props.register(this.state).then(
//       () => {
//         // route to /login once signup is complete
//         this.props.history.push('/login');
//       },
//       // if we get back a status code of >= 400 from the server...
//     //   err => {
//     //     // not for production - but good for testing for now!
//     //     debugger;
//     //   }
//     );
//   }

//   render() {
//     return (
//       <div className="row">
//         <div className="col-md-4 col-md-offset-4">
//           <form onSubmit={this.onSubmit}>
//             <h1>Sign up!</h1>
// 			<div className="form-group">
//               <label htmlFor="username">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={this.state.name}
//                 onChange={this.onChange}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="username">Email</label>
//               <input
//                 type="text"
//                 id="email"
//                 name="email"
//                 value={this.state.email}
//                 onChange={this.onChange}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">password</label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={this.state.password}
//                 onChange={this.onChange}
//               />
//             </div>
//             <div className="form-group">
//               <button className="btn btn-primary btn-lg">Sign up</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// // let's start adding propTypes - it's a best practice
// Register.propTypes = {
// 	register: PropTypes.func.isRequired,
// 	history: PropTypes.func.isRequired,

	
// };

// export default withRouter(connect(null, { register })(Register));




// import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
// import { connect } from 'react-redux';
//  import PropTypes from "prop-types";
// // import { userActions } from '../../actions';
// import { signUp } from "../../actions/authActions";
// class Register extends Component {
//     constructor(props) {
// 		super(props);

// 		this.state = {
//       		name: '',
// 			email: '',
// 			password: '',
// 			submitted : false
// 		};
// 		this.handleInputChange = this.handleInputChange.bind(this);
// 		this.submitRegister = this.submitRegister.bind(this);
		
// 	}

// 	handleInputChange(e) {
// 		const name = e.target.name;
// 		const value = e.target.value;
// 		this.setState({
// 			[name]: value
// 		});
// 	}

// 	submitRegister(e) {
// 		e.preventDefault();
// 		this.setState({ submitted: true });
// 		const { name, email, password } = this.state;
// 		if (email && password) {
// 			this.props.signUp({name, email, password});
// 		}
// 	}

// 	render(){
// 		//  const { registering  } = this.props;
//         const { name, email, password, submitted } = this.state;
// 		return(

// 			<div className="col-md-4 col-md-offset-4">
// 			<h2 className="text-center">User Registration</h2><form>
// 			<div className={'form-group' + (submitted && !name ? ' has-error' : '')}>
// 					<label>Name:</label>
// 					<input type="text" id="name" className="form-control input-shadow" placeholder="Enter Name" value={this.state.name} onChange={this.handleInputChange} name="name"/>
// 			 								 { submitted && !name && <div className="help-block">First Name is required</div> }
// 			</div>
// 			<div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
// 					<label>Email:</label>
// 					<input type="text" id="email" className="form-control input-shadow" placeholder="Enter Email" value={this.state.email} onChange={this.handleInputChange} name="email"/>
// 											{ submitted && !email && <div className="help-block">Email is required</div> }
// 			</div>
// 			<div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
// 					<label htmlFor="password">Password: </label>
// 					<input type="password" id="password" className="form-control input-shadow" placeholder="Enter Password" value={this.state.password}
// 					onChange={this.handleInputChange} name="password"/>
// 					{ submitted && !name && <div className="help-block">Password is required</div> }
// 					</div>
// 					<button type="button" onClick={this.submitRegister} className="btn btn-primary btn-block">Register</button>
// 			<Link to="/login" className="btn btn-link">Login</Link>
// 		 </form></div>
// 		)
// 	}

// }

// Register.propTypes = {
// 	signUp: PropTypes.object.isRequired,
// 	// location: PropTypes.object.isRequired,
// 	//  	isAuthenticated: PropTypes.bool.isRequired,
// 	//  location: PropTypes.object.isRequired
// 	 };
// // function mapState(state) {
// //     // const { registering } = state.register;
// //     // return { registering };
// // }

// // const actionCreators = {
// //     register: signUp.register
// // }

// const connectedRegister = connect(signUp)(Register);
// export { connectedRegister as Register };


import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import { register } from "../../actions/auth";
import { signUp } from "../../actions/authActions";
import PropTypes from "prop-types";
// import Alert from "../layout/Alert";
// import { setAlert } from "../../actions/alert";

const Register = ({  signUp, isAuthenticated }) => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
	});

	const { name, email, password } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		console.log("Form data", e);
		e.preventDefault();
		
			signUp({ name, email, password });
		
	};

	// Redirect if logged in
	// if (isAuthenticated) {
	// 	 <Redirect to="/login" />;
	// }

	return (
		<div className="register-form">
			<h1 className="heading">Sign Up</h1>
			<p className="lead">
				<i className="fas fa-user"></i> Create Your Account
			</p>
			{/* <Alert /> */}
			<br />
			<form className="form" onSubmit={(e) => onSubmit(e)}>
				<div className="form-group">
					<input
						type="text"
						placeholder="Name"
						name="name"
						value={name}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<div className="form-group">
					<input
						type="email"
						placeholder="Email Address"
						name="email"
						value={email}
						onChange={(e) => onChange(e)}
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
					/>
				</div>
				
				<input type="submit" className="btn btn-primary" value="Register" />
			</form>
			<p className="link">
				Already have an account? <Link to="/login">Sign In</Link>
			</p>
		</div>
	);
};

Register.propTypes = {
	// setAlert: PropTypes.func.isRequired,
	signUp: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {  signUp })(Register);