import { ethers, BigNumber } from "ethers"; //
import nftABI from "../../nftABI.json";
import { contractAddress } from "./address";
const mint = async function (mintAmount) {
  if (window.ethereum) {
    const provider = new ethers.providers.JsonRpcProvider(
      "https://api.avax-test.network/ext/bc/C/rpc"
    );
    const signer = provider.getSigner();
    // const myAddress = await signer.getAddress();

    //   创建合约
    const ERC20_ABI = nftABI;
    const contract = new ethers.Contract(contractAddress, ERC20_ABI, provider);
    console.log(contract);
    // myAddress,
    //    signer.address,
    // BigNumber.from(mintAmount)

    const account2 = "0x3e6f79bd8dd4b637b070aac933f648371def1bef";
    const tx = await signer.sendTransaction({
      to: account2,
      value: ethers.utils.parseEther("0.025"),
    });
    tx();
    // const contractWithSigner = contract.connect(signer);
    // const AVAX = ethers.utils.parseUnits("1.0", 18);
    // const tx = contractWithSigner.transfer(myAddress, AVAX);

    try {
      const response = await contract.mint(
        signer.address,
        BigNumber.from(mintAmount)
      );
      console.log("response", response);
    } catch (error) {
      console.log(error);
    }
  }
};
export default mint;
// 改变状态
