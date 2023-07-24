import { createSlice } from '@reduxjs/toolkit';

interface Markers {
    point1: string;
    point2: string;
    point3: string;
}

const initialState: Markers = {
    point1: '',
    point2: '',
    point3: '',
};

export const counterSlice = createSlice({
    name: 'markers',
    initialState,
    reducers: {
        setMarkers: (state, action) => {
            const { point1, point2, point3 } = action.payload;
            state.point1 = point1;
            state.point2 = point2;
            state.point3 = point3;
        },
        getState: (state) => {
            return state;
        },
    },
});

export const { setMarkers, getState } = counterSlice.actions;
export default counterSlice.reducer;