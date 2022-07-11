import { formatDistance } from 'date-fns';
import format from 'date-fns/format';

interface Props {
    createdAt: Date | number,
}

export const getDistance = ({ createdAt }: Props): string => {
    const timeDistance = formatDistance(new Date(createdAt), new Date(), { addSuffix: true });
    return timeDistance;
};

export const getDateInMonth = ({ createdAt }: Props): string => {
    const date = format(new Date(createdAt), 'MMMMRRRR');
    return date;
};
