<template>
  <div class="carouselbox">
    <h1>The Founding Warrior of Degis Kingdom</h1>
  </div>
</template>

<script>
export default {
  setup() {
    let founder = [
      { name: "Andy", role: "Founder" },
      { name: "Eric Li", role: "CTO" },
      { name: "Oliver", role: "CFO" },
      { name: "Oliver", role: "CFO" },
      { name: "Oliver", role: "CFO" },
    ];

    return { founder };
  },
};
</script>
<style scoped>
.carouselbox {
  height: 270px;
}
</style>
