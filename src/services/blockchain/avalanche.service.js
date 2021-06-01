import BaseBlockchainService from "./baseBlockchain.service";
import constants from "../../utils/constants";
import contracts from "../../contracts/erc20/avalanche.json";

class AvalancheService extends BaseBlockchainService {
  constructor(_walletAddress) {
    super(constants.AvalancheNodeAddress);

    this.contracts = contracts;
    this.walletAddress = _walletAddress;
    this.coin.chainName = "Avalanche";
    this.coin.coinName = "Avalanche";
    this.coin.symbol = "AVAX";
  }
}

export default AvalancheService;
