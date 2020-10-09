require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner neck fringe speak guard render remain solid idea clinic obscure genius'; 
let testAccounts = [
"0x9cc3a0cfcc81ff365d3037277e2e727d0b98adcd29ef26531bbd2ecaf2ea8905",
"0x5243104e97b847a0cc75651daee80074c4c1401a43abd7fa2f1254a25b349f7e",
"0x6b03abe5109630f2cad77695f143c1b3ec7ad27ef977fe677d982219d54d402a",
"0xcd6dabcd07ec47c572def7a8e6f8862361a61dcc1f3b10ad85836127b08d167c",
"0xf0ebc1ce46363c1b31f9c3ad80c4e68c481e344889de1bb0c2776d6ca294963b",
"0x8212f5da65830858d0d09c2274d992325385208614a1dce7feb95031dc34b834",
"0xc61c81954c86ce276694e016e5d4c10a5da0d8ebe7f2d2049c3182e85fbe266f",
"0x27745accdf8237e7e363d79ef259767bd57feddd249f537d23b2603f80faad7d",
"0x71a960a84973fa7d6776aedd45208473c48f4a4286441b772f7b788de23c2803",
"0x8c686833d1508ab4a24f46525589b0e012b7e6e1d24053dd73fe0ebf78eb3cef"
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
            version: '^0.5.11'
        }
    }
};
