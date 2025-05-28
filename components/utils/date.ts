

export const getDayDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };
  return date.toLocaleDateString('en-US', options);
}

export const getDayDateByName = (date: Date, dayName: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };
  const dayDate = new Date(date);
  // Adjust the date to the specified day of the week
  while (dayDate.toLocaleDateString('en-US', { weekday: 'long' }) !== dayName) {
    dayDate.setDate(dayDate.getDate() + 1);
  }
  return dayDate.toLocaleDateString('en-US', options);
}