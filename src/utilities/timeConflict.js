export const convertTime = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
};

export const parseMeetingTime = (meetingTime) => {
    const [days, time] = meetingTime.split(' ');
    const [start, end] = time.split('-').map(convertTime);
    return { days, start, end };
};

export const isTimeConflict = (start1, end1, start2, end2) => {
    return start1 < end2 && start2 < end1;
};

export const isDayConflict = (days1, days2) => {
    const adjustedDays1 = days1.replace(/Th/g, "@");
    const adjustedDays2 = days2.replace(/Th/g, "@");
    return [...adjustedDays1].some(day => adjustedDays2.includes(day));
};

export const isConflict = (course1, course2) => {

    const { days: days1, start: start1, end: end1 } = parseMeetingTime(course1.meets);
    const { days: days2, start: start2, end: end2 } = parseMeetingTime(course2.meets);

    return isDayConflict(days1, days2) && isTimeConflict(start1, end1, start2, end2);
};