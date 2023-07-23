import { call, put } from 'redux-saga/effects';
import { requestGetGeometry } from '../requests/geometry';
import { setGeometry } from '../../redux/geometryReducer';
import { PayloadAction } from '@reduxjs/toolkit';

interface Coordinates {
    0: number;
    1: number;
}

interface CoordinatesProps {
    coordinates: Coordinates[]
}

export function* handleGetGeometry(action: PayloadAction<CoordinatesProps>): any {
    try {
        const { coordinates } = action.payload;

        const start = `${coordinates[0][0]},${coordinates[0][1]}`;
        const end = `${coordinates[2][0]},${coordinates[2][1]}`;
        const waypoints = coordinates.slice(1, -1).map(coord => `${coord[0]},${coord[1]}`).join(';');

        const url = `https://router.project-osrm.org/route/v1/driving/${start};${waypoints};${end}?overview=full&geometries=polyline`

        const response = yield call(requestGetGeometry, url);
        const { data } = response;
        yield put(setGeometry(data));
    } catch (error) {
        console.log(error);
    }
}