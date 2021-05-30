import BaseBlockchainService from "./baseBlockchain.service";
import constants from "@/utils/constants";

class AvalancheService extends BaseBlockchainService {
  constructor(_walletAddress) {
    super(constants.AvalancheNodeAddress);

    super.walletAddress = _walletAddress;
  }
}

export default AvalancheService;
