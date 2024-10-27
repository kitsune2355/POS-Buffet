import { all, takeEvery } from 'redux-saga/effects'
import { FETCH_CATEGORY_LIST } from '../../action/category.action'
import { fetchCategoryListWorker } from './worker'

export function* categoryWatcher() {
  yield all([
    takeEvery(FETCH_CATEGORY_LIST.type, fetchCategoryListWorker),
  ])
}