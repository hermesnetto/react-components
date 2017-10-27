export const getTimeDiff = (init: Date, end: Date): number => {
  return Math.abs(Math.abs(init.getTime() - end.getTime()));
};

export const daysBetweenDates = (init: Date, end: Date): number => {
  const timeDiff = getTimeDiff(init, end);
  return Math.ceil(timeDiff / (1000 * 3600 * 24));
};

export const minutesBetweenDates = (init: Date, end: Date): number => {
  const timeDiff = getTimeDiff(init, end);
  return Math.floor((timeDiff / 1000) / 60);
};
