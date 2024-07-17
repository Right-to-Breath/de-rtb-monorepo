#!/usr/bin/env node
const argv = require('yargs/yargs')(process.argv.slice(2))
    .usage('Usage: $0 -n [num]')
    .demandOption(['n'])
    .option('tokenId', {
      description: 'Token number or id',
      alias: 'n',
      type: 'number'
    })
    .argv;


const opensea = require("opensea-js");
const { WyvernSchemaName } = require('opensea-js/lib/types');
const OpenSeaPort = opensea.OpenSeaPort;
const RPCSubprovider = require("web3-provider-engine/subproviders/rpc");
const Web3ProviderEngine = require("web3-provider-engine");
const PrivateKeyWalletSubprovider = require("@0x/subproviders").PrivateKeyWalletSubprovider;

OWNER_ADDRESS = "0xae83C177aC4c83a198f03775992DF5BC0c44EB9f";
ACCOUNT_PRIVATE_KEY = "83325a2d81bbf971f66acf59465d51d7589f68b12f678fd94ebe99ab86bc7714";
API_KEY = "bb3d29842d08447ba4f98ae7a483d7ab";
SELECTED_NETWORK = "main"; // noobs should have used mainnet...
SELECTED_NETWORK_CHAIN_ID = "1";
RPC_URL = "https://eth-mainnet.alchemyapi.io/v2/y5qQryAobzEhcIH4uppPhp86vyNMmriJ";
NFT_CONTRACT_ADDRESS = "0x98a1ffdb36079ca1c243276676fda5bb49277d26";
START_PRICE = "0.013";
AUCTION_DAYS = 14;
AUCTION_HOURS = 24;
IS_AUCTION = true;

const privateKeyWalletSubprovider = new PrivateKeyWalletSubprovider(ACCOUNT_PRIVATE_KEY, SELECTED_NETWORK_CHAIN_ID);

const providerEngine = new Web3ProviderEngine();
providerEngine.addProvider(privateKeyWalletSubprovider);
const infuraRpcSubprovider = new RPCSubprovider({rpcUrl: RPC_URL,});
providerEngine.addProvider(infuraRpcSubprovider);
providerEngine.start();

const seaport = new OpenSeaPort(
providerEngine,
  {
    networkName: SELECTED_NETWORK,
    apiKey: API_KEY,
  },
  (arg) => console.log(arg)
);

const expirationTime = Math.round(Date.now() / 1000 + 60 * 60 * AUCTION_HOURS * AUCTION_DAYS);
//  for 'rinkeby' 0xc778417e063141139fce010982780140aa0cd5ab for mainnet use "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
let wethAddress = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
//let daiAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";

let options = {};
if (IS_AUCTION) {
    options = {
        waitForHighestBid: true,
        paymentTokenAddress: wethAddress,
        expirationTime: expirationTime,
    }
} else {
    options = {
        endAmount: START_PRICE
    }
}

async function main() {
    try {
        return await seaport.createSellOrder({
            asset: {
                tokenId: argv.tokenId,
                tokenAddress: NFT_CONTRACT_ADDRESS,
                schemaName: WyvernSchemaName.ERC721
            },
            accountAddress: OWNER_ADDRESS,
            startAmount: START_PRICE,
            ...options,
        })

    } catch (error) {
        let message = {
            "success": false,
            "message": error.message
        };
        console.log(JSON.stringify(message));
        process.exit(1);
    }
}

main().then(r => {
    let message = {
        "success": true,
        "message": `${r.asset.openseaLink}`
    };
    console.log(JSON.stringify(message));
    process.exit(0);
});