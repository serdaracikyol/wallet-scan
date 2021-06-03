<template>
  <div class="chainIcon">
    <!--ETH Icon-->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 16 16"
      v-if="chainName.toLowerCase() == 'ethereum'"
    >
      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 1 0 8 0z" fill="#627eea" />
      <path
        d="M5.05 8.09L8 6.75V3.2L5.05 8.09z"
        fill-opacity="0.85"
        fill="#fff"
      />
      <path
        d="M5.05 8.09L8 9.83V6.75L5.05 8.09z"
        fill-opacity="0.45"
        fill="#fff"
      />
      <path d="M8 3.2v3.55l2.95 1.34L8 3.2z" fill-opacity="0.5" fill="#fff" />
      <path
        d="M10.95 8.09L8 6.75v3.08l2.95-1.74z"
        fill-opacity="0.3"
        fill="#fff"
      />
      <path
        d="M8 12.8v-2.41L5.05 8.65 8 12.8z"
        fill-opacity="0.85"
        fill="#fff"
      />
      <path
        d="M8 12.8l2.95-4.15L8 10.39v2.41z"
        fill-opacity="0.5"
        fill="#fff"
      />
    </svg>
    <!--\ETH Icon-->

    <!--AVAX Icon-->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 16 16"
      v-else-if="chainName.toLowerCase() == 'avalanche'"
    >
      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 1 0 8 0z" fill="#e84142" />
      <path
        d="M10.88 8.31l1.3 2.28c.21.36.04.66-.38.66H9.18c-.41 0-.58-.3-.38-.66l1.32-2.28c.37-.24.62-.24.76 0zM8.36 3.92a18.47 18.47 0 0 1 .29.52l.68 1.2a1.23 1.23 0 0 1 0 1.09L7.04 10.7c-.21.32-.55.52-.94.55H4.2c-.42 0-.59-.29-.38-.66l3.79-6.67c.36-.24.61-.24.75 0z"
        fill="#ffffff"
      />
    </svg>
    <!--\AVAX Icon-->

    <!--BSC Icon-->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 16 16"
      v-else-if="chainName.toLowerCase() == 'smartchain'"
    >
      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 1 0 8 0z" fill="black" />
      <path
        d="M8 5.66l1.66 1.66.96-.96L8 3.73 5.38 6.35l.97.97h0L8 5.66zM4.7 7.04l.96.96-.96.96L3.74 8l.96-.96zm3.3 3.3l1.66-1.66.97.96h0L8 12.27 5.38 9.65v-.01l.97-.96h0L8 10.34zm3.3-3.3l.97.96-.97.96-.96-.96.96-.96z"
        fill="#f3ba2f"
      />
      <path
        d="M9.08 8L8 6.92l-.79.8h0l-.09.09-.19.19h0 0L8 9.08 9.08 8h0 0 0 0zm0 0h0 0z"
        fill="#f3ba2f"
      />
    </svg>
    <!--\BSC Icon-->

    <!--Unknown Icon-->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 16 16"
      v-else
    >
      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 1 0 8 0z" fill="#c2c2c2" />
      <path
        d="M10.5 10.5L10.5 5.5L5.5 5.5L5.5 10.5L10.5 10.5ZM9.88 9.88L8.94 8.94L8.31 9.25L7.38 8L6.13 9.67L6.13 6.13L9.88 6.13L9.88 9.88ZM8.74 6.83L8.71 6.83L8.69 6.84L8.67 6.84L8.65 6.84L8.63 6.85L8.61 6.86L8.59 6.86L8.57 6.87L8.55 6.88L8.53 6.89L8.51 6.9L8.49 6.91L8.48 6.92L8.46 6.93L8.44 6.95L8.43 6.96L8.41 6.97L8.39 6.99L8.38 7L8.37 7.02L8.35 7.04L8.34 7.05L8.33 7.07L8.32 7.09L8.31 7.11L8.3 7.12L8.29 7.14L8.28 7.16L8.27 7.18L8.26 7.2L8.26 7.22L8.25 7.24L8.25 7.26L8.24 7.29L8.24 7.31L8.24 7.33L8.23 7.35L8.23 7.38L8.23 7.4L8.24 7.42L8.24 7.44L8.24 7.46L8.25 7.49L8.25 7.51L8.26 7.53L8.26 7.55L8.27 7.57L8.28 7.59L8.29 7.61L8.3 7.63L8.31 7.64L8.32 7.66L8.33 7.68L8.34 7.7L8.35 7.71L8.37 7.73L8.38 7.75L8.39 7.76L8.41 7.78L8.43 7.79L8.44 7.8L8.46 7.82L8.48 7.83L8.49 7.84L8.51 7.85L8.53 7.86L8.55 7.87L8.57 7.88L8.59 7.89L8.61 7.89L8.63 7.9L8.65 7.91L8.67 7.91L8.69 7.91L8.71 7.92L8.74 7.92L8.76 7.92L8.78 7.92L8.8 7.92L8.83 7.92L8.85 7.92L8.87 7.91L8.89 7.91L8.91 7.91L8.93 7.9L8.95 7.89L8.97 7.89L8.99 7.88L9.01 7.87L9.03 7.86L9.05 7.85L9.07 7.84L9.09 7.83L9.1 7.82L9.12 7.8L9.14 7.79L9.15 7.78L9.17 7.76L9.18 7.75L9.2 7.73L9.21 7.71L9.22 7.7L9.23 7.68L9.25 7.66L9.26 7.64L9.27 7.63L9.28 7.61L9.29 7.59L9.29 7.57L9.3 7.55L9.31 7.53L9.31 7.51L9.32 7.49L9.32 7.46L9.32 7.44L9.33 7.42L9.33 7.4L9.33 7.38L9.33 7.35L9.33 7.33L9.32 7.31L9.32 7.29L9.32 7.26L9.31 7.24L9.31 7.22L9.3 7.2L9.29 7.18L9.29 7.16L9.28 7.14L9.27 7.12L9.26 7.11L9.25 7.09L9.23 7.07L9.22 7.05L9.21 7.04L9.2 7.02L9.18 7L9.17 6.99L9.15 6.97L9.14 6.96L9.12 6.95L9.1 6.93L9.09 6.92L9.07 6.91L9.05 6.9L9.03 6.89L9.01 6.88L8.99 6.87L8.97 6.86L8.95 6.86L8.93 6.85L8.91 6.84L8.89 6.84L8.87 6.84L8.85 6.83L8.83 6.83L8.8 6.83L8.78 6.83L8.76 6.83L8.74 6.83Z"
        fill="#eaeaea"
      />
    </svg>
    <!--\Unknown Icon-->
  </div>
</template>

<script>
export default {
  name: "ChainIcon",
  props: {
    chainName: {
      type: String,
      require: true,
    },
    width: {
      type: [Number, String],
      default: 24,
    },
    height: {
      type: [Number, String],
      default: 24,
    },
  },
};
</script>
