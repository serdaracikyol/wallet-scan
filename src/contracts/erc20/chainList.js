import ethereum from "./ethereum.json";
import avalanche from "./avalanche.json";
import smartchain from "./smartchain.json";

let chainList = [ethereum, avalanche, smartchain];

chainList = chainList.map((chain) => {
  if (
    process.env["VUE_APP_" + chain.coinSymbol + "_NODE_ADDRESS"] !== undefined
  ) {
    chain.nodeAddress =
      process.env["VUE_APP_" + chain.coinSymbol + "_NODE_ADDRESS"];
  }
  return chain;
});

export default chainList;
