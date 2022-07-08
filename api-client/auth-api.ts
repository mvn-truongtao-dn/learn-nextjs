import axios from "axios"
import { LoginPayload } from "@/model/index"
import axiosClient from "./axios-client"

export const authApi = {
    login(payload: LoginPayload) {
        return axiosClient.post('/login', payload);
    },
    logout() {
        return axiosClient.post('/logout')
    },
    getProfile() {
        return axiosClient.get('/profile')
    }

}