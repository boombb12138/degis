<template>
  <div class="right-side">
    <img src="../../assets/board.png" alt="" />
    <div class="mint-board">
      <h1 class="mint-board-title">MINT BOARD</h1>
      <div class="mint-board-info">
        <div>
          <p class="num" style="line-height: 100px">0</p>
          <p class="word" style="line-height: 55px; font-size: 36px">USER</p>
        </div>
        <div>
          <p class="num">0</p>
          <p class="word">MINT</p>
        </div>
        <div style="margin-right: 0">
          <p class="num">0</p>
          <p class="word">TOTAL</p>
        </div>
      </div>
    </div>
    <h2 class="mint-price">Mint Price : 200 DEG</h2>
    <div class="mint-button">
      <div class="btn1" @click="mint(mintAmount)">MINT SOON</div>
      <!-- <common-btn content="MINT SOON" @click="mint(mintAmount)"></common-btn> -->
      <div class="subbtn btn" @click="subMintAmount">-</div>
      {{ mintAmount }}
      <div class="addbtn btn" @click="addMintAmount">+</div>
    </div>
  </div>
</template>

<script>
// import mint from "../../composables/mint.js";
import { mintNFT } from "../../utils/interact.js";

import { ref } from "vue";
export default {
  components: {},
  setup() {
    let mintAmount = ref(0);
    const mint = async (mintAmount) => {
      const response = await mintNFT(mintAmount);
      console.log("response", response);
    };

    const subMintAmount = () => {
      mintAmount.value--;
      console.log("subMintAmount");
    };
    const addMintAmount = () => {
      mintAmount.value++;
    };
    return { mintAmount, subMintAmount, addMintAmount, mint };
  },
};
</script>
<style scoped>
@font-face {
  font-family: "Grenze_Gotisch";
  src: url("/src/assets/font/Grenze_Gotisch/GrenzeGotisch-VariableFont_wght.ttf");
}

.right-side {
  position: relative;
}
.right-side img {
  border: none;
  vertical-align: text-bottom;
  max-width: 100%;
  height: auto;
}
.mint-board {
  width: 100%;
  text-align: center;
  top: 90px;
  position: absolute;
  font-family: "Grenze_Gotisch", sans-serif !important;
}

.mint-board-title {
  line-height: 75px;
  font-size: 50px;
  font-weight: 700;
  font-family: "Grenze_Gotisch", sans-serif !important;
}

.mint-board-info {
  display: flex;
  justify-content: center;
  font-family: "Grenze_Gotisch", sans-serif !important;
}
.mint-board-info div {
  margin-right: 50px;
}
.mint-board-info div p {
  line-height: 75px;
  font-size: 60px;
  font-weight: 900;
}

.mint-board-info div .num {
  line-height: 100px;
}

.mint-board-info div .word {
  line-height: 55px;
  font-size: 36px;
}

.mint-price {
  text-align: center;
  font-size: 36px;
  line-height: 1;
  font-weight: 600;
  align-items: center;
  font-family: "Grenze_Gotisch", sans-serif !important;
}
.mint-button {
  background-color: #3f2e89;
  border: 5px solid #6645db;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  top: 18px;

  line-height: 35px;
  width: 100%;

  height: 112px !important;
  cursor: pointer;
  font-weight: 700;
  font-size: 30px;
}
.btn {
  width: 60px;
  height: 60px;
  line-height: 60px;
  border: 4px solid #fff;
  border-radius: 5px;

  text-align: center;
  font-weight: 700;
  font-size: 40px;
}

.btn1 {
  text-transform: uppercase;
  background: rgba(103, 88, 140, 0.15);
  border: 4px solid #fff;
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
