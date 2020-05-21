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
      let newItem = Item;
      newItem.enhancement = 20;

      let UnenhancedArmor = enhancer.succeed(newItem);

      //expect(UnenhancedArmor.enhancment).toBe(21); // <-- Expect to fail
      expect(UnenhancedArmor.enhancement).toBe(20);
    });
  });
// FAIL TESTS
  describe('fail() method', () => {
    it('should decrease item durabiltiy by 5 if enhancement is less than 15', () => {
      let newItem = Item;
      newItem.enhancement = 14;

      let FailedArmor = enhancer.fail(newItem);

      expect(FailedArmor.durability).toBe(60);
      console.log(newItem);
    });
    it('should decrease item durability by 10 if enhancement is greater than or equal to 15', () => {
      let newItem = Item;
      newItem.enhancement = 15;

      let FailedArmor = enhancer.fail(newItem);

      //expect(FailedArmor.durability).toBe(65); // <-- Expect to fail
      expect(FailedArmor.durability).toBe(55);
      console.log(newItem);
    });
    it('should decrease item enhancement by 1 if enhancement is greater than 16', () => {
      let newItem = Item;
      newItem.enhancement = 18;

      let FailedArmor = enhancer.fail(newItem);

      //expect(FailedArmor.durability).toBe(65); // <-- Expect to fail
      //expect(FailedArmor.durability).toBe(18); // <-- Expect to fail
      expect(FailedArmor.enhancement).toBe(17);
      expect(FailedArmor.durability).toBe(55);
      console.log(FailedArmor);
    });
  });
});

describe("get function tests", function() {

    it("item enhancement at 0", function() {
        object.enhancement = 0;

        const newObject = enhancer.get(object);

        expect(newObject.name).toBe("test");
    });

    it("item enhancement > 0", function() {
        object.enhancement = 15;

        const newObject = enhancer.get(object);

        expect(newObject.name).toBe("[+15] test")
    });
})
