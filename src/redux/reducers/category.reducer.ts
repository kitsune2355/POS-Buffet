import { createReducer } from '@reduxjs/toolkit'
import { FETCH_CATEGORY_LIST_SUCCESS } from '../action/category.action'
import { ICategoryState } from '../../interface/redux/reducers/categoryReducer.interface'

const initialState: ICategoryState = {
  lists: [],
}
export const categoryReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(FETCH_CATEGORY_LIST_SUCCESS, (state, { payload }) => {
      state.lists = payload
    })
)