
export default function getFormattedDate(date: string): string {
  return new Intl.DateTimeFormat('en-US').format(new Date(date));
};
