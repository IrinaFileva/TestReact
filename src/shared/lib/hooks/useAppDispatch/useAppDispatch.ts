import { AppDispatch } from 'app/provider/store';
import { useDispatch } from 'react-redux';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
