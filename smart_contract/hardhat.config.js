// https://eth-sepolia.g.alchemy.com/v2/cbTKrlJ37hKgEX82D-t-90gEhqkxbpCr

require('@nomiclabs/hardhat-waffle');

module.exports = {
    solidity: '0.8.0',
    networks: {
        sepolia: {
            url: 'https://eth-sepolia.g.alchemy.com/v2/cbTKrlJ37hKgEX82D-t-90gEhqkxbpCr',
            accounts: ['6e7026bc92361caa3dbf0e842f0bd921bfab37409be63e59db287a6b656b28de'],
        },
    },
};