import { takeLatest } from "redux-saga/effects";
import { handleGetGeometry } from "./handlers/geometry";
import { getState } from "../redux/geometryReducer";

export function* watcherSaga () {
    yield takeLatest("geometry/getState", handleGetGeometry)
}