import axios from 'axios';

export function requestGetGeometry(url: string) {
    return axios.request({
        method: 'get',
        url: url
    });
}