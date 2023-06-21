// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.

const { ethers, run, network } = require("hardhat")

async function main() {
    const simpleContractFactory = await ethers.getContractFactory(
        "simpleContract"
    )
    console.log("Deploying contract......")
    const myContract = await simpleContractFactory.deploy()
    await myContract.waitForDeployment() ////// For old version of ethers use 'deployed()' function;

    const contractAddress = await myContract.getAddress() ////// For old version use 'contract.address';
    console.log(`Deployed Contract to : ${contractAddress}`)

    if (network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY) {
        console.log("Waiting for block confirmations...")
        await myContract.deploymentTransaction().wait(9)
        await verify(contractAddress, [])
    }

    //////// Interact with contract function////////
    const currentNumber = await myContract.Retrieve()
    console.log(`Current Favourite Number is : ${currentNumber}`)

    const transactionResponse = await myContract.Store(9)
    const transactionReceipt = await transactionResponse.wait(1)
    const updatedNumber = await myContract.Retrieve()
    console.log(`Updated Favourite Number is : ${updatedNumber}`)

    //console.log(transactionReceipt);
}

async function verify(contractAddress, args) {
    console.log("Verifying Contract....")
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already Verified")
        } else {
            console.log(e)
        }
    }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exitCode = 1
    })
