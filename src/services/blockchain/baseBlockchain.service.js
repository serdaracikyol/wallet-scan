import Web3 from "web3";
import ERC20Abi from "../../contracts/ERC20.json";

class BaseBlockchainService {
  walletAddress;
  contracts;
  coin = {
    chainName: null,
    coinName: null,
    symbol: null,
  };

  constructor(_chainNodeAddress) {
    this.web3 = new Web3(_chainNodeAddress);
  }

  /**
   * Gives your wallet address.
   * @returns {string} Your wallet address.
   */
  getWalletAddress() {
    return this.walletAddress;
  }

  /**
   * Gives your coin and all erc20 token balances as an array.
   * @returns {array}
   */
  async getAllBalance() {
    let _allBalances = [];

    let _tokenBalances = await this.getTokenBalances();
    let _coinBalance = await this.getCoinBalance();

    _tokenBalances.push(_coinBalance);
    _allBalances = _tokenBalances;

    return _allBalances;
  }

  /**
   * Gives your your coin balance as an object.
   * @returns {object}
   */
  async getCoinBalance() {
    let _coinBalance = {
      chain: this.coin.chainName,
      name: this.coin.coinName,
      symbol: this.coin.symbol,
      balance: null,
    };

    let _rawCoinBalance = await this.web3.eth.getBalance(
      this.getWalletAddress()
    );
    _coinBalance.balance = Number(
      this.web3.utils.fromWei(_rawCoinBalance, "ether")
    );

    return _coinBalance;
  }

  /**
   * Gives your all token balance as an array.
   * @returns {array}
   */
  async getTokenBalances() {
    let _tokenBalances = [];

    for (let token of this.contracts) {
      let _tokenBalance = await this.getSingleTokenByContractAddress(
        token.contractAddress
      );

      if (_tokenBalance.balance > 0) {
        _tokenBalances.push(_tokenBalance);
      }
    }

    return _tokenBalances;
  }

  /**
   * Gives your single token balance as an object.
   * @param {string} _tokenContractAddress
   * @returns {array}
   */
  async getSingleTokenByContractAddress(_tokenContractAddress) {
    const tokenContract = new this.web3.eth.Contract(
      ERC20Abi,
      _tokenContractAddress
    );

    let _name = await tokenContract.methods.name().call();
    let _symbol = await tokenContract.methods.symbol().call();
    let _decimal = await tokenContract.methods.decimals().call();
    let _balance = await tokenContract.methods
      .balanceOf(this.getWalletAddress())
      .call();

    return {
      chain: this.coin.chainName,
      name: _name,
      symbol: _symbol,
      balance: _balance / 10 ** _decimal,
    };
  }
}

export default BaseBlockchainService;
