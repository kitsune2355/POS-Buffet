import { TypedUseSelectorHook, useSelector as ReduxSelector } from 'react-redux'
import { IStoreState } from '../../interface/redux'

export const useSelector: TypedUseSelectorHook<IStoreState> = ReduxSelector