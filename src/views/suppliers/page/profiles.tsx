import { useFetchData } from 'hoc/useFetchData';

export const Profiles = () => {
    const { data } = useFetchData('/suppliers');
    console.log(data);

    return 'hello world';
};
