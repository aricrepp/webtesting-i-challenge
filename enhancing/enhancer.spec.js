const { successS, failF, repair, get } = require('./enhancer.js');
// test away!
describe('enhancements repair,success,fail', () => {
  describe('repair', () => {
    it('item to 100 durability', () => {
      const item = { name: 'armor', durability: 60 };
      expect(repair(item)).toEqual({ name: 'armor', durability: 100 });
    });
  });

  describe('success', () => {
    it('increases enhancement by 1', () => {
      const item = { name: 'armor', durability: 60, enhancement: 1 };
      const success = { name: 'armor', durability: 60, enhancement: 2 };
      expect(successS(item)).toEqual(success);
    });

    it('should not enhancement by 1', () => {
      const item = { name: 'armor', durability: 60, enhancement: 20 };
      const success = { name: 'armor', durability: 60, enhancement: 20 };
      expect(successS(item)).toEqual(success);
    });
  });

  describe('fail', () => {
    it('durability decrease by 5 because enhancement less than 15', () => {
      const item = { name: 'armor', durability: 60, enhancement: 14 };
      const fail = { name: 'armor', durability: 55, enhancement: 14 };
      expect(failF(item)).toEqual(fail);
    });

    it('durability decrease by 10 because enhancement 15 or greater', () => {
      const item = { name: 'armor', durability: 60, enhancement: 15 };
      const fail = { name: 'armor', durability: 50, enhancement: 15 };
      expect(failF(item)).toEqual(fail);
    });

    it('durability descrease by 10 and enhancement by 1 because enhancement greater than 16', () => {
      const item = { name: 'armor', durability: 60, enhancement: 17 };
      const fail = { name: 'armor', durability: 50, enhancement: 16 };
      expect(failF(item)).toEqual(fail);
    });
  });

  describe('get', () => {
    it('no enhancement, no name change', () => {
      const item = { name: 'armor', durability: 60, enhancement: 0 };
      const getItem = { name: 'armor', durability: 60, enhancement: 0 };
      console.log(getItem);
      expect(get(item)).toEqual(getItem);
    });

    it('enhancement, name change', () => {
      const item = { name: 'armor', durability: 60, enhancement: 5 };
      const getItem = { name: '[+5]armor', durability: 60, enhancement: 5 };
      console.log(getItem);
      expect(get(item)).toEqual(getItem);
    });
  });
});
