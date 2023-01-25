import axios from "axios";
import { createInstalikeApi } from "@jmetterrothan/instalike";

const instalikeApi = createInstalikeApi(
    axios.create({
        baseURL: import.meta.env.VITE_API_ENDPOINT,
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            Accept: "application/json",
        },
    })
);

export default instalikeApi;
