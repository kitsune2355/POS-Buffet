import { useCallback } from "react";
import { useDispatch as reduxDispatch } from "react-redux";
import { AnyAction } from "redux";

export const useDispatch = <T extends AnyAction = AnyAction>() => {
  const dispatch = reduxDispatch();

  return useCallback(
    (action: T) => {
      return new Promise((resolve, reject) =>
        dispatch<T>({ ...action, resolve, reject })
      );
    },
    [dispatch]
  );
};
