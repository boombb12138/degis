<template>
  <div class="carouselbox">
    <h1>The Founding Warrior of Degis Kingdom</h1>
    <el-carousel
      :loop="false"
      :autoplay="true"
      indicator-position="none"
      class="el-carousel-v"
      height="270px"
    >
      <el-carousel-item
        class="el-carousel-item-v"
        v-for="item in founder"
        :key="item.index"
        justify="center"
        ><div class="card" v-for="i in item" :key="i.index">
          {{ i.name }}
        </div></el-carousel-item
      >
    </el-carousel>
  </div>
</template>

<script>
export default {
  setup() {
    let founder = [
      { name: "Andy", role: "Founder" },
      { name: "Eric Li", role: "CTO" },
      { name: "Eric Li", role: "CTO" },
      { name: "Eric Li", role: "CTO" },
      { name: "Eric Li", role: "CTO" },
      { name: "Oliver", role: "CFO" },
      { name: "Oliver", role: "CFO" },
      { name: "Oliver", role: "CFO" },
    ];

    let newDataList = [];
    let current = 0;
    for (let i = 0; i <= founder.length - 1; i++) {
      if (i % 5 !== 0 || i === 0) {
        if (!newDataList[current]) {
          newDataList.push([founder[i]]);
        } else {
          newDataList[current].push(founder[i]);
        }
      } else {
        current++;
        newDataList.push([founder[i]]);
      }
    }
    // founder = [...newDataList];
    founder = newDataList;
    return { founder };
  },
};
</script>
<style scoped>
.carouselbox {
  height: 270px;
}
.el-carousel-v {
  /* display: flex;
  flex-direction: left; */
}
.el-carousel__container {
  display: flex;
}
.el-carousel-item-v {
  height: 270px;
  display: flex;
}
.el-carousel-v .card {
  /* display: flex; */
  height: 260px;
  width: 191px;
  margin-right: 20px;
  border: 1px solid blue;
}
</style>
