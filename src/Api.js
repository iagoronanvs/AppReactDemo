import axios from 'axios';
import * as Constants from '../src/util/Constants';

export const request = axios.create({
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
    },
});