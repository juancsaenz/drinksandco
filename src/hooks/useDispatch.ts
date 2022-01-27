import { useDispatch } from 'react-redux';
import { AppDispatch } from 'drinksandco/src/redux/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
