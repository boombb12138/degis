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
              <div class="text">
                <router-link
                  to="/mint"
                  style="color: #fff; text-decoration: none"
                >
                  Mint your warrior</router-link
                >
                <router-view></router-view>
              </div>
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
          <el-carousel height="720px">
            <el-carousel-item v-for="item in roleData" :key="item">
              <span class="title">{{ item.role }}</span>
              <div class="name">
                <p style="font-size: 36px">{{ item.name }}</p>
                <p style="color: #8586aa; font-size: 18px">Name</p>
              </div>
              <div class="description">
                Description
                <p class="description1">{{ item.description }}</p>
              </div>

              <img :src="item.url2" alt="" class="role" />
              <img :src="item.url" alt="" />
            </el-carousel-item>
            <div class="detail">
              <button
                style="
                  margin-right: 27px;
                  background: rgba(103, 88, 140, 0.53);
                  border-radius: 5px;
                  border: none;
                "
              >
                View On Marketplace
              </button>
              <button
                style="border: 1px solid #ffffff; background: transparent"
              >
                Create your card
              </button>
            </div>
          </el-carousel>
        </div>

        <!-- 左边的垂直手动轮播图 -->
        <!-- <carousel-container></carousel-container> -->
        <!-- <div class="left-slide">
          <el-carousel
            height="200px"
            direction="vertical"
            :autoplay="false"
            trigger="hover"
            ref="carousel"
            class="el-carousel-h"
          >
            <el-carousel-item
              v-for="item in introduce"
              :key="item.index"
              :name="'index' + item.index"
            >
              <div class="center">
                <div v-if="item.index == 0">
                  <swiper-page-1></swiper-page-1>
                </div>
                <div v-else-if="item.index == 1">
                  <swiper-page-2></swiper-page-2>
                </div>
                <div v-else-if="item.index == 2">
                  <swiper-page-3></swiper-page-3>
                </div>
                <div v-else-if="item.index == 3">
                  <swiper-page-4></swiper-page-4>
                </div>
                <div v-else-if="item.index == 4">
                  <swiper-page-5></swiper-page-5>
                </div>
              </div>
              <div class="bottom"></div>
            </el-carousel-item>
          </el-carousel>
        </div> -->
        <div class="left-side">
          <swiper
            :direction="'vertical'"
            :slidesPerView="1"
            :spaceBetween="30"
            :mousewheel="true"
            :pagination="{
              clickable: true,
            }"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide>Slide 1</swiper-slide
            ><swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>
              <carousel-container></carousel-container
            ></swiper-slide>
            <swiper-slide>Slide 4</swiper-slide
            ><swiper-slide>Slide 5</swiper-slide
            ><swiper-slide>Slide 6</swiper-slide
            ><swiper-slide>Slide 7</swiper-slide
            ><swiper-slide>Slide 8</swiper-slide
            ><swiper-slide>Slide 9</swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CarouselContainer from "./CarouselContainer.vue";
import { ref, nextTick } from "vue";

// import swiperPage1 from "./swiperPage/swiperPage1.vue";
// import swiperPage2 from "./swiperPage/swiperPage2.vue";
// import swiperPage3 from "./swiperPage/swiperPage3.vue";
// import swiperPage4 from "./swiperPage/swiperPage4.vue";
// import swiperPage5 from "./swiperPage/swiperPage5.vue";

import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";
export default {
  name: "main-page",
  props: {
    msg: String,
  },
  components: {
    Swiper,
    SwiperSlide,
    CarouselContainer,
  },

  setup() {
    const carousel = ref(null);

    const roleData = [
      {
        url: require("../assets/card.png"),
        url2: require("../assets/role1.png"),
        role: "Role: Art Designer",
        description:
          "Peachy is a superavid fan of peach and she is alsovery talented in art design. Youdonot see her often in the chat asshe is shy, but in all Degis",
        name: "Peachy",
      },
      {
        url: require("../assets/card.png"),
        url2: require("../assets/role1.png"),
        role: "Role: Art Designer",
        description:
          "Peachy is a superavid fan of peach and she is alsovery talented in art design. Youdonot see her often in the chat asshe is shy, but in all Degis",
        name: "Peachy",
      },
      {
        url: require("../assets/card.png"),
        url2: require("../assets/role1.png"),
        role: "Role: Art Designer",
        description:
          "Peachy is a superavid fan of peach and she is alsovery talented in art design. Youdonot see her often in the chat asshe is shy, but in all Degis",
        name: "Peachy",
      },
      {
        url: require("../assets/card.png"),
        url2: require("../assets/role1.png"),
        role: "Role: Art Designer",
        description:
          "Peachy is a superavid fan of peach and she is alsovery talented in art design. Youdonot see her often in the chat asshe is shy, but in all Degis",
        name: "Peachy",
      },
    ];
    const introduce = [
      {
        index: 0,
      },
      {
        index: 1,
      },
      {
        index: 2,
      },
      {
        index: 3,
      },
      {
        index: 4,
      },
    ];
    const handleScroll = function (index) {
      nextTick(() => {
        carousel.value.setActiveItem(index);
      });
      // carousel.value.setActiveItem(index);
      //
      // let _that = carousel.value;
      // let scrollVal = event.wheelDelta || event.detail;
      // _that.scrollBox.time = setTimeout(() => {
      //   scrollVal > 0
      //     ? _that.$refs.carousel.prev()
      //     : _that.$refs.carousel.next();
      // }, 300);
      // if (_that.scrollBox.time) {
      //   clearTimeout(_that.scrollBox.time);
      // }
      //
      // console.log(proxy.devtoolsRawSetupState.introduce);
      // console.log(proxy);
      // let direction = e.deltaY > 0 ? "down" : "up"; //deltaY为正则滚轮向下，为负滚轮向上
      // if (direction == "down" && e.deltaY >= 125) {
      //   //125为用户一次滚动鼠标的wheelDelta的值
      //   if (proxy.initialIndex >= 3) {
      //     proxy.initialIndex = 3;
      //   } else {
      //     proxy.initialIndex += 1;
      //     proxy.setActiveItem(proxy.initialIndex);
      //   }
      // }
      // if (direction == "up" && e.deltaY <= -125) {
      //   if (proxy.initialIndex <= 0) {
      //     proxy.initialIndex = 0;
      //     // this.setActiveItem(0)
      //   } else {
      //     proxy.initialIndex -= 1;
      //     proxy.setActiveItem(proxy.initialIndex);
      //   }
      // }
    };

    return {
      roleData,
      handleScroll,
      carousel,
      introduce,

      modules: [Mousewheel, Pagination],
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
  padding-left: 33px;
  z-index: -1;
}

/* 右边自动轮播图 */
.right-slide {
  position: absolute;
  top: 25%;
  transform: translateY(-50%);
  right: 125px;
  background-color: #fff;
  width: 710px;
}
.right-slide .el-carousel {
  box-sizing: content-box;
  width: 720px;
  height: 550px;
  overflow: hidden;
  position: absolute;
  transition-duration: 300ms;
}
.right-slide :deep(.el-carousel__container) {
  /* height: 720px; */
  display: flex !important;
  justify-content: center;
  align-items: center;
}
.right-slide .el-carousel-item {
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
.el-carousel-item .role-panel {
  z-index: 200;
}
.el-carousel-item .title {
  position: absolute;
  top: 25%;
  left: 125px;
}
:deep(.role) {
  position: absolute;
  top: 20%;
  left: 125px;
  width: 203px;
}
:deep(.title) {
  position: absolute;
  top: 45%;
  left: 20%;
  color: #fff;
}

.right-slide .name {
  position: absolute;
  top: 20%;
  right: 20%;
  color: #fff;
  text-align: right;
}
.right-slide .description {
  position: absolute;
  top: 30%;
  right: 20%;
  color: #fff;
  width: 250px;
  height: 155px;
  font-size: 24px;
}
.right-slide .description1 {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.71);
  margin-top: 5px;
}
/* 不显示左右 */
:deep(.el-carousel__arrow) {
  display: none;
}
/* 下方按钮 */
.right-slide :deep(.el-carousel__indicators) {
  display: none !important;
}
.right-slide .detail {
  position: absolute;
  top: 67%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.right-slide .detail button {
  width: 300px;
  height: 55px;
  /* background: rgba(103, 88, 140, 0.53); */
  border-radius: 5px;
  text-transform: uppercase;
  color: #fff;
  font-weight: 700;
  text-align: JUSTIFIED;
  line-height: 30px;
}

/* 左边手动轮播图 */
/* .left-slide {
  position: absolute;
  top: 25%;
  left: 70px;
  background-color: green;
  width: 723px;
  height: 500px;
}
.left-slide .el-carousel-h {
  height: 500px;
}
:deep(.el-carousel-h > .el-carousel__container) {
  height: 500px !important;
}
:deep(.el-carousel-h .el-carousel__indicators--vertical) {
  left: 0 !important;
  top: 50%;
  transform: translateY(-50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50px;
}
:deep(.el-carousel-h .el-carousel__indicators--vertical li) {
  padding: 10px 0px;
}
.left-slide .el-carousel-h :deep(.el-carousel__button) {
  width: 12px;
  height: 12px;
  border: 1px solid #fff;
  border-radius: 50%;
  background-color: transparent;
}
.el-carousel-h :deep(.el-carousel__indicator.is-active button) {
  border: none;
  background-image: url("../assets/joy.png");
  width: 32px;
  height: 32px;
  background-color: transparent;
} */
.left-side {
  position: relative;
  height: 164px;
  width: 446px;
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

.swiper-v {
  background: #eee;
}
.mySwiper2 .swiper-h {
  overflow: hidden;
  width: 437px !important;
}
.mySwiper2 .swiper-wrapper {
  width: 437px !important;
}
.mySwiper2 .swiper-slide {
  width: 110px !important;
}
:deep(.mySwiper2 .swiper-h .swiper-slide .rolecard) {
  width: 110px !important;
  border: 1px solid blue;
}
</style>
