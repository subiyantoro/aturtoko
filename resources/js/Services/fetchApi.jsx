import { METHODS } from '@/utils/methods';
import axios from 'axios';
import { convertPayloadIntoParam } from './utils';

const fetchApi = async (
    endpoint,
    method,
    payload,
    options = {},
) => {
    let data = null;
    let resCode = null;
    let configFetch = {
        method,
    };

    if (method === METHODS.GET) {
        Object.assign(configFetch, {
            url: convertPayloadIntoParam(endpoint, payload),
        });
    } else {
        Object.assign(configFetch, {
            url: endpoint,
            data: payload,
            headers: options,
        });
    }

    const response = await axios(configFetch);

    console.log(response);

    return {
        data,
        resCode,
    };
};

export default fetchApi;
