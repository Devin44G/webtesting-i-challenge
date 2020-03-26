const enhancer = require('./enhancer.js');
// test away!

const Item = {
  name: 'Bronze Helm',
  durability: 65,
  enhancement: 10
};

// REPAIR TESTS
describe('Enhancer', () => {
  describe('repair() method', () => {
    it('should take in an object to repair, and output an object with a durability of 100', function() {
      let ArmorPiece = enhancer.repair(Item);

      //expect(ArmorPiece.durability).toBe(65); // <-- Expect to fail
      expect(ArmorPiece.durability).toBe(100);
    });
  });
// SUCCESS TESTS
  describe('succeed() method', () => {
    it('should return a new item object with the enhancement increased by 1', () => {
      let EnhancedArmor = enhancer.succeed(Item);

      //expect(EnhancedArmor.enhancement).toBe(10); // <-- Expect to fail
      expect(EnhancedArmor.enhancement).toBe(11);
    });
    it('should return the object with the enhancment unchanged', () => {
      newItem = Item;
      newItem.enhancement = 20;

      let UnenhancedArmor = enhancer.succeed(newItem);

      //expect(UnenhancedArmor.enhancment).toBe(21); // <-- Expect to fail
      expect(UnenhancedArmor.enhancement).toBe(20);
    });
  });

});
