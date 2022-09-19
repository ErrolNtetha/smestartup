import { RootState } from 'store';
import { useSelector } from 'react-redux';

export const useStore = () => {
    const store = useSelector((state: RootState) => state);
    return store;
};
