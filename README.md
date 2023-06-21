<h1 align = center>
    <i>Smart Contract Deployment with HardHat</i>
</h1>

- [Quick Setup](#Quick-Setup)
- [Usage](#usage)
  - [Testing](#testing)
    - [Test Coverage](#test-coverage)
  - [Estimate gas](#estimate-gas)
  - [Local Deployment](#local-deployment)
    - [Important localhost note](#important-localhost-note)
  - [Deployment to a testnet or mainnet](#deployment-to-a-testnet-or-mainnet)
    - [Verify on etherscan](#verify-on-etherscan)
- [Linting](#linting)
- [Thank you!](#thank-you)

# Quick Setup

1. ___Initialize your project in any Empty folder___:
    ```sh 
    yarn init
    ```
    
2. ___Now add HardHat in your Project___
    ```sh
    yarn add --dev hardhat
    ```
3. ___Add all HardHat dependencies in your project___
    ```sh
    yarn hardhat
    ```

4. ___Compile your solidity file___
    ```sh
    yarn harhat comnpile
    ```

5. ___You should add all required dependencies___
    * prettier and prettier-plugin-solidity
    * dotenv
    * hardhat gas reporter
    * nomicfoundation harhat verify
    * solidity coverage
    * etc...
    ```sh
    yarn add --dev prettier prettier-plugin-solidity
    yarn add --dev dotenv
    yarn add --add solidity-coverage
    ...
    ```


# Usage

Deploy:

```
yarn hardhat run scripts/deploy.js
```

## Testing

```
yarn hardhat test
```

### Test Coverage

Basically, It covers extent  of testing of  your solidity code .

```
yarn hardhat coverage
```

## Estimate gas

You can estimate how much gas things cost by running:

```
yarn hardhat test
```

And you'll see and output file called `gas-report.txt`

## Local Deployment 

If you'd like to run your own local hardhat network, you can run:

```
yarn hardhat node
```

And then **in a different terminal**

```
yarn hardhat run scripts/deploy.js --network localhost
```

And you should see transactions happen in your terminal that is running `npx hardhat node`

### Important localhost note

If you use metamask with a local network, everytime you shut down your node, you'll need to reset your account. Settings -> Advanced -> Reset account. Don't do this with a metamask you have real funds in. And maybe don't do this if you're a little confused by this. 

## Deployment to a testnet or mainnet

1. Setup environment variables

You'll want to set your `SEPOLIA_RPC_URL` and `PRIVATE_KEY` as environment variables. You can add them to a `.env` file.

- `PRIVATE_KEY`: The private key of your account (like from [metamask](https://metamask.io/)). **NOTE:** FOR DEVELOPMENT, PLEASE USE A KEY THAT DOESN'T HAVE ANY REAL FUNDS ASSOCIATED WITH IT.
  - You can [learn how to export it here](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key).
- `SEPOLIA_RPC_URL`: This is url of the sepolia testnet node you're working with. You can get setup with one for free from [Alchemy](https://alchemy.com/?a=673c802981)

2. Get testnet ETH

Head over to [faucets.chain.link](https://faucets.chain.link/) and get some tesnet ETH. You should see the ETH show up in your metamask.

3. Deploy

```
yarn hardhat run scripts/deploy.js --network sepolia
```

### Verify on etherscan

If you deploy to a testnet or mainnet, you can verify it if you get an [API Key](https://etherscan.io/myapikey) from Etherscan and set it as an environment variable named `ETHERSCAN_API_KEY`. You can pop it into your `.env` file .

In it's current state, if you have your api key set, it will auto verify sepolia contracts!

However, you can manual verify with:

```
yarn hardhat verify --constructor-args arguments.js DEPLOYED_CONTRACT_ADDRESS
```


# Linting

To check linting / code formatting:

 Linting is the process of performing static analysis on source code to flag patterns that might cause errors or other problems. As an application progresses through the various stages of development, code quality becomes critical.

```
yarn lint
```
or, to fix: 
```
yarn lint:fix
```

# Thank You