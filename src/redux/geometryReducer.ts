import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Geometry {
    [x: string]: any;
    geometry: string
}

const initialState: Geometry = {
    geometry: ''
};

export const counterSlice = createSlice({
    name: 'geometry',
    initialState,
    reducers: {
        setGeometry: (state, action: PayloadAction<Geometry>) => {
            const { geometry } = action.payload.routes[0];
            state.geometry = geometry
        },
        getGeometry: (state) => {
            return state;
        },
        resetState: (state) => {
            return initialState;
        },
    },
});

export const { setGeometry, getGeometry, resetState } = counterSlice.actions;
export default counterSlice.reducer;