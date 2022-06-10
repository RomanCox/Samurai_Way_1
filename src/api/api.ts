import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '06f51144-bbb3-482a-8cdf-1e7bdaee953d'},
});

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    followUser(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            });
    },
    unFollowUser(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            });
        },
};

export const profileAPI = {
    getUserProfile(id: number) {
        return instance.get(`profile/${id}`)
            .then(response => {
                return response.data
            });
    },
    getProfilePhoto(id: number) {
        return instance.get(`profile/${id}`).then(response => {
            return response.data
        });
    },
    getStatus(id: number) {
        return instance.get(`profile/status/${id}`).then(response => {
            return response.data
        });
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, { status: status }).then(response => {
            return response.data
        });
    },
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(response => {
            return response.data
        });
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post(`auth/login`, {email, password, rememberMe}).then(response =>{
            return response.data
        });
    },
    logout() {
        return instance.delete(`auth/login`).then(response =>{
            return response.data
        });
    }
}