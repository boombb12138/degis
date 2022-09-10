<template>
  <div class="carouselbox">
    <span>The Founding Warrior of Degis Kingdom</span>
    <!-- <swiper
      :slidesPerView="3"
      :spaceBetween="30"
      :loop="true"
      :loopFillGroupWithBlank="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper-in"
    >
      <swiper-slide>Slide 1</swiper-slide
      ><swiper-slide>Slide 2</swiper-slide> ><swiper-slide>Slide 8</swiper-slide
      ><swiper-slide>Slide 9</swiper-slide>
    </swiper> -->
    <!-- <slot style="z-index=100"></slot> -->
  </div>
</template>

<script>
// import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
export default {
  components: {
    // Swiper,
    // SwiperSlide,
  },
  setup() {
    let founder = [
      { name: "Andy", role: "Founder" },
      { name: "Eric Li", role: "CTO" },
      { name: "Oliver", role: "CFO" },
      { name: "Oliver", role: "CFO" },
      { name: "Oliver", role: "CFO" },
    ];

    return { founder, modules: [Pagination, Navigation] };
  },
};
</script>
<style scoped>
.carouselbox {
  /* height: 270px; */
  position: relative;
  height: 100%;

  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
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

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
