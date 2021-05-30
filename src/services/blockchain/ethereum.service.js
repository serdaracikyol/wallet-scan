import BaseBlockchainService from "./baseBlockchain.service";
import constants from "../../utils/constants";

class EthereumService extends BaseBlockchainService {
  constructor(_walletAddress) {
    super(constants.EtheriumNodeAddress);
    super.walletAddress = _walletAddress;
  }
}

export default EthereumService;
