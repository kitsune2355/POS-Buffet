import * as Reducer from "./reducers";
import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import { appSaga } from "./saga";
import { IStoreState } from "../interface/redux";
import { AnyAction } from "redux";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore<IStoreState, AnyAction>({
  reducer: {
    category: Reducer.categoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(appSaga);
