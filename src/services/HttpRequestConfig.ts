import axios from 'axios';

const safrat = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASEURL_API,
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const Http = {
    get: safrat.get,
    post: safrat.post,
    delete: safrat.delete,
    put: safrat.put,
};
