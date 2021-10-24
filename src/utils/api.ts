import axios, { AxiosRequestConfig } from 'axios'

export type ErrorsTypes = {
    [field: string]: Array<string> | Array<{ [index: number]: Array<string> }>
}



export type ResponseType = {
    code: number
    success: boolean
    data?: any
    errors?: ErrorsTypes
}


const config: AxiosRequestConfig = {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    baseURL: 'https://codeforces.com/api/'
}

const instance = axios.create(config)

export default instance