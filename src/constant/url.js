const host = process.env.REACT_APP_HOST_URL;

const url = {
	signup: `${host}/user/signup`,
	login: `${host}/user/login`,
	logout: `${host}/user/logout`,
	verifyToken: `${host}/user/verify-token`,
	searchUser: `${host}/user/search-user/`,

	uploadProfileImage: `${host}/profile/upload-profile-image`,
	getProfileData: `${host}/profile/get-profile-data`,

	editProfile: `${host}/profile/edit-profile`,
	uploadPost: `${host}/post/upload`,
	getPost: `${host}/post/get-user-posts`,
	getHomePost: `${host}/post/get-home-posts`,
	changeLike: `${host}/post/change-like`,
	addComment: `${host}/post/add-comment`,
}

export default url;