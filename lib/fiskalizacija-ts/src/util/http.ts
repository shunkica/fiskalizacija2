import {Agent, RequestOptions, request} from "node:https";
import {IncomingMessage} from "http";
import {FiskalizacijaOptions} from "../types";

const defaultOptions: Partial<FiskalizacijaOptions> = {
    timeout: 30000,
    allowSelfSigned: false
}

export function postRequest(data: string, userOptions: FiskalizacijaOptions): Promise<{ statusCode: number, data: string }> {
    return new Promise((resolve, reject) => {
        const options = {...defaultOptions, ...userOptions};
        const url = new URL(options.service);
        const postData = Buffer.from(data, 'utf8');

        const requestOptions: RequestOptions = {
            hostname: url.hostname,
            port: url.port || (url.protocol === 'https:' ? 443 : 80),
            path: url.pathname + url.search,
            method: 'POST',
            headers: {
                ...options.headers,
                'Content-Length': postData.length
            },
            timeout: options.timeout,
            agent: new Agent({rejectUnauthorized: !options.allowSelfSigned})
        };

        const req = request(requestOptions, (res: IncomingMessage) => {
            let data = '';

            res.setEncoding('utf8');
            res.on('data', (chunk: string) => {
                data += chunk;
            });

            res.on('end', () => {
                if (typeof res.statusCode !== 'number') {
                    reject("Invalid response status code received");
                    return;
                }
                resolve({statusCode: res.statusCode, data: data});
            });
        });

        req.on('error', (err: Error) => {
            reject(new Error(`Request failed: ${err.message}`));
        });

        req.on('timeout', () => {
            req.destroy();
            reject(new Error(`Request timeout after ${options.timeout}ms`));
        });

        req.write(postData);
        req.end();
    });
}
