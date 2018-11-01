var HDWalletProvider = require("truffle-hdwallet-provider-privkey");

var infura_key = "";
var priv_key = [""];

module.exports = {
    networks: {
        ropsten: {
            provider: () => new HDWalletProvider(priv_key, `https://ropsten.infura.io/${infura_key}`),
            network_id: 3,
            gas: 4612388,
            gasPrice: 5000000000 // 5 Gwei
        },
        kovan: {
            provider: () => new HDWalletProvider(priv_key, `https://kovan.infura.io/${infura_key}`),
            network_id: 3,
            gas: 4612388
        }
    }
};
