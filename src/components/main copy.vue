<template>
  <div id="nuxt">
    <div id="layout">
      <div class="page">
        <!-- 顶部 -->
        <div class="fixed">
          <div class="logo">
            <img src="../assets/logo.png" alt="" />
          </div>
          <div class="tabbar">
            <div class="mint">
              <img src="../assets/box.png" alt="" class="box" />
              <div class="text">Mint your warrior</div>
            </div>
            <a href="">
              <img src="../assets/link1.png" alt="" />
            </a>
            <a href="">
              <img src="../assets/link2.png" alt="" />
            </a>
            <a href="">
              <img src="../assets/link3.png" alt="" />
            </a>
            <a href="">
              <img src="../assets/link4.png" alt="" />
            </a>
          </div>
        </div>
        <!-- 右邊自動轮播图 -->
        <div class="right-slide">
          <Swiper
            :slidesPerView="1"
            :spaceBetween="30"
            :loop="true"
            :centeredSlides="true"
            :pagination="{
              clickable: true,
            }"
            :scrollbar="{ draggable: true }"
            :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
            }"
            :navigation="true"
            :modules="modules"
            class="mySwiper"
          >
            <SwiperSlide class="swiper-slide"
              ><img src="../assets/card.png" alt="" class="role-panel" />
              <img src="../assets/role1.png" alt="" class="role"
            /></SwiperSlide>
            <SwiperSlide class="swiper-slide"
              ><img src="../assets/card.png" alt="" class="role-panel"
            /></SwiperSlide>
            <SwiperSlide class="swiper-slide"
              ><img src="../assets/card.png" alt="" class="role-panel"
            /></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default {
  name: "main-page",
  props: {
    msg: String,
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      Autoplay,
      Navigation,
      Pagination,
      A11y,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.page {
  zoom: 90%;
}

/* 顶部 */
.fixed {
  display: flex;
  position: fixed;
  top: 0;
  box-sizing: border-box;
  /* background-color: rgb(150, 150, 150); */
  padding-top: 50px;
  padding-right: 125px;
  padding-left: 70px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.tabbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tabbar a {
  margin-right: 15px;
}
/* mint */
.box {
  width: 50%;
  height: auto;
  position: absolute;
  top: -20%;
  display: inline-block;
  left: -70px;
  transform: translateX();
}
.mint {
  position: relative;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text {
  background-color: #3f2e89;
  border: 5px solid #6645db;
  box-shadow: 0 10px 20px rgb(0, 0, 0, 50%);
  border-radius: 5px;
  color: white;
  margin-right: 5px;
  position: relative;
  left: -7%;
  line-height: 31px;
  text-align: center;
  padding: 0px 15px;
  z-index: -1;
}

/* 右边自动轮播图 */
.right-slide {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 125px;
  background-color: #fff;
  width: 710px;
  /* width: 380px; */
  /* height: 250px; */
  /* height: 264px; */
}
.mySwiper {
  display: flex;
  box-sizing: content-box;
  width: 100%;
  height: 492px;
  overflow: hidden;
  position: relative;
  margin-left: auto;
  margin-right: auto;

  transform: translate3d(-710px, 0px, 0px);
  transition-duration: 300ms;
}
.swiper-slide {
  position: relative;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;

  width: 710px;
  height: 492px;
  flex-shrink: 0;
  z-index: 100;
}
.swiper-slide .role-panel {
  z-index: 200;
}
.swiper-slide .role {
  /* z-index: 200; */
  position: absolute;
  top: 240px;
  left: 220px;
  height: 220px;
  width: 240px;
  transform: translate(-50%, -50%);
}
</style>
