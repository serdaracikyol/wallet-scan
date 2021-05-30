import Web3 from "web3";

class BaseBlockchainService {
  walletAddress;

  constructor(_chainNodeAddress) {
    this.web3 = new Web3(_chainNodeAddress);
  }

  getWalletAddress() {
    return this.walletAddress;
  }

  getBalance() {
    return new Promise((resolve, reject) => {
      this.web3.eth
        .getBalance(this.getWalletAddress())
        .then((_balance) => {
          resolve(this.web3.utils.fromWei(_balance, "ether"));
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

export default BaseBlockchainService;
