<template>
  <div id="nuxt">
    <div id="layout">
      <div class="page" ref="carousel">
        <!-- 顶部 -->
        <div class="fixed">
          <div class="logo">
            <img src="../assets/logo.png" alt="" />
          </div>
          <div class="main-tabbar">
            <div class="mint">
              <img src="../assets/box.png" alt="" class="box" />
              <div class="text1">
                <button @click="jumpToMint">Mint your warrior</button>
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
            class="mySwiper-out"
          >
            <swiper-slide><swiper-page-1></swiper-page-1></swiper-slide>
            <swiper-slide><swiper-page-2></swiper-page-2></swiper-slide>
            <swiper-slide><swiper-page-3></swiper-page-3></swiper-slide>

            <swiper-slide class="page4Slide">
              <span>The Founding Warrior of Degis Kingdom</span>
              <swiper
                :slidesPerView="3"
                :slidesPerGroup="1"
                :spaceBetween="30"
                :loop="true"
                :loopFillGroupWithBlank="false"
                :modules="modules"
                :autoplay="{
                  delay: 3000,
                  disableOnInteraction: false,
                }"
                class="mySwiper-in"
              >
                <swiper-slide v-for="item in founder" :key="item.index">
                  <div class="imageBox">
                    <img :src="item.url" alt="" />
                  </div>
                  <div class="mySwiper-in-title">
                    <p>{{ item.name }}</p>
                    <p>{{ item.role }}</p>
                  </div>
                </swiper-slide>
              </swiper>
            </swiper-slide>
            <swiper-slide><swiper-page-5></swiper-page-5></swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import CarouselContainer from "./CarouselContainer.vue";
import { ref, nextTick } from "vue";
// import { useRouter } from "vue-router";

