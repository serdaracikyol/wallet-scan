import EtheriumService from "./ethereum.service";
import AvalancheService from "./avalanche.service";
import SmartchainService from "./smartchain.service";

class BlockchainFactory {
  constructor(_chain, _walletAddress) {
    switch (_chain) {
      default:
      case "ethereum":
        return new EtheriumService(_walletAddress);
      case "avalanche":
        return new AvalancheService(_walletAddress);
      case "smartchain":
        return new SmartchainService(_walletAddress);
    }
  }
}

export default BlockchainFactory;
