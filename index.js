const Web3 = require('web3');
require('dotenv').config();
const ethers = require('ethers');




async function main() {
    const web3 = new Web3(new Web3.providers.WebsocketProvider(process.env.WS_URL));

    web3.eth.subscribe('pendingTransactions', async (error, txHash) => {
        if (error) {
            console.error(error);
            return;
        }

        try {
            const tx = await web3.eth.getTransaction(txHash);
            console.log(tx)

        } catch (error) {
            console.error(error);
        }
    });
}

main();