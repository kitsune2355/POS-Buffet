import { ICategory } from "../entities/category";

export interface ICategoryService {
    getList(): Promise<ICategory[]>
  }