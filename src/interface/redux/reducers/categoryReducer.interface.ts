import { ICategory } from "../../entities";

export interface ICategoryState {
    lists: ICategory[]
    isLoading: boolean
}