import { useCallback } from "react";
import { useDispatch } from "../redux/useDispatch";
import { useSelector } from "../redux/useSelector";
import { FETCH_CATEGORY_LIST } from "../../redux/action/category.action";

export const useCategory = () => {
  const dispatch = useDispatch();
  const { lists: categoryList,isLoading } = useSelector((state) => state.category);

  const onFetchCategoryList = useCallback(() => {
    return dispatch(FETCH_CATEGORY_LIST());
  }, [dispatch]);

  return {
    categoryList,
    isLoading,
    onFetchCategoryList,
  };
};
