import axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': '4daa4f3c-2eae-4303-8a73-15b06056d485',
	},
});

export const usersAPI = {
	async getUsers(currentPage = 1, pageSize = 10) {
		return await instance
			.get(`users?page=${currentPage}&${pageSize}`)
			.then((response) => {
				return response.data;
			});
	},
	async getAuth() {
		return await instance.get(`auth/me`).then((response) => {
			return response.data;
		});
	},
	async getUnfollow(userId) {
		return await instance.delete(`follow/${userId}`).then((response) => {
			return response.data;
		});
	},
	async getFollow(userId) {
		return await instance.post(`follow/${userId}`).then((response) => {
			return response.data;
		});
	},
};
