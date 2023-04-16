enum DateTimeFormatOption {
  NUMERIC = 'numeric',
  SHORT = 'short',
  LONG = 'long',
}

const dateToHumanReadable = (dateString: string) => {
  if (!dateString) {
    return '—';
  }

  return new Intl.DateTimeFormat('en-GB', {
    day: DateTimeFormatOption.NUMERIC,
    month: DateTimeFormatOption.SHORT,
    year: DateTimeFormatOption.NUMERIC,
  }).format(new Date(dateString));
};

export { dateToHumanReadable };
