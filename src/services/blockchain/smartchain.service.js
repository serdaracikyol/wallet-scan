import BaseBlockchainService from "./baseBlockchain.service";
import constants from "../../utils/constants";
import contracts from "../../contracts/erc20/smartchain.json";

class SmartchainService extends BaseBlockchainService {
  constructor(_walletAddress) {
    super(constants.SmartChainNodeAddress);

    this.contracts = contracts;
    this.walletAddress = _walletAddress;
    this.coin.chainName = "SmartChain";
    this.coin.coinName = "Binance Coin";
    this.coin.symbol = "BNB";
  }
}

export default SmartchainService;
