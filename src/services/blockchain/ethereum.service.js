import BaseBlockchainService from "./baseBlockchain.service";
import constants from "../../utils/constants";
import contracts from "../../contracts/erc20/ethereum.json";

class EthereumService extends BaseBlockchainService {
  constructor(_walletAddress) {
    super(constants.EtheriumNodeAddress);

    this.contracts = contracts;
    this.walletAddress = _walletAddress;
    this.coin.chainName = "Ethereum";
    this.coin.coinName = "Ethereum";
    this.coin.symbol = "ETH";
  }
}

export default EthereumService;
