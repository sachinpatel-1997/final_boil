
import React, {useEffect} from "react";
// import "../../";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
 import Navbar from "../../components/layout/Navbar";
import Landing from "../../components/layout/Landing";
import Login from "../../components/auth/Login";
import Register from "../../components/auth/Register";
 import { loadUser } from "../../actions/authActions";
//   import { signIn } from "./actions/authActions";
import { useDispatch, useSelector } from "react-redux";
 import PrivateRoute from "../../utils/privateRoute";
 import NotFound from "../../components/NotFound";
 import Dashboard from "../../components/Dashboard";
 import { interceptor } from "../../utils/interceptor";

 import Create from "../../components/Create";
 import Update from "../../components/Update";
// import Listing from "components/Listing";

// import Read from "./pages/Read";
// import Create from "./pages/Create";
// import Update from "./pages/Update";

// import setAuthToken from "./utils/setAuthToken";
// import store from "./store";
// import { loadUser } from "./actions/auth";

// if (localStorage.token) {
// 	setAuthToken(localStorage.token);
// }

function App() {
	
  const dispatch = useDispatch();
   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const refreshToken = {
    refreshToken: localStorage.getItem(`refreshToken`),
  };

  useEffect(() => {
       isLoggedIn && dispatch(loadUser(refreshToken));
	//  isLoggedIn && dispatch(signIn);
  }, []);
  interceptor();
	return (
		<>
			<div className="App">
				<Router>
				 <Navbar />
					<Switch>
						 <Route exact path="/" component={Landing} /> 
						 
						 <PrivateRoute exact path="/dashboard" component={Dashboard}/>
                         <PrivateRoute path="/create" exact component={Create} />
                         <PrivateRoute path="/update/:id" exact component={Update} />
             {/* <PrivateRoute exact path="/dashboard/listing" component={Listing} /> */}
						<Route exact path="/register" component={Register} />
						<Route exact path="/login" component={Login} />
						 <Route exact path="" component={NotFound} /> 


						 
						 {/* <Route exact path={["/", "/defaultPath"]} component={UserListing} /> */}
						 {/* <Route path="/" exact component={Read} />
        <Route path="/create" exact component={Create} />
        <Route path="/update/:id" exact component={Update} /> */}
					</Switch>
				</Router>
			</div>
		</>
	);
}

export default App;