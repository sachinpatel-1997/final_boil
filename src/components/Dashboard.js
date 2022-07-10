import React from "react";
 import PropTypes from "prop-types";
 import { connect } from "react-redux";



// import Products from "./Products/index";


   import  Read  from "./Read";

// import AddUserComponent from "./AddUserComponent";



// import Dash from "./JargonList";

const Dashboard = ({ auth: { user } }) => {
 
	return (
		
	<>
	
		<Read/>
	</>
		
		
		   
	)
};
Dashboard.propTypes = {
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(Dashboard);


// import React from 'react';
// import UserListing from '../components/CustomerList';
// import UpdateDetails from '../components/UpdateUser';
// import ViewDetails from '../components/DetailsComponent';
// import AddUser from '../components/AddUserComponent';
// // import './App.css';
// import { BrowserRouter as Router, Route } from "react-router-dom";

// function Dashboard() {
//   return (
//     <Router>
//       <Route exact path={["/", "/defaultPath"]} component={UserListing} />
//       <Route exact path={["/update/:id"]} component={UpdateDetails} />
//       <Route exact path={["/details/:id"]} component={ViewDetails} />
//       <Route exact path={["/add"]} component={AddUser} />
//     </Router>
//   );
// }

// export default Dashboard;