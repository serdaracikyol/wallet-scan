<template>
  <form id="search" @submit.prevent="submitSearch">
    <input
      type="text"
      placeholder="Enter your wallet address."
      class="wallet-address"
      v-model="search"
    />
    <button class="search-button" type="submit">
      <SearchIcon width="16" height="16" color="#777"></SearchIcon>
    </button>
  </form>
</template>

<script>
import SearchIcon from "./icons/SearchIcon";

export default {
  name: "Search",
  data() {
    return {
      search: null,
    };
  },
  props: {},
  computed: {},
  methods: {
    submitSearch() {
      this.$router
        .push({
          name: "wallet",
          query: {
            q: this.search,
          },
        })
        .catch((err) => {
          return err;
        });

      this.search = null;
    },
  },
  components: {
    SearchIcon,
  },
};
</script>

<style scoped lang="scss">
#search {
  width: 550px;
  display: flex;
  align-items: center;

  .wallet-address {
    display: flex;
    flex: 1;
    padding: 0px 10px;
    height: 2.5rem;
    border: 0;
    border-radius: 2rem 0rem 0rem 2rem;
    background-color: #333;
    font-weight: 600;
    color: #999;
    outline: none;
  }

  .search-button {
    cursor: pointer;
    height: 2.5rem;
    padding: 0px 15px;
    border: 0;
    border-radius: 0rem 2rem 2rem 0rem;
    background-color: #333;
  }
}
</style>