import swiperPage1 from "./swiperPage/swiperPage1.vue";
import swiperPage2 from "./swiperPage/swiperPage2.vue";
import swiperPage3 from "./swiperPage/swiperPage3.vue";
// import swiperPage4 from "./swiperPage/swiperPage4.vue";
import swiperPage5 from "./swiperPage/swiperPage5.vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Mousewheel, Autoplay, Pagination } from "swiper";
import { useRouter } from "vue-router";
export default {
  name: "main-page",
  props: {
    msg: String,
  },
  components: {
    Swiper,
    SwiperSlide,
    swiperPage1,
    swiperPage2,
    swiperPage3,
    // swiperPage4,
    swiperPage5,
    // CarouselContainer,
  },

  setup() {
    const carousel = ref(null);

    const router = useRouter();

    const roleData = [
      {
        url: require("../assets/card.png"),
        url2: require("../assets/role1.png"),
        role: "Role: Leader of Warriors",
        description:
          "Andy is the leader of the warriors. He is always full of enthusiasm and ready to raise his shield to protect the kingdom and all Degisons!",
        name: "Andy",
      },
      {
        url: require("../assets/card.png"),
        url2: require("../assets/Zixin.png"),
        role: "Role: Art Designer",
        description:
          "Peachy is a superavid fan of peach and she is alsovery talented in art design. Youdonot see her often in the chat asshe is shy, but in all Degis",
        name: "Peachy",
      },
      {
        url: require("../assets/card.png"),
        url2: require("../assets/Eric.png"),
        role: "Role: Tech Lead",
        description:
          "Eric is a big big tech fan. He does not talk a lot but he is really reliable in work. Without his knowledge and dedication, there will be no Degis Kingdom.",
        name: "Eric",
      },
      {
        url: require("../assets/card.png"),
        url2: require("../assets/Theo.png"),
        role: "Role: Engineer",
        description:
          "Theo is the engineer of Degis Kingdom. He is not a very sociable kind of person, but if you approach him, you will find out how friendly and interesting he is.",
        name: "Theo",
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
    let founder = [
      {
        name: "Andy",
        role: "Founder",
        index: 0,
        url: require("../assets/role1.png"),
      },
      {
        name: "Eric Li",
        role: "CTO",
        index: 1,
        url: require("../assets/Eric.png"),
      },
      {
        name: "Oliver",
        role: "CFO",
        index: 2,
        url: require("../assets/Oliver.png"),
      },
      {
        name: "Serllin",
        role: "Chief Data Scientist",
        index: 3,
        url: require("../assets/Serllin.png"),
      },
      {
        name: "Pero",
        role: "CMO",
        index: 4,
        url: require("../assets/Pero.png"),
      },
      {
        name: "Theo",
        role: "Smart Contract Developer",
        index: 5,
        url: require("../assets/Theo.png"),
      },
      {
        name: "Andrew",
        role: "Head of BD",
        index: 6,
        url: require("../assets/Andrew.png"),
      },
      {
        name: "LOU",
        role: "Product Manager",
        index: 7,
        url: require("../assets/LOU.png"),
      },
      {
        name: "Zixin",
        role: "Designer",
        index: 8,
        url: require("../assets/Zixin.png"),
      },
      {
        name: "Max",
        role: "Community Manager",
        index: 9,
        url: require("../assets/Max.png"),
      },
    ];
    const jumpToMint = function () {
      // 点击路由跳转 注意事件要被触发
      router.push("/mint");
      // window.open("http://localhost:8080/#/mint", "_blank");
    };
    return {
      roleData,
      handleScroll,
      carousel,
      introduce,
      swiperPage1,
      swiperPage2,
      swiperPage3,
      // swiperPage4,
      swiperPage5,
      founder,
      jumpToMint,
      modules: [Autoplay, Mousewheel, Pagination],
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
  width: 1920px;
  height: 1080px;
  display: flex;
  background-color: #191433;
}
@font-face {
  font-family: "Grenze_Gotisch";
  src: url("/src/assets/font/Grenze_Gotisch/GrenzeGotisch-VariableFont_wght.ttf");
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
.main-tabbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.main-tabbar a {
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

.text1 {
  background-color: #3f2e89;
  border: 5px solid #6645db;
  box-shadow: 0 10px 20px rgb(0, 0, 0, 50%);
  border-radius: 5px;
  color: white;
  text-align: center;
  padding: 10px 30px;
  margin-right: 5px;
  cursor: pointer;
}

.text1 button {
  color: white;
  border: none;
  background: transparent;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
}

/* 右边自动轮播图 */
.right-slide {
  position: absolute;
  top: 25%;
  transform: translateY(-50%);
  right: 125px;
  background-color: #fff;
  width: 710px;
  flex-shrink: 1;
  font-family: "Grenze_Gotisch" !important;
}
.right-slide .el-carousel {
  box-sizing: content-box;
  width: 720px;
  height: 550px;
  overflow: hidden;
  position: absolute;
  transition-duration: 300ms;
  font-family: "Grenze_Gotisch" !important;
}
.right-slide :deep(.el-carousel__container) {
  /* height: 600px !important; */
  display: flex !important;
  justify-content: center;
  align-items: center;
  font-family: "Grenze_Gotisch" !important;
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
  opacity: 0.8;
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
  opacity: 0.7;
  font-size: 22px;
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
  right: 17%;
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
.left-side {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 520px;
  width: 670px;
  background: transparent;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #fff;
  margin: 0;
  padding: 0;
  flex-shrink: 0;
}

.mySwiper-out {
  width: 100%;
  height: 100%;
  padding-left: 200px;
}

.mySwiper-out > .swiper-slide {
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.mySwiper-out > .swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
:deep(.left-side
    .swiper-pagination-vertical.swiper-pagination-bullets, .swiper-vertical
    > .swiper-pagination-bullets) {
  left: 10px;
  /* margin-right: 80px; */
  width: 50px;
  justify-content: center;
  align-items: center;
}
:deep(.left-side
    .swiper-pagination-vertical.swiper-pagination-bullets, .swiper-vertical
    > .swiper-pagination-bullets
    span) {
  /* display: block; */
  display: flex;
  flex-direction: column;
  text-align: center;
  vertical-align: middle;
  margin-left: 75px;
}
:deep(.swiper-vertical > .swiper-pagination-bullets .swiper-pagination-bullet) {
  /* width: 10px;
  height: 10px; */
  background-color: transparent;
  border: 2px solid #fff;
}
:deep(.left-side .swiper-pagination-vertical .swiper-pagination-bullet-active) {
  background-image: url("../assets/joy.png");
  background-size: 32px;
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
}
:deep(.page4Slide) {
  display: block;
}
:deep(.page4Slide span) {
  font-weight: 900;
  font-size: 50px;
  line-height: 125%;
}
:deep(.mySwiper-in) {
  margin-top: 30px;
  padding: 10px 0;
  height: 250px;
  position: relative;
}
:deep(.mySwiper-in .swiper-wrapper > .swiper-slide) {
  text-align: center;
  font-size: 18px;
  background: transparent;
  border: 1px solid #6645db;
  border-radius: 20px;
  width: 190px !important;
  margin-right: 15px !important;

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
.imageBox {
  position: absolute;
  width: 129px;
  height: 108px;
  left: 242px;
  top: 24px;
  background-color: transparent;
  /* background-image: url(); */
}

:deep(.imageBox img) {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
:deep(.mySwiper-in-title) {
  position: absolute;
  top: 150px;
}
</style>
