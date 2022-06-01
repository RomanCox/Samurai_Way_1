import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '06f51144-bbb3-482a-8cdf-1e7bdaee953d'},
});

export const usersAPI = {
    getUsers (currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    followUser (id: number) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            });
    },
    unFollowUser (id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            });
        },
};

export const profileAPI = {
    getUserProfile (id: number) {
        return instance.get(`profile/${id}`)
            .then(response => {
                return response.data
            });
    },
    getProfilePhoto (id: number) {
        return instance.get(`profile/${id}`).then(response => {
            return response.data
        })
    }
};

export const authAPI = {
    me () {
        return instance.get(`auth/me`).then(response => {
            return response.data
        })
    },
}