import Web3 from "web3";

isValidAddress(_walletAddress){
    return Web3.utils.isAddress(_walletAddress)
}

export default {isValidAddress}