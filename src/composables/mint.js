import { ethers, BigNumber } from "ethers"; //
import nftABI from "../../nftABI.json";
import { contractAddress } from "./address";
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
    const ERC20_ABI = nftABI;
    const contract = new ethers.Contract(contractAddress, ERC20_ABI, signer);
    console.log(contract);

    try {
      const response = await contract.mint(BigNumber.from(mintAmount));
      console.log("response", response);
    } catch (error) {
      console.log(error);
    }

    // 造币
    // const NFTcontract = await ethers.getContractFactory("NFTcontract");
    // const contract = await NFTcontract.attach(
    //   "0x3bDBB40160d450445EDAbceb7CE3b3dCF2C9Cd5B"
    // );
    // await contract.deploy(
    //   "_mockToken",
    //   " 0x3e6f79bd8dd4b637b070aac933f648371def1bef"
    // ); //现在这个地址上面就有代币了

    // await mintContract.deployed();
    // console.log("mintContract deployed to:", mintContract.address);
  }
};
export default mint;
