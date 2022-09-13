// import { HDNode } from "avalanche/dist/utils/hdnode.js";
import pkg from "avalanche/dist/utils/hdnode.js";
const { HDNode } = pkg;
import { Avalanche, Mnemonic, Buffer } from "avalanche";
// import { EVMAPI, KeyChain } from "avalanche/dist/apis/evm";
import { ethers } from "ethers";

const ip = "api.avax-test.network";
const port = 443;
const protocol = "https";
const networkID = 5;
const avalanche = new Avalanche(ip, port, protocol, networkID);
const cchain = avalanche.CChain();

const mnemonic = Mnemonic.getInstance();
const m =
  "pig candy kid mom organ candy power sound siren category matter kingdom screen crystal problem horror detail devote picture physical shine foot myth bachelor";
const seed = mnemonic.mnemonicToSeedSync(m);

const hdnode = new HDNode(seed);

const keyChain = cchain.newKeyChain();

const cAddresses = [];
const privateKeys = [];
for (let i = 0; i <= 2; i++) {
  const child = hdnode.derive(`m/44'/60'/0'/0/${i}`);
  keyChain.importKey(child.privateKey);
  const cchainAddress = ethers.utils.computeAddress(child.privateKey);
  privateKeys.push(child.privateKey.toString("hex"));
  cAddresses.push(cchainAddress);
}
console.log({ cAddresses, privateKeys });
// {
//     cAddresses: [
//       '0xb4510e66c00770Ca86aC54a0D28B143dB3Bab74f',
//       '0x6CC2d8BAEe5FAa009E261E575F1C6962E8A93d04',
//       '0xA697dE4d19CD2b68Efb59c5c79B33f5079d3187a'
//     ],
//     privateKeys: [
//       '4dd81cee5d7bccca80fc520a606459d9a8722d4e93415ce1a744c92a165e79f8',
//       'c2bb4cf89a82e906cfffab78c5f80b62bfc054f304d77967bdc973d572af0540',
//       '46b1f12a24048dbe8626956750fc2f4dee539a8cfb793eab3d9fd5ba9851332b'
//     ]
//   }
