import { createAction } from '@reduxjs/toolkit'
import { ICategory } from '../../interface/entities'

const ACTION_NAME = 'CATEGORY'

export const FETCH_CATEGORY_LIST = createAction(`${ACTION_NAME}/FETCH_CATEGORY_LIST`)
export const FETCH_CATEGORY_LIST_SUCCESS = createAction<ICategory[]>(
  `${ACTION_NAME}/FETCH_CATEGORY_LIST_SUCCESS`,
)