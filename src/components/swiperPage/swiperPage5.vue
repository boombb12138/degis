<template>
  <div class="swiperPage5">
    <h1 style="font-size: 40px; text-align: left">The Degis Community</h1>
    <div class="swiperPage5-center">
      <img src="../../assets/bigCastle.png" class="castle" alt="" />
      <div class="link">
        <div>
          <img src="../../assets/link1.png" alt="" /><a href="">Github</a>
        </div>
        <div>
          <img src="../../assets/link3.png" alt="" /><a href="">Medium</a>
        </div>
        <div>
          <img src="../../assets/link2.png" alt="" /><a href="">Twitter</a>
        </div>
        <div>
          <img src="../../assets/link4.png" alt="" /><a href="">Telegram</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>
<style scoped>
.swiperPage5 {
  position: relative;
}
.swiperPage5-center {
  width: 700px;
  height: 500px;
  position: relative;
}
.castle {
  width: 125%;
  position: absolute;
  top: 20px;
  left: -217px;
}
.link {
  position: absolute;
  top: 120px;
  right: 120px;

  display: grid;
  grid-template-columns: repeat(2, 10fr);
  column-gap: 20px;
}
.link div {
  display: flex;
  align-items: center;
  width: 90px;
  justify-content: space-between;
  margin-bottom: 10px;
}
.link div img {
  margin-right: 5px;
}

.link div a {
  color: #fff;
  opacity: 0.7;
  font-size: 18px;
}
</style>
