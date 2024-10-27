import { all } from "redux-saga/effects";
import { categoryWatcher } from "./category/category.watcher";

export function* appSaga() {
  yield all([categoryWatcher()]);
}
