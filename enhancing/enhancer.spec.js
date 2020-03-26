const enhancer = require('./enhancer.js');
// test away!

const Item = {
  name: 'Bronze Helm',
  durability: 65,
  enhancement: 20
};

// REPAIR TESTS
describe('Enhancer', function() {
  describe('repair() method', function() {
    it('Should take in an object to repair, and output an object with a durability of 100', function() {
      let ArmorPiece = enhancer.repair(Item);

      //expect(ArmorPiece.durability).toBe(65); // <-- Expect to fail
      expect(ArmorPiece.durability).toBe(100);
    });
  });
});
