import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export const timeAgo = (dateSeconds: number = 0) => dayjs(new Date(1000 * dateSeconds)).fromNow()