import { formatDistance } from 'date-fns';

interface Props {
    createdAt: Date | number,
}

export const distance = ({ createdAt }: Props): string => {
    const format = formatDistance(new Date(createdAt), new Date(), { addSuffix: true });
    return format;
};