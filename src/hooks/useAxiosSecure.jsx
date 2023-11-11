import axios from "axios";
import { useEffect, useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const axiosSecure = axios.create({
    baseURL: " http://localhost:5000",
    withCredentials: true
})

const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext)
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log('error tracked in the interceptors', error.response.status);
            if (error.response.status === 401 || error.response.status === 403) {
                console.log('logout in the interceptor');
                logOut()
                    .then(() => { })
                    .catch(error => {
                        console.error(error);
                    })
            }
        })
    }, [])

    return axiosSecure;
};

export default useAxiosSecure;