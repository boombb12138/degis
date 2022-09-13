require("dotenv").config();
import { ethers, BigNumber } from "ethers";
// import nftABI from "../../nftABI.json";
import { contractAddress } from "@/composables/address";
import { address } from "@/composables/address";
// import { pinJSONToIPFS } from "./pinata";
import tokenABI from "../../tokenABI.json";

const contractABI = tokenABI;
var obj = { something: window };

// 消除window对象报错
var postMessageTemp = window.postMessage;
window.postMessage = function (message, targetOrigin, transfer) {
  function cloneObject(obj) {
    var clone = {};
    for (var i in obj) {
      if (typeof obj[i] == "object" && obj[i] != null) {
        if ("" + obj[i] == "[object Window]") {
          delete obj[i];
          continue;
        }

        clone[i] = cloneObject(obj[i]);
      } else clone[i] = obj[i];
    }
    return clone;
  }

  // to avoid weird error causing by window object by JSON.stringify() execution.
  var clone = cloneObject(message);

  postMessageTemp(JSON.parse(JSON.stringify(clone)), targetOrigin, transfer);
};

window.postMessage(obj, "*");

console.log("We do not have any errors.");

export const mintNFT = async (mintAmount) => {
  // 处理错误
  // 去掉首尾的空格 如果有一个为空
  //   if (url.trim() == "" || name.trim() == "" || description.trim() == "") {
  //     return {
  //       success: false,
  //       status: "在mint前请确认所有的区域都完成了",
  //     };
  //   }

  //   // 元数据
  //   const metadata = tokenABI;

  //   //将元数据上传到IPFS 获取tokenURI
  //   const pinataResponse = await pinJSONToIPFS(metadata); //将pinJSONToIPFS请求返回的对象存储在对象中
  //   // 如果请求失败
  //   if (!pinataResponse.success) {
  //     return {
  //       success: false,
  //       status: "oops!上传tokenUri的时候出了问题",
  //     };
  //   }
  //   // 请求成功pinataResponse中有元数据的固定位置
  //   const tokenUri = pinataResponse.pinataUrl;
  //   "https://api.avax-test.network/ext/bc/C/rpc"
  let network = {
    chainId: 43113,
    name: "Fuji(C-Chain)",
    url: `https://api.avax-test.network/ext/bc/C/rpc`,
  };
  const provider = new ethers.providers.Web3Provider(window.ethereum, network);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(contractAddress, contractABI, signer);
  console.log(contract);

  await contract.mint(address, BigNumber.from(mintAmount));
  //   交易
  const Transfer = {
    from: address, //交易的签名者也就是用户
    to: contractAddress, //收件人的地址也就是合约
    amount: mintAmount,
  };

  //   要求元掩码对交易进行签名
  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [Transfer],
    });
    return {
      success: true,
      status: `交易成功` + txHash,
    };
  } catch (error) {
    return {
      success: false,
      status: "出错了",
    };
  }
};

// 创建wallet
// 从助记词创建wallet对象
//   const wallet = new ethers.Wallet.fromMnemonic(
//     "pig candy kid mom organ candy power sound siren category matter kingdom screen crystal problem horror detail devote picture physical shine foot myth bachelor"
//   );

//   创建可写合约
