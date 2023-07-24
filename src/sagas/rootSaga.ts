import { takeLatest } from "redux-saga/effects";
import { handleGetGeometry } from "./handlers/geometry";

export function* watcherSaga () {
    yield takeLatest("geometry/getState", handleGetGeometry)
}