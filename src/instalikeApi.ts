import axios from "axios";
import { createInstalikeApi } from "@jmetterrothan/instalike";

export const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN'

// import type {RootState} from "./redux/store";


const instalikeApi = createInstalikeApi(
    axios.create({
        baseURL: import.meta.env.VITE_API_ENDPOINT,
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            Accept: "application/json",
        },
    })
);


export const hasAccessToken = () => window.localStorage.getItem(ACCESS_TOKEN_KEY)!=null
export default instalikeApi;
