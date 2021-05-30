<template>
  <div class="flags">
    <!--TR Flag-->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      viewBox="0 0 21 15"
      v-if="countryCode == 'TR'"
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="A">
          <stop stop-color="#fff" offset="0%" />
          <stop stop-color="#f0f0f0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="B">
          <stop stop-color="#e92434" offset="0%" />
          <stop stop-color="#e11324" offset="100%" />
        </linearGradient>
      </defs>
      <g fill-rule="evenodd">
        <path fill="url(#A)" d="M0 0h21v15H0z" />
        <path fill="url(#B)" d="M0 0h21v15H0z" />
        <path
          d="M13.052 4.737C12.417 4.275 11.618 4 10.75 4 8.679 4 7 5.567 7 7.5S8.679 11 10.75 11c.868 0 1.667-.275 2.302-.737C12.229 11.32 10.944 12 9.5 12a4.5 4.5 0 1 1 0-9c1.444 0 2.729.68 3.552 1.737zm1.214 3.339l-.919 1.114.063-1.442-1.343-.529 1.391-.386.089-1.441.797 1.204 1.398-.361-.898 1.13.775 1.218-1.352-.505z"
          fill="url(#A)"
        />
      </g>
    </svg>
    <!--\TR Flag-->

    <!--US Flag-->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      viewBox="0 0 21 15"
      v-if="countryCode == 'US'"
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="A">
          <stop stop-color="#fff" offset="0%" />
          <stop stop-color="#f0f0f0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="B">
          <stop stop-color="#d02f44" offset="0%" />
          <stop stop-color="#b12537" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="C">
          <stop stop-color="#46467f" offset="0%" />
          <stop stop-color="#3c3c6d" offset="100%" />
        </linearGradient>
      </defs>
      <g fill-rule="evenodd">
        <path fill="url(#A)" d="M0 0h21v15H0z" />
        <path
          d="M0 0h21v1H0V0zm0 2h21v1H0V2zm0 2h21v1H0V4zm0 2h21v1H0V6zm0 2h21v1H0V8zm0 2h21v1H0v-1zm0 2h21v1H0v-1zm0 2h21v1H0v-1z"
          fill="url(#B)"
        />
        <path fill="url(#C)" d="M0 0h9v7H0z" />
        <path
          d="M1.5 2a.5.5 0 1 1 0-1 .5.5 0 1 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 1 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 1 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 1 1 0 1zm-5 1a.5.5 0 1 1 0-1 .5.5 0 1 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 1 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 1 1 0 1zm1 1a.5.5 0 1 1 0-1 .5.5 0 1 1 0 1zm-2 0a.5.5 0 1 1 0-1 .5.5 0 1 1 0 1zm-2 0a.5.5 0 1 1 0-1 .5.5 0 1 1 0 1zm-2 0a.5.5 0 1 1 0-1 .5.5 0 1 1 0 1zm1 1a.5.5 0 1 1 0-1 .5.5 0 1 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 1 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 1 1 0 1zm1 1a.5.5 0 1 1 0-1 .5.5 0 1 1 0 1zm-2 0a.5.5 0 1 1 0-1 .5.5 0 1 1 0 1zm-2 0a.5.5 0 1 1 0-1 .5.5 0 1 1 0 1zm-2 0a.5.5 0 1 1 0-1 .5.5 0 1 1 0 1z"
          fill="url(#A)"
        />
      </g>
    </svg>
    <!--\US Flag-->
  </div>
</template>

<script>
export default {
  name: "FlagIcon",
  props: {
    countryCode: {
      type: String,
      default: "US",
    },
    width: {
      type: [Number, String],
      default: 21,
    },
  },
};
</script>

<style>
svg {
  position: relative;
  bottom: -3px;
  margin-right: 10px;
}
</style>
