# Wallet Scan

Wallet Scan is multi network supported portfolio tracker application for EVM compatible networks. It currently supports ethereum, avalanche and smart chain networks.

## Project setup

```
npm install
```

#### Compiles and hot-reloads for development

```
npm run serve
```

#### Compiles and minifies for production

```
npm# run build
```

#### Lints and fixes files

```
npm run lint
```

#### Enviroments

1. Copy the `.env.example` file and rename it `.env`
2. Fill the chain addresses.

Note: You can use the following for Avalanche C Chain and Binance Chain, but for ethereum you need to open an account on infura.io (Free up to 25000 requests/day) and get an api key.

```
VUE_APP_AVAX_NODE_ADDRESS=https://api.avax.network/ext/bc/C/rpc
VUE_APP_BNB_NODE_ADDRESS=https://bsc-dataseed.binance.org/
```
