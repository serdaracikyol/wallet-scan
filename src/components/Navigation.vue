<template>
  <div id="nav">
    <div class="nav-container">
      <!--Logo-->
      <router-link to="/" class="navTitle">
        <wallet-scan-icon width="40" height="40" />
        <h1>{{ brand }}</h1>
      </router-link>
      <!--\Logo-->

      <Search />

      <!--Menu-->
      <ul class="nav-menu">
        <li>
          <router-link to="/wallet"> Wallet</router-link>
        </li>

        <li>
          <a>USD</a>
          <ul class="dropdown-menu">
            <li>
              <router-link to="/">BTC- 0.0007</router-link>
            </li>
            <li>
              <router-link to="/"> USD - 1.00</router-link>
            </li>
            <li>
              <router-link to="/"> EUR - 0.840</router-link>
            </li>
            <li>
              <router-link to="/"> TRY - 8.535</router-link>
            </li>
          </ul>
        </li>

        <li>
          <a>
            <flag-icon country-code="US" width="20"> </flag-icon>
          </a>

          <ul class="dropdown-menu">
            <li>
              <router-link to="/lang/us">
                <flag-icon country-code="US" width="18"></flag-icon>
                <span>English</span>
              </router-link>
            </li>

            <li>
              <router-link to="/lang/tr">
                <flag-icon country-code="TR" width="18"></flag-icon>
                <span>Türkçe</span>
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { WalletScanIcon, FlagIcon } from "./icons/LoadIcon";

import Search from "./Search.vue";

export default {
  name: "Navigation",
  props: {
    brand: String,
  },
  components: {
    Search,
    FlagIcon,
    WalletScanIcon,
  },
};
</script>

<style scoped lang="scss">
#nav {
  display: flex;
  justify-content: center;
  padding: 0px;
  margin: 0px;
  background-color: #222;
  height: 5rem;

  .nav-container {
    display: flex;
    justify-content: space-between;
    width: 1366px;
  }

  a.navTitle {
    color: #86d869;
    display: flex;
    align-items: center;

    svg {
      margin-right: 15px;
    }

    h1 {
      font-size: 20px;
      margin: 0;
    }
  }

  ul.nav-menu {
    display: flex;
    height: 100%;
    margin: 0;

    > li {
      display: flex;
      position: relative;
      align-items: center;
      cursor: pointer;

      > a {
        display: flex;
        color: #eee;
        font-weight: 400;
        font-size: 15px;
        border-radius: 5px;
        padding: 10px 15px;
        transition: background-color 350ms;

        &.router-link-active {
          color: #86d869;
        }
      }

      &:not(:first-child) {
        margin-left: 10px;
      }

      &:hover > a {
        background-color: #303030;
      }

      &:hover ul.dropdown-menu {
        opacity: 1;
        visibility: visible;
      }

      ul.dropdown-menu {
        position: absolute;
        display: flex;
        flex-direction: column;
        padding: 0;
        top: 100%;
        right: 0;
        overflow: hidden;
        opacity: 0;
        visibility: hidden;

        > li {
          list-style: none;
          background-color: #222;
          transition: background-color 350ms;
          border-bottom: 1px solid #303030;
          border-top: 1px solid #1a1a1a;

          a {
            display: flex;
            align-items: center;
            color: #ccc;
            font-size: 14px;
            padding: 10px 12px;
            white-space: nowrap;
          }

          span {
            padding: 0px 5px;
          }

          &:first-child {
            border-radius: 5px 5px 0px 0px;
          }

          &:last-child {
            border-radius: 0px 0px 5px 5px;
          }

          &:hover {
            background-color: #303030;
          }
        }

        &:before {
          content: "";
          width: 0;
          height: 0;
          margin-right: 10px;
          align-self: flex-end;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-bottom: 5px solid black;
        }
      }
    }
  }
}
</style>
