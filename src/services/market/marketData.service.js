import coingeckoService from "./coingecko.service";

let marketDataService = {
  marketName: "coingecko",

  marketServices: {
    coingecko: coingeckoService,
  },

  getCoinPrices: (...args) =>
    marketDataService.marketServices[
      marketDataService.marketName
    ].getCoinPrices(...args),
};

export default marketDataService;
