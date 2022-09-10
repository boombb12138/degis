<template>
  <div class="CarouselContainer">
    <swiper
      class="mySwiper2 swiper-h"
      :slidesPerView="3"
      :spaceBetween="30"
      :direction="horizontal"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      :autoplay="{
        delay: 2500,
        disbleOnInteraction: false,
      }"
      v-for="item in founder"
      :key="item.index"
    >
      <swiper-slide class="rolecard">
        <!-- <img src="../assets/role1.png" alt="" /> -->
        <span>{{ item.name }}</span>
        <!-- <p>{{ item.role }}</p> -->
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import {
  Navigation,
  Pagination,
  Scrollbar,
  Mousewheel,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
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
      modules: [Navigation, Pagination, Scrollbar, Mousewheel, Autoplay],
    };
  },
};
</script>
<style scoped>
.CarouselContainer {
  position: relative;
  height: 100%;
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.mySwiper2 {
  width: 100%;
  height: 100%;
}

.rolecard {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.rolecard img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
