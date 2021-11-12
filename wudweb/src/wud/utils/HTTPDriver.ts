import internal from "stream";

const axios = require("axios");

class HTTPDriver {
    url: string;
    port: number;

    constructor(url: string, port: number){
        this.url = url;
        this.port = port;
    }

    static post(url: string, port: number, body: Object, headers: Object){
        return axios.post(`${url}:${port}`, body, {headers});
    }
}

export {HTTPDriver};