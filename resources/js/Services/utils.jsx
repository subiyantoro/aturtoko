export const convertPayloadIntoParam = (endpoint, payload) => {
    const params = Object.keys(payload).map(x => {
        return encodeURIComponent(x) + '=' + encodeURIComponent(payload[x])
    }).join('&');

    return `${endpoint}?${payload}`;
};
