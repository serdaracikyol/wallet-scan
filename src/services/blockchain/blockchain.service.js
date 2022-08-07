import Web3 from "web3/dist/web3.min.js";
import ERC20Abi from "@/contracts/ERC20.json";
import chainList from "@/contracts/erc20/chainList";

class Blockchain {
  web3;
  walletAddress;

  /**
   * @param {string} _walletAddress Sets wallet address.
   */
  constructor(_walletAddress) {
    this.walletAddress = _walletAddress;
    this.web3 = new Web3();
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
    let _coinBalances = await this.getCoinBalances();
    let _tokenBalances = await this.getTokenBalances();

    let _allBalances = _coinBalances.concat(_tokenBalances);

    return _allBalances;
  }

  /**
   * Gives your your coin balance as an array.
   * @async
   * @returns {array}
   */
  async getCoinBalances() {
    let _coinBalances = [];

    for (let chain of chainList) {
      this.web3.setProvider(chain.nodeAddress);

      let _rawCoinBalances = await this.web3.eth.getBalance(
        this.getWalletAddress()
      );

      _coinBalances.push({
        chain: chain.chainName,
        name: chain.coinName,
        symbol: chain.coinSymbol,
        balance: Number(this.web3.utils.fromWei(_rawCoinBalances, "ether")),
      });
    }

    return _coinBalances;
  }

  /**
   * Gives your all token balance as an array.
   * @async
   * @returns {array}
   */
  async getTokenBalances() {
    let _tokenBalances = [];

    for (let chain of chainList) {
      for (let token of chain.tokenList) {
        let _tokenBalance = await this.getSingleToken(
          chain,
          token.contractAddress
        );

        if (_tokenBalance.balance > 0) {
          _tokenBalances.push(_tokenBalance);
        }
      }
    }

    return _tokenBalances;
  }

  /**
   * Gives your single token balance as an object.
   * @async
   * @param {string} _chain
   * @param {string} _tokenContractAddress
   * @returns {onject}
   */
  async getSingleToken(_chain, _tokenContractAddress) {
    this.web3.setProvider(_chain.nodeAddress);

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
      chain: _chain.chainName,
      name: _name,
      symbol: _symbol,
      balance: _balance / 10 ** _decimal,
    };
  }
}

export default Blockchain;
