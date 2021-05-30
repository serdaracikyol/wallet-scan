<template>
  <div id="nav">
    <div class="nav-container">
      <h1 class="navTitle">
        <router-link to="/">{{ brand }}</router-link>
      </h1>
      <Search />
      <ul>
        <li>
          <router-link to="/wallet"> Wallet</router-link>
        </li>
        <li>
          <a href=""> USD </a>
          <ul class="dropdown-menu">
            <li>
              <a href="/profile"> BTC - 0.0007</a>
            </li>
            <li>
              <a href="/"> USD - 1.00</a>
            </li>
            <li>
              <a href="/"> EUR - 0.840</a>
            </li>
            <li>
              <a href="/"> TRY - 8.535</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/">
            <flag-icon country-code="US" width="25"></flag-icon>
          </a>
          <ul class="dropdown-menu">
            <li>
              <a href="/EN">
                <flag-icon country-code="US" width="25"></flag-icon>
                English
              </a>
            </li>
            <li>
              <a href="/TR">
                <flag-icon country-code="TR" width="25"></flag-icon>
                Türkçe
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { FlagIcon } from "./icons/LoadIcon";

import Search from "./Search.vue";

export default {
  name: "Navigation",
  props: {
    brand: String,
  },
  components: {
    Search,
    FlagIcon,
  },
};
</script>

<style scoped lang="scss">
#nav {
  padding: 0px;
  margin: 0px;
  background-color: #222;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  height: 4rem;

  .nav-container {
    width: 1366px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
  }

  h1.navTitle {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-size: 20px;
    padding: 0px 20px;
    margin: 0;

    a {
      color: #00ac0e;
    }
  }

  ul {
    margin: 0;
    display: flex;
    align-items: stretch;

    li {
      display: flex;
      align-items: stretch;
      position: relative;
      transition: background-color 300ms;

      &:hover {
        background-color: #333;
      }

      a {
        display: flex;
        flex: 1;
        flex-direction: row;
        align-items: center;
        color: white;
        font-weight: bold;
        padding: 20px 15px;

        &.router-link-exact-active {
          color: #00ac0e;
        }
      }

      > ul.dropdown-menu {
        margin: 0;
        padding: 0.5rem 0;
        display: none;
        flex-direction: column;
        position: absolute;
        overflow: hidden;
        top: 4rem;
        right: 0rem;
        width: 12rem;

        a {
          svg {
            margin-right: 10px;
          }
        }

        &:before {
          content: "";
          display: none;
          width: 0;
          height: 0;
          margin-left: 10rem;
          border-left: 0.5rem solid transparent;
          border-right: 0.5rem solid transparent;
          border-bottom: 0.5rem solid#222;
          right: 20;
        }

        li {
          background-color: #222;
          border-top: 1px solid #111;
          border-bottom: 1px solid #333;
          transition: background-color 300ms;

          &:last-child {
            border-radius: 0rem 0rem 0.5rem 0.5rem;
          }
          &:first-child {
            border-radius: 0.5rem 0.5rem 0rem 0rem;
          }

          &:hover {
            background-color: #333;
          }
        }
      }

      &:hover ul.dropdown-menu,
      &:hover ul.dropdown-menu:before {
        display: flex;
      }

      svg {
        margin-right: 10px;
      }
    }
  }
}
</style>
