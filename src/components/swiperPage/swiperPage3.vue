<template>
  <div>
    <div class="swiperPage3-title">
      <h1 style="font-size: 40px; text-align: left">
        The Utility of Degis <br />
        Warriors: Dao Pass
      </h1>
    </div>
    <div class="swiperPage3-center">
      <h3>Utilities</h3>
      <span>
        - Exclusive community channel and roles with Degis alpha and inside
        inf<br />
        - Monthly real time Q&A and update information from Degis Team<br />
        - veDEG boosting：The veDEG amount will be boosted to 1.2 times <br />
        (even more for rare ones) once you get the Dao Pass) <br />
        - What‘s behind? Governance power + yield boosting！<br />
        Stay tuned and let’s share the rewards</span
      >
    </div>
    <div class="footer">
      <span> The establishment of Degis </span>
      <button class="daoPass">
        <span>Degis Team<img src="../../assets/pull.png" alt="" /></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>
<style scoped>
.swiperPage3-title {
  position: relative;
  margin-bottom: 40px;
  line-height: 50px;
  font-weight: 900;
  font-size: 60px;
}

.swiperPage3-center {
  margin-bottom: 30px;
  opacity: 0.7;
  line-height: 180%;
}

.swiperPage3-center h3 {
  margin-bottom: 20px;
}

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
