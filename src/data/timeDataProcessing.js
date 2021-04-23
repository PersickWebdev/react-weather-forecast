import { setDayPart } from '../redux/Time/timeActionCreators';

export const useTime = () => {

    const defineTime = () => {
        return new Date().toLocaleString('en-US', { hour: 'numeric', hour12: true });
    };

    const defineDayPart = (time) => {
        const hour = Number(time.split(' ')[0].trim());
        const ampm = time.split(' ')[1].trim();
        let period;

        if (ampm === 'AM') {
            if (hour === 12) {
                period = 'isNight';
            } else if ((hour >= 1) && (hour <= 6)) {
                period = 'isNight';
            } else {
                period = 'isDay';
            }
        }

        if (ampm === 'PM') {
            if (hour === 12) {
                period = 'isDay';
            } else if ((hour >= 1) && (hour <= 6)) {
                period = 'isDay';
            } else {
                period = 'isNight';
            }
        }

        return period
    };

    const setCurrentDayPart = (dispatch) => {
        dispatch(setDayPart(defineDayPart(defineTime())));
    };

    const getTimeFromTimestamp = (timestamp) => {
        const test = new Date(timestamp * 1000)
            .toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
            });
        const [ hours, minutes ] = test.split(' ')[0].split(':');
        const ampm = test.split(' ')[1].trim();
        return `${hours}:${minutes} ${ampm}`
    }

    return { defineTime, defineDayPart, setCurrentDayPart, getTimeFromTimestamp }

};