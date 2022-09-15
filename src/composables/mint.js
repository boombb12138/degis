import { ethers, BigNumber } from "ethers"; //
import nftABI from "../../nftABI.json";
import { NFTcontractAddress } from "./address";
const mint = async function (mintAmount) {
  if (window.ethereum) {
    const provider = new ethers.providers.JsonRpcProvider(
      "https://api.avax-test.network/ext/bc/C/rpc"
    );
    // const wallet = new ethers.Wallet.fromMnemonic(
    //   "pig candy kid mom organ candy power sound siren category matter kingdom screen crystal problem horror detail devote picture physical shine foot myth bachelor"
    // );
    const signer = provider.getSigner();

    //   创建可写合约
    const contract = new ethers.Contract(NFTcontractAddress, nftABI, signer);
    console.log(contract);

    try {
      const response = await contract.mint(BigNumber.from(mintAmount));
      console.log("response", response);
    } catch (error) {
      console.log(error);
    }
  }
};
export default mint;
