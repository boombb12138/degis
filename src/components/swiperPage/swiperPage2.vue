<template>
  <div>
    <img class="bg" src="../../assets/light.png" alt="" />
    <div class="swiper2-title">
      <h1 style="font-size: 40px; text-align: left">
        The Letter from Degis Kingdom<br />
        Our Story Begins
      </h1>
      <span class="swiper2-title-link">
        Click on the envelope to explore
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiala"></use></svg
      ></span>
    </div>
    <div class="swiper2-center">
      <img src="../../assets/信封.png" alt="" />
    </div>
    <div class="footer">
      <span> With the warriors, we can// </span>
      <button class="daoPass">
        <span>Utility: Dao Pass<img src="../../assets/pull.png" alt="" /></span>
      </button>
    </div>
  </div>
</template>

<script>
import "../../assets/iconfont/font_3587223_4ac8o0ager4/iconfont";
import "../../assets/iconfont/font_3587223_4ac8o0ager4/icon.css";
export default {
  setup() {
    return {};
  },
};
</script>
<style scoped>
.bg {
  position: absolute;
  max-width: 100%;
  z-index: -1;
  left: -10px;
  top: 50%;
  transform: translateY(-50%);
}

.swiper2-title {
  position: relative;
  margin-bottom: 40px;
  line-height: 50px;
  font-weight: 900;
  font-size: 60px;
}
.swiper2-title-link {
  font-size: 15px;
  font-weight: 500;
  opacity: 0.7;

  position: absolute;
  left: 340px;
  bottom: -6px;
}
.swiper2-title-pull {
  display: inline-block;
  background-image: url(../../assets/more.png);
  width: 10px;
  height: 10px;
}

/* center */
.swiper2-center {
  text-align: center;
  margin-bottom: 30px;
}
.swiper2-center img {
  display: inline-block;
  vertical-align: text-bottom;
  max-width: 80%;
}

/* footer */
.footer {
  display: flex;
  align-items: center;
}
.footer > span {
  font-size: 16px;
  font-weight: 600;
  opacity: 0.7;
  margin-right: 10px;
}
.daoPass {
  font-size: 16px;
  border: none;
  font-weight: 700;
  border-radius: 5px;
  height: 45px;
  color: #fff;
  background-color: #6645db;

  display: inline-block;
  line-height: 1;
  padding: 8px 12px;
  cursor: pointer;
}
.daoPass img {
  width: 10px;
  height: 10px;
  margin-left: 12px;
}
</style>
