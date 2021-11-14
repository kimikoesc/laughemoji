const { expect } = require("chai");
const { laughEmoji } = require('./laughemoji');

describe("laughEmoji", function () {

    it("Should be a function", () => {
        expect(typeof laughEmoji).to.equal('function');
    });


    it("Should return a string", () => {
        expect(typeof laughEmoji('lol')).to.equal('string');
    });

    it("Should replace lol with 😆", () => {
        expect(laughEmoji('this utility is so useless lol')).to.equal('this utility is so useless 😆');
    });

    it("Should replace lmao with 😂", () => {
        expect(laughEmoji('how to sleep 8 hours in 4 hours lmao')).to.equal('how to sleep 8 hours in 4 hours 😂');
    });

    it("Should replace lmfao with 🤣", () => {
        expect(laughEmoji('trust me lmfao, I am an engineer')).to.equal('trust me 🤣, I am an engineer');
    });

    it("Should throw an error if no laughs are found", () => {
        const test = laughEmoji.bind(null, 'I am sad')
        expect(test).to.throw();
    });

    it("Should throw an error if input is not a string", () => {
        const test = laughEmoji.bind(null, 43145)
        expect(test).to.throw();
    });
})