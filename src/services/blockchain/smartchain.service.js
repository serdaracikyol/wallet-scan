import BaseBlockchainService from "./baseBlockchain.service";
import constants from "@/utils/constants";

class SmartchainService extends BaseBlockchainService {
  constructor(_walletAddress) {
    super(constants.SmartChainNodeAddress);
    super.walletAddress = _walletAddress;
  }
}

export default SmartchainService;
