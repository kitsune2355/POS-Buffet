/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction as ReduxPayloadAction } from '@reduxjs/toolkit'
import {
  ICategoryState
} from './reducers'

export interface IStoreState {
  category: ICategoryState
}

export interface IPayloadAction<T> extends ReduxPayloadAction<T> {
  resolve(cd?: any): void
  reject(err?: unknown): void
}