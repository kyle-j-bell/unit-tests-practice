const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

//Groups unit tests for "Word" class and its methods.
describe("Word", function () {
  describe("Word constructor function", function () {

    it('should have a "word" property', function () {

      let testWord = new Word();
      //Tests for the key "word" in object testWord.
      expect(testWord).to.have.all.keys('word');
    });

    it('should set the "word" property when a new word is created', function () {

      let testWord = new Word("string");
      //Tests that the "word" property returns a string when called.
      expect(testWord.word).to.equal("string");
    });
  });
  //Unit test for .removeVowels method.
  describe("removeVowels function", function () {
    it("should return the word with all vowels removed", function () {

      let testString = new Word("this is a test");
      let vowelTest = testString.removeVowels();
      //Tests that testString returns its "word" property with all vowels removed when .removeVowels() is called.
      expect(vowelTest).to.equal("ths s  tst");
    });
  });
  //Unit test for .removeConsonants method.
  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {

      let testString = new Word("this is a test");
      let consonantsTest = testString.removeConsonants();
      //Tests that testString returns its "word" property with all consonants and spaces removed when .removeConsonants() is called.
      expect(consonantsTest).to.equal("iiae");
    });
  });
  //Unit test for .pigLatin function.
  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {

      let testString = new Word("this is a test");
      let pigLatinTest = testString.pigLatin();
      //Tests that testString returns its "word" property rendered in Pig Latin when .pigLatin() is called.
      expect(pigLatinTest).to.equal("is is a testthay");
    });
  });
});
