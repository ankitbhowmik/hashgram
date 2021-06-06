const host = process.env.REACT_APP_HOST_URL;

const url = {
	signup: `${host}/user/signup`,
	login: `${host}/user/login`,
	logout: `${host}/user/logout`,
	verifyToken: `${host}/user/verify-token`,
	searchUser: `${host}/user/search-user/`,

	uploadProfileImage: `${host}/api/profile/upload-profile-image`,
	getProfileData: `${host}/api/profile/get-profile-data`,

	editProfile: `${host}/api/profile/edit-profile`,
	uploadPost: `${host}/api/post/upload`,
	getPost: `${host}/api/post/get-user-posts`,
	getHomePost: `${host}/api/post/get-home-posts`,
	changeLike: `${host}/api/post/change-like`,
	addComment: `${host}/api/post/add-comment`,

	createChat: `${host}/api/chat/create`,
	getChats: `${host}/api/chat/get-chats`,
	getMessages: `${host}/api/chat/get-messages`,
	sendMessage: `${host}/api/chat/send-message`,

}

export default url;