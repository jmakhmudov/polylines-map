import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Geometry {
    [x: string]: any;
    geometry: string;
    decoded: [[number, number]]
}

const initialState: Geometry = {
    geometry: '',
    decoded: [[0, 0]]
};

export const counterSlice = createSlice({
    name: 'geometry',
    initialState,
    reducers: {
        setGeometry: (state, action: PayloadAction<Geometry>) => {
            const { geometry } = action.payload.routes[0];
            state.geometry = geometry
        },
        setDecoded: (state, action) => {
            const { decoded } = action.payload;
            state.decoded = decoded;
        },
        getState: (state, _action: PayloadAction<{ coordinates: number[][] }>) => {
            return state;
        },
    },
});

export const { setGeometry, getState, setDecoded } = counterSlice.actions;
export default counterSlice.reducer;