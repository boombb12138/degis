<template>
  <div class="CarouselContainer">
    <Swiper
      ref="mySwiper"
      :mousewheel="{ enabled: true }"
      :id="currentIndex"
      :scrollbar="{ draggable: true }"
      direction="vertical"
    >
      <SwiperSlide class="swiper-slide">1</SwiperSlide>
      <SwiperSlide class="swiper-slide">2</SwiperSlide>
      <SwiperSlide class="swiper-slide">3</SwiperSlide>
    </Swiper>
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
    return {
      proxy,
      onSlideChange,
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
