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

// export const addWalletListener = async () => {
//   if (window.ethereum) {
//     // 监听钱包中的状态更改
//     // 当用户连接钱包、断开或切换账户时 能监听到
//     window.ethereum.on("accountsChanged", (accounts) => {
//       if (accounts.length > 0) {
//         setWallet(accounts[0]);
//       } else {
//         console.log("请点击右上角连接钱包按钮");
//       }
//     });
//   } else {
//     // 如果用户没安装小狐狸
//     alert("请安装元掩码");
//   }
// };
