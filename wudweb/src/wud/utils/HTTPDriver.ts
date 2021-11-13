import axios, {AxiosResponse, AxiosRequestHeaders} from "axios";
class RequestArgument {
    key: string;
    value: any;

    constructor(key: string, value: any) {
        this.key = key;
        this.value = value!;
    }

    public toString(){
        if (typeof this.value == "string") {
            this.value.replace(' ', '+');
        }

        return `${this.key}=${this.value}`;
    }
    
    public static toObject(args: Array<RequestArgument>) : Object {
        let argsObj: { [key: string] : any } = {};

        args.forEach((arg) => {
            argsObj[arg.key] = arg.value;
        });

        return argsObj;
    }
}
class HTTPDriver {
    url: string;
    port: number;

    constructor(url: string, port: number) {
        this.url = url;
        this.port = port;
    }

    public post(path: string, body: Array<RequestArgument>, headers: AxiosRequestHeaders = {}): Promise<AxiosResponse> {
        return axios.post(`http://${this.url}:${this.port}/${path}`, RequestArgument.toObject(body), {headers});
    }

    public get(path: string, args: Array<RequestArgument>, headers: AxiosRequestHeaders = {}): Promise<AxiosResponse> {
        let argsString = this.parseArguments(args);
        return axios.get(`http://${this.url}:${this.port}/${path}?${argsString}`, headers);
    }

    private parseArguments(args: Array<RequestArgument>) : string {
        let argsString: string = '';
        args.forEach((arg : RequestArgument, idx : number) => {
            argsString += arg.toString();
            if (idx < ( args.length - 1)) {
                argsString += '&';
            }
        });

        console.log(argsString);
        return argsString;
    }
}

export {HTTPDriver, RequestArgument};