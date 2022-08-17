// https://stackoverflow.com/questions/58918457/react-displaying-relative-time-with-javascript
export function timestampToRelative(timestamp: number) {
    const timeDifference = Date.now() - timestamp;
    const minute = 60 * 1000;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;
    const year = day * 365;
    switch (true) {
        case timeDifference < minute:
            const seconds = Math.round(timeDifference / 1000);
            return `${seconds} ${seconds > 1 ? 'seconds' : 'second'} ago`
        case timeDifference < hour:
            return Math.round(timeDifference / minute) + ' minutes ago';
        case timeDifference < day:
            return Math.round(timeDifference / hour) + ' hours ago';
        case timeDifference < month:
            return Math.round(timeDifference / day) + ' days ago';
        case timeDifference < year:
            return Math.round(timeDifference / month) + ' months ago';
        case timeDifference > year:
            return Math.round(timeDifference / year) + ' years ago';
        default:
            return "";
    }
};