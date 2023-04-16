enum TableHeading {
  MISSION_NAME = 'Mission Name',
  LAUNCH_SITE = 'Launch Site',
  ROCKET_NAME = 'Rocket Name',
  LAUNCH_DATE = 'Launch Date',
  EMPTY = '',
}

enum Position {
  start = 'start',
  center = 'center',
  end = 'end',
}

interface ITableHeadings {
  title: TableHeading;
  position: keyof typeof Position;
}

const TABLE_HEADINGS: ITableHeadings[] = [
  { title: TableHeading.MISSION_NAME, position: Position.start },
  { title: TableHeading.LAUNCH_SITE, position: Position.center },
  { title: TableHeading.ROCKET_NAME, position: Position.center },
  { title: TableHeading.LAUNCH_DATE, position: Position.center },
  { title: TableHeading.EMPTY, position: Position.end },
];

export { TABLE_HEADINGS };
