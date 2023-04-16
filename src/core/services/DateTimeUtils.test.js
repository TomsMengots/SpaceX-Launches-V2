import { dateToHumanReadable } from 'src/core/services/DateTimeUtils';

describe('DateTimeUtils', () => {
  describe('dateToHumanReadable', () => {
    test.each([
      [null, '—'],
      [undefined, '—'],
      ['', '—'],
      ['Sun Mar 12 2022 11:32:03 GMT+0300', '12 Mar 2022'],
    ])('when dateString is - %s, return value is %s', (dateString, expected) => {
      expect(dateToHumanReadable(dateString)).toBe(expected);
    });
  });
});
