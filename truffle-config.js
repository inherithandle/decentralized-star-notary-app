/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * truffleframework.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like truffle-hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura API
 * keys are available for free at: infura.io/register
 *
 *   > > Using Truffle V5 or later? Make sure you install the `web3-one` version.
 *
 *   > > $ npm install truffle-hdwallet-provider@web3-one
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

// const HDWallet = require('truffle-hdwallet-provider');
// const infuraKey = "fj4jll3k.....";
//
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();
let HDWalletProvider = require("truffle-hdwallet-provider");
let mnemonic = "put your seed words to deploy to Rinkeby Network";

module.exports = {

  networks: {

    rinkeby: {
        provider: function () {
            return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/b7f9b8737bb5483fa65b04196b442877");
          },
        network_id: 4,
    },


      development: {
          host: "127.0.0.1",     // Localhost (default: none)
          port: 8545,            // Standard Ethereum port (default: none)
          network_id: "*",       // Any network (default: none)
      }


  },

  mocha: {
    // timeout: 100000
  },

  compilers: {
    solc: {
    }
  }
};
