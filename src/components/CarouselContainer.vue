<template>
  <div class="CarouselContainer">
    <swiper
      class="mySwiper2 swiper-h"
      :slidesPerView="3"
      :spaceBetween="30"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      :autoplay="true"
      v-for="item in founder"
      :key="item.index"
    >
      <swiper-slide>
        <div class="rolecard">
          <img src="../assets/role1.png" alt="" />
          <p>{{ item.name }}</p>
          <p>{{ item.role }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Navigation, Pagination, Scrollbar, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/mousewheel";

import { getCurrentInstance } from "vue";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    const { proxy } = getCurrentInstance();
    const onSlideChange = () => {
      console.log("slide change");
    };
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
    return {
      proxy,
      onSlideChange,
      founder,
      modules: [Navigation, Pagination, Scrollbar, Mousewheel],
    };
  },
};
</script>
<style scoped>
.CarouselContainer {
  color: #fff;
  width: 200px;
  height: 200px;
  background-color: pink;
}
.swiper-slide {
  width: 200px;
  height: 200px;
}
</style>
