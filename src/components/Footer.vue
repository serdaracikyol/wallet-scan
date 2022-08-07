<template>
  <div class="wrapper">
    <div class="footer">
      <hr class="divider" />
      0xeb6e107d6daFFb86178E9bA8Af4695b9B6f05506
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
  components: {},
};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: center;
  color: #ccc;
  padding: 15px 0;

  hr.divider {
    width: 100%;
    border-top: 1px solid #ccc;
  }
}
</style>
