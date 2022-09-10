<template>
  <div class="swiperPage1">
    <div class="swiper1-title">
      <h1 style="font-size: 40px; text-align: left">
        Welcome to<br />
        Degis Kingdom
        <i><img src="../../assets/castle.png" alt="" class="castle" /></i>
      </h1>
    </div>
    <div class="paragraph">
      <p style="margin-bottom: 40px">
        The evil Dragon is back. Degis kingdom needs every Degison to join us to
        protect the kingdom.
      </p>
      <p>
        The NFT is a certificate of warriors. By holding the certificate, you
        are officially recognized as a warrior in Degis Kingdom. Every warrior
        is respected and loved by degison and will have privileges and
        governance power
      </p>
    </div>
    <div class="footer">
      <div class="letter"></div>
      <span> Open the letter from Degis Kingdom// </span>
      <button class="story">
        <span>The Story<img src="../../assets/pull.png" alt="" /></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  setup() {
    return {};
  },
};
</script>
<style scoped>
.swiperPage1 {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.swiper1-title {
  position: relative;
  margin-bottom: 40px;
  line-height: 50px;
  font-weight: 900;
  font-size: 60px;
  /* color: #fff; */
}
.swiper1-title > .swiper-slide {
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
.castle {
  position: absolute;
  width: 30px;
  height: 40px;
  margin-left: 5px;
  /* left: 600px;
  top: 365px; */
}
.paragraph {
  width: 550px;
  opacity: 0.7;
  margin-bottom: 30px;
  line-height: 25px;
  font-size: 16px;
}
.footer {
  display: flex;
  align-items: center;
}
.footer > span {
  font-size: 16px;
  font-weight: 600;
  opacity: 0.7;
  margin: 0px 10px;
}
.letter {
  width: 30px;
  height: 30px;
  background-size: contain;
  background-image: url("../../assets/letter.png");
}
.story {
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
.story span img {
  width: 10px;
  height: 10px;
  margin-left: 12px;
}
</style>
