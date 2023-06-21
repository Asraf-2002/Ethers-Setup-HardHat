const { ethers } = require("hardhat")
const { assert, expect } = require("chai")

describe("simpleContract", () => {
    let simpleContractFactory, myContract
    beforeEach(async function () {
        simpleContractFactory = await ethers.getContractFactory(
            "simpleContract"
        )
        myContract = await simpleContractFactory.deploy()
        await myContract.waitForDeployment()
    })

    it("Should start with favourite number of 0", async function () {
        const currentNumber = await myContract.Retrieve()
        const expectedNumber = "0"
        assert(currentNumber.toString(), expectedNumber)
        ///////expect(currentNumber.toString().to.equal(expectedNumber));
    })

    it("Should update when call Store function", async function () {
        const expectedNumber = "9"
        const transactionResponse = await myContract.Store(expectedNumber)
        await transactionResponse.wait(1)

        const currentNumber = await myContract.Retrieve()
        assert(currentNumber.toString(), expectedNumber)
    })

    it("Should work properly with addPerson function", async function () {
        const expectedName = "Asraf Ali"
        const expectedFavouriteNumber = 9
        const transactionResponse = await myContract.addPerson(
            expectedName,
            expectedFavouriteNumber
        )
        await transactionResponse.wait(1)
        const { favouriteNumber, name } = await myContract.people(0)  //// Array of People(number, name)...
        const number = await myContract.nameToFavouriteNumber(expectedName); //// Map of (name => number)...

        assert.equal(favouriteNumber, expectedFavouriteNumber)
        assert.equal(name, expectedName)
        assert.equal(favouriteNumber, number.toString())
    })
})
