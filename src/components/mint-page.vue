<template>
  <div>
    <button @click="connectWallet">Connect your wallet</button>
  </div>
</template>

<script>
export default {
  setup() {
    const connectWallet = async function () {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts);
    };
    return { connectWallet };
  },
};
</script>
<style scoped></style>
