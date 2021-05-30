import { Get } from "../baseMethods.service";

let coingeckoService = {
  MarketUrl: "https://api.coingecko.com/api/v3",
  currency_list: ["USD", "EUR", "TRY", "BTC", "ETH", "BNB", "AVAX"],

  getCoinPrices(
    coin_list = ["bitcoin", "ethereum", "avalanche-2"],
    currency_list = ["USD", "EUR", "TRY"]
  ) {
    let url = `${
      this.MarketUrl
    }/simple/price/?ids=${coin_list.join()}&vs_currencies=${currency_list.join()}`;
    Get(url).then((res) => {
      console.log(res);
    });
  },
};

export default coingeckoService;
