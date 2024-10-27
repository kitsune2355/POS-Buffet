import { apiClient } from "../apiClient";
import { ICategory } from "../interface/entities";
import { ICategoryService } from "../interface/service";

export const categoryService: ICategoryService = {
  getList: function (): Promise<ICategory[]> {
    return apiClient
      .get("/getList-category")
      .then((res) => res.data.categories);
  },
};
