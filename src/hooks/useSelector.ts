import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from 'drinksandco/src/redux/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
