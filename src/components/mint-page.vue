<template>
  <div class="mint-page">
    <div class="head">
      <div class="head-left">
        <div class="mintlogo"></div>
        <h1 class="mintTitle">Degis NFT is Minting !</h1>
      </div>
      <div class="right-top-btns">
        <button
          @click="connectMetamaskWallet"
          class="connectWalletBtn"
          ref="connectBtn"
        >
          {{ connectBtnText }}
        </button>
        <button class="core">
          <h3>CORE</h3>
          <img src="../assets/CORE.png" alt="" />
        </button>
      </div>
    </div>
    <div class="body">
      <div class="left">
        <left-side></left-side>
      </div>
      <div class="right">
        <right-side></right-side>
      </div>
    </div>
  </div>
</template>

<script>
import connect from "../composables/index.js";

import leftSide from "./mint/left-side.vue";
import rightSide from "./mint/right-side.vue";
import { accountAdress } from "../composables/connectMetamask.js";
import { addWalletListener } from "../composables/connectMetamask.js";

import { ref } from "vue";
export default {
  components: {
    leftSide,
    rightSide,
  },
  setup() {
    let connectBtnText = ref("CONNECT YOUR WALLET");

    const { connectMetamask } = connect();
    const connectMetamaskWallet = async () => {
      await connectMetamask();
      console.log("--", accountAdress);
      connectBtnText.value =
        accountAdress.slice(0, 4) + "..." + accountAdress.slice(-4);
    };
    addWalletListener();
    return {
      leftSide,
      rightSide,
      connectMetamaskWallet,
      accountAdress,
      connectBtnText,
    };
  },
};
</script>
<style scoped>
.mint-page {
  z-index: 300;
  zoom: 75%;
  color: #fff;
  width: 1920px;
  height: 1080px;
  background: #191433;
  padding-top: 160px;
}
.head {
  position: relative;
  padding-left: 120px;
  padding-right: 120px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.head-left {
  display: flex;
  justify-content: center;
  align-items: center;
}
.mintTitle {
  font-weight: 900;
  font-size: 60px;
  line-height: 85px;
  display: flex;
  z-index: 9999;
  position: relative;
}
.mintlogo {
  width: 90px;
  height: 90px;
  margin-right: 27px;
  background-image: url("../assets/主页.png");
  background-size: cover;
}

.connectWalletBtn {
  background-color: #6645db;
  border: #6645db;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 700;
  color: white;
  height: 50px;
  padding: 10px 20px;
}
/* 主要部分 */
.body {
  position: relative;
  padding-left: 214px;
  /* background-color: gray; */
}
.left {
  width: 900px;
  position: relative;
  /* background-color: #fff; */
}
.right {
  width: 700px;
  left: 1130px;
  top: 0;
  position: absolute;
  /* background-color: pink; */
}
.right-top-btns {
  display: flex;
}
.core {
  background: #d8d8d8;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  margin-left: 20px;
  width: 230px;
  cursor: pointer;
  color: #fff;
}
</style>
