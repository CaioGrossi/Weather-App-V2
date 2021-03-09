function formatDate(dateString: string) {
  const daysOfWeek = ['Mon', 'Tue', 'Wed ', 'Thu', 'Fri', 'Sat', 'Sun'];

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];

  const date = new Date(dateString);

  const dayMonth = date.getDate();
  const dayOfWeek = daysOfWeek[date.getDay()];
  const month = months[date.getMonth()];

  return `${dayOfWeek}, ${dayMonth} ${month}`;
}

export default formatDate;
