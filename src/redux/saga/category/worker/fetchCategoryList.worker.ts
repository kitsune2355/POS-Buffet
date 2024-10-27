import { call, put } from "redux-saga/effects";
import { FETCH_CATEGORY_LIST_SUCCESS } from "../../../action/category.action";
import { ICategory } from "../../../../interface/entities";
import { IPayloadAction } from "../../../../interface/redux";
import { categoryService } from "../../../../service/category.service";

export function* fetchCategoryListWorker({
  resolve,
  reject,
}: IPayloadAction<Pick<ICategory, "id">>) {
  try {
    const category: ICategory[] = yield call(categoryService.getList);
    yield put(FETCH_CATEGORY_LIST_SUCCESS(category));
    resolve(category);
  } catch (e) {
    reject(e);
  }
}
