enum TableHeading {
  MISSION_NAME = 'Mission Name',
  LAUNCH_SITE = 'Launch Site',
  ROCKET_NAME = 'Rocket Name',
  LAUNCH_DATE = 'Launch Date',
  EMPTY = '',
}

const TABLE_HEADINGS = [
  { title: TableHeading.MISSION_NAME, position: 'start' as const },
  { title: TableHeading.LAUNCH_SITE, position: 'center' as const },
  { title: TableHeading.ROCKET_NAME, position: 'center' as const },
  { title: TableHeading.LAUNCH_DATE, position: 'center' as const },
  { title: TableHeading.EMPTY, position: 'end' as const },
];

export { TABLE_HEADINGS };
