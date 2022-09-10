// import { ethers } from "ethers";
import connect from "./index";
// import tokenABI from "../../tokenABI.json";
export let accountAdress = "";
export const connectMetamask = async () => {
  const { state } = connect();
  if (state.address == "") {
    try {
      const { ethereum } = window;
      // 检测有没有安装metaMask
      if (!ethereum) {
        alert("请安装MetaMask!");
        return;
      }
      //   连接钱包
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      accountAdress = accounts[0];
      console.log("地址", accounts[0]);
    } catch (error) {
      console.log(error);
    }
  }
};
