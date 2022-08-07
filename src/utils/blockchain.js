import Web3 from "web3/dist/web3.min.js";

function isValidAddress(_walletAddress) {
  return Web3.utils.isAddress(_walletAddress);
}

export { isValidAddress };
