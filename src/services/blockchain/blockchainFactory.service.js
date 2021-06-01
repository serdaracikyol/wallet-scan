import EtheriumService from "./ethereum.service";
import AvalancheService from "./avalanche.service";
import SmartchainService from "./smartchain.service";

class BlockchainFactory {
  static ethereum(_walletAddress) {
    return new EtheriumService(_walletAddress);
  }

  static avalanche(_walletAddress) {
    return new AvalancheService(_walletAddress);
  }

  static smartchain(_walletAddress) {
    return new SmartchainService(_walletAddress);
  }
}

export default BlockchainFactory;
