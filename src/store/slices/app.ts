import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import HandleService from '../../services/handle'
import { HandleType } from '../../types/types'
import { RootState } from '../store'

export const initialState = {
    handles: [] as Array<HandleType>[]
}

export const getHandles = createAsyncThunk('app/getHandles',
    async (data: {
        name: string,
        count: number
    }) => {
        const response: Array<HandleType> = await HandleService.getHandle(data.name, data.count)
        return response
    }
)

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getHandles.fulfilled, (state, action: PayloadAction<Array<HandleType>>) => {
            if (state.handles.length !== 0) {
                let i: number = 0
                const find = state.handles.find((h, index) => {
                    i = index
                    return h[0].author.members[0].handle === action.payload[0].author.members[0].handle
                })
                if (!find) {
                    state.handles = [...state.handles, action.payload]
                } else {
                    const arrBefore =
                        state.handles && i < state.handles.length
                            ? state.handles.slice(0, i)
                            : []

                    const arrAfter =
                        state.handles && i < state.handles.length
                            ? state.handles?.slice(i + 1)
                            : []

                    state.handles = [...arrBefore, action.payload, ...arrAfter]
                    return
                }
            } else {
                state.handles = [...state.handles, action.payload]
            }

        })
    }
})

export const selectHandles = ((state: RootState) => state.app.handles)


export default appSlice.reducer
