import { fa } from "element-plus/es/locale";

require("dotenv").config();
const key = process.env._PINATA_KEY;
const secret = process.env._PINATA_SECRET;

const axios = require("axios");

// metadata就是JSONBody
export const pinJSONToIPFS = async (JSONBody) => {
  const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
  return axios
    .post(url, JSONBody, {
      headers: {
        pinata_api_key: key,
        pinata_secret_api_key: secret,
      },
    })
    .then(function (response) {
      return {
        success: true,
        // 请求成功就返回元数据的固定位置
        pinataUrl:
          "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash(),
      };
    })
    .catch(function (error) {
      console.log(error);
      return {
        success: false,
        message: error.message,
      };
    });
};
