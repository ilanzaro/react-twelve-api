import { takeLatest } from "redux-saga/effects";
import { handleGetUser } from "./handlers/user";
import { getUser } from "../ducks/user";

export function* watcherSaga() {
    console.log("watch saga getUser -> handleGetUser")
  yield takeLatest(getUser, handleGetUser);
}
