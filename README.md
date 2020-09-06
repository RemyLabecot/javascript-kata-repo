# javascript-kata-repo

All katas in this repo are made with TDD method of development.
https://en.wikipedia.org/wiki/Test-driven_development

## 16+18=214 instructions

For this Kata you will have to forget how to add two numbers together.

The best explanation on what to do for this kata is this meme:


![Image of Yaktocat](https://i.ibb.co/Y01rMJR/caf.png)

Exemple of tests : 

```
describe("Silly addition", () => {
   it("Real addition", () => {
     assert.strictEqual(add(2, 11), 13);
     assert.strictEqual(add(0, 1), 1);
     assert.strictEqual(add(0, 0), 0);
   });
   
   it("Silly addition", () => {
     assert.strictEqual(add(16, 18), 214);
     assert.strictEqual(add(26, 39), 515);
     assert.strictEqual(add(122, 81), 1103);
   });
   
   it("Big addition", () => {
     assert.strictEqual(add(1222, 30277), 31499);
     assert.strictEqual(add(1236, 30977), 31111013);
     assert.strictEqual(add(38810, 1383), 391193);
     assert.strictEqual(add(49999, 49999), 818181818);
   });
 });
 ```


