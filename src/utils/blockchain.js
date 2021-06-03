import Web3 from "web3";

function isValidAddress(_walletAddress) {
  return Web3.utils.isAddress(_walletAddress);
}

export { isValidAddress };
