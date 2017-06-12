import {capitalize, trimDate, sortList} from './userListPageHelpers';

describe("userListPageHelpers", () => {
  describe("capitalize", () => {
    it("should capitalize the first letter of its string argument", () => {
      const name = "farook";
      const expected = "Farook";
      const actual = capitalize(name);
        expect(actual).toEqual(expected);
    });
  });

  describe("trimDate", () => {
    it("should remove the time and return only date", () => {
      const dateTime = "1982-01-09 08:53:09";
      const expected = "1982-01-09";
      const actual = trimDate(dateTime);
        expect(actual).toEqual(expected);
    });
  });
});

describe("sortList", () => {
  it('should sort list by specified value', () => {
    const list = [
      {firstName: "foo", lastName: "bar"},
      {firstName: "baz", lastName: "dol"}
    ];

    const expected = [
      {firstName: "baz", lastName: "dol"},
      {firstName: "foo", lastName: "bar"}
    ];
    
    const actual = sortList(list, "first");
      expect(actual).toEqual(expected);
  });
});
