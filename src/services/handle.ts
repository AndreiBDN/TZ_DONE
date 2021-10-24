import { Endpoints } from '../constants'
import { HandleType } from '../types/types'
import api from '../utils/api'

type HandleResponse = {
        status: 'OK' | any
        result: Array<HandleType>

}

export default class HandleService {
    static async getHandle(handle: string, count: number, from?: number): Promise<Array<HandleType>> {
        const start = from || 1
        const response = await api.get<HandleResponse>(`${Endpoints.GET_HANDLE}?handle=${handle}&from=${start}&count=${count}`)
        return response.data.result
    }
}