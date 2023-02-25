import axios from 'axios';

const axiosInstance = axios.create();
axiosInstance.defaults.baseURL = 'http://localhost:5000/api'


axiosInstance.interceptors.response.use(
    response => {
        // console.log("++++++++++++++++++++++", JSON.stringify(response, null, 2))
        return response.data;
    },
    error => {
        // console.log('__________________', JSON.stringify(error?.response, null, 2))

        return Promise.reject(String(error?.response?.data))
    })


export default axiosInstance;