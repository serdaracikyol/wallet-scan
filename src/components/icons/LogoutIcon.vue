<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 16 16"
  >
    <g :fill="color">
      <path
        id="a"
        d="m10.39 6.27 1.06 1.06h-5.45v1.34h5.45l-1.06 1.05 0.94 0.95 2.67-2.67-2.67-2.67-0.94 0.94zm-2.39-2.94v-1.33h-4.67c-0.73 0-1.33 0.6-1.33 1.33v9.34c0 0.73 0.6 1.33 1.33 1.33h4.67v-1.33h-4.67v-9.34h4.67z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: "LogoutIcon",
  props: {
    color: {
      type: String,
      default: "white",
    },
    width: {
      type: [Number, String],
      default: 16,
    },
    height: {
      type: [Number, String],
      default: 16,
    },
  },
};
</script>
