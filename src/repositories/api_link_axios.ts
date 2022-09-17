import axios from 'axios'

import dotenv from 'dotenv';
dotenv.config();

export class ApiLinkAxios {
    public axios: any

    constructor(){
        const token = Buffer.from(`${process.env.API_LINK_USER}:${process.env.API_LINK_PASSWORD}`, 'utf8').toString('base64');
        
        this.axios = axios.create({
            baseURL: process.env.API_LINK_URL,
            headers: {
                'Authorization': `Basic ${token}`
            }
        });
    }
}