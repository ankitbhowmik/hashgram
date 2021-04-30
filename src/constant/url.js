const host = process.env.REACT_APP_HOST_URL;

const url = {
	signup : `${host}/user/signup`,	//post
	login : `${host}/user/login`,	//post
	logout : `${host}/user/logout`, //post
	verifyToken : `${host}/user/verify-token`, 		//post
}

export default url;