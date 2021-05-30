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
        d="m10.71 10.06c-0.15-0.15-0.24-0.23-0.25-0.24 0.89-1.05 1.43-2.4 1.43-3.87 0-3.29-2.66-5.95-5.94-5.95-3.29 0-5.95 2.66-5.95 5.95 0 3.28 2.66 5.94 5.95 5.94 1.47 0 2.82-0.54 3.87-1.43 0.01 0.01 0.09 0.1 0.24 0.25v0.73l4.58 4.56 1.36-1.36-4.56-4.58h-0.73zm-8.88-4.11c0-2.28 1.84-4.12 4.12-4.12 2.27 0 4.11 1.84 4.11 4.12 0 2.27-1.84 4.11-4.11 4.11-2.28 0-4.12-1.84-4.12-4.11z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: "SearchIcon",
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
