import { takeLatest } from "redux-saga/effects";
import { handleGetGeometry } from "./handlers/geometry";
import { getGeometry } from "../redux/geometryReducer";

export function* watcherSaga () {
    yield takeLatest("geometry/getGeometry", handleGetGeometry)
}