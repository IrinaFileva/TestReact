import { RootState } from 'app/provider/store';
import { useSelector } from 'react-redux';

export const useAppSelector = useSelector.withTypes<RootState>();
