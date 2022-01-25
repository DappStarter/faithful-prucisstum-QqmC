require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remind atom install brave fresh tower'; 
let testAccounts = [
"0xf1a3fa603be2d37345b315e0489d38d09d418a6d2b3653ba8c59a92aa56f9e8d",
"0xaeed9c3ee3edc27be27dc8a755be679d6aa017c3545119868fe45fc3518589f2",
"0x4b29ddb976b57effccd1f9894f9790a03f90c3db150983fc887225a11d9416c4",
"0x70e2d0a29799a14228c6fc2d3ff9bce4490baf36461ee2940c212de1de97ce2e",
"0x29d3cd74b3f4814aa771201f5b80213a9e50950d09db802832592d0cbe972304",
"0xcb59f88c2c58f4aa7584fa387a114bc44ea5040f08aa08d336959ef338ba05db",
"0x1f9ba7f4ca5ca70e7dd264932279d751e56732102ed5719678bd543b91b2d938",
"0x2c9a98dc5f598c0e57de0d1d88c14dde7725796cae367335ff0367d8f1549d55",
"0xb0daa637a7eb9008330c71628a999c1bfde88dcb58cbb232a5ec3f03870e5bef",
"0x9158af5c7650c5895d1807ff4382e72cb93acf2e8cc990261a53b10ec43e6c3f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

