<template>
  <div class="left-side">
    <img src="../../assets/board2.png" alt="" />
    <div class="left-side-content">
      <h1 class="slogan">Dynamic NFTs for loyal degisons !</h1>
      <div class="left-side-center">
        <img src="../../assets/transparent.png" alt="" />

        <div class="left-side-center-btns">
          <div class="btnLiner">0 Days 0 : 0 : 0 End</div>
          <div class="btnBottom">
            <common-btn
              content="
                Approve DEG
                "
              style="margin-bottom: 5px"
            ></common-btn>
            <common-btn
              content="
                Not on Allowlist
              "
            ></common-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import commonBtn from "./btn/common-btn.vue";

export default {
  components: { commonBtn },
  setup() {
    return {};
  },
};
</script>
<style scoped>
@font-face {
  font-family: "Grenze_Gotisch";
  src: url("/src/assets/font/Grenze_Gotisch/GrenzeGotisch-VariableFont_wght.ttf");
}
.left-side img {
  display: inline-block;
  vertical-align: text-bottom;
  max-width: 100%;
}
.left-side h1 {
  line-height: 75px;
  font-size: 50px;
  font-family: "Grenze_Gotisch", sans-serif !important;
  margin-bottom: 30px;
}
.left-side-content {
  width: 100%;
  text-align: center;

  position: absolute;
  top: 75px;
}

.left-side-center {
  display: flex;
  justify-content: center;
}
.left-side-center img {
  margin-right: 20px;
}
.left-side-center-btns {
  margin-top: 20px;
}

.btnLiner {
  margin-bottom: 25px;
  text-transform: uppercase;
  background: linear-gradient(
      262.49deg,
      rgba(133, 55, 251, 0.9) -44.82%,
      rgba(51, 58, 223, 0.9) -14.27%,
      rgba(64, 40, 109, 0.9) 45.92%,
      rgba(59, 4, 176, 0.9) 101.47%
    ),
    rgba(100, 21, 255, 0.69) !important;
  border: 4px solid #8537fb;
  border-radius: 5px;

  width: 360px;
  height: 60px;
  font-weight: 700;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>
