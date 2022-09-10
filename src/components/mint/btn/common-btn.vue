<template>
  <div class="btn1" @click="mint">{{ content }}</div>
</template>

<script>
import mint from "../../../composables/mint.js";
export default {
  props: ["content"],
  setup() {
    return { mint };
  },
};
</script>
<style scoped>
.btn1 {
  text-transform: uppercase;
  background: rgba(103, 88, 140, 0.15);
  border: 4px solid #fff;
  border-radius: 5px;

  width: 360px;
  height: 60px;
  font-weight: 700;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>
