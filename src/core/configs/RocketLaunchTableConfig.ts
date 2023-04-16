import * as CSS from 'csstype';

enum TableHeading {
  MISSION_NAME = 'Mission Name',
  LAUNCH_SITE = 'Launch Site',
  ROCKET_NAME = 'Rocket Name',
  LAUNCH_DATE = 'Launch Date',
  EMPTY = '',
}

interface ITableHeadings {
  title: TableHeading;
  position: CSS.Property.TextAlign;
}

const TABLE_HEADINGS: ITableHeadings[] = [
  { title: TableHeading.MISSION_NAME, position: 'start' },
  { title: TableHeading.LAUNCH_SITE, position: 'center' },
  { title: TableHeading.ROCKET_NAME, position: 'center' },
  { title: TableHeading.LAUNCH_DATE, position: 'center' },
  { title: TableHeading.EMPTY, position: 'end' },
];

export { TABLE_HEADINGS };
