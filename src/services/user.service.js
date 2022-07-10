export const userService = {
	login,
	logout,
	register
};



function login(email, password) {
	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			email,
			password
		})
	};

	return fetch(`http://localhost:5001/v1/auth/login`, requestOptions)
		.then(handleResponse)
		.then(user => {
			
			// if (user.data.accessToken) {
			// 	localStorage.setItem("user", JSON.stringify(user.data));
			//   }
			//   return user.data;
            // if(user.data.role === 'user'){
            //     history.push('/dashboard');
            // }else{
            //     history.push('/');
            // }
			// store user details and jwt token in local storage to keep user logged in between page refreshes
			localStorage.setItem('token', JSON.stringify(user));
			return user;
		});
}

// remove user from local storage to log user out
function logout() {
	localStorage.removeItem('user');
}

// register user request
function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    return fetch(`http://localhost:5001/v1/auth/register`, requestOptions).then(handleResponse);
}


function handleResponse(response) {
	return response.text().then(text => {
		const data = text && JSON.parse(text);
		if (!response.ok) {
			if (response.status === 401) {
				// auto logout if 401 response returned from api
				logout();
				// location.reload(true);
			}
			const error = (data && data.message) || response.statusText;
			return Promise.reject(error);
		}

		return data;
	});
}