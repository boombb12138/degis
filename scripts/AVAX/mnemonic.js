import { Mnemonic } from "avalanche";
import pkg from "randomBytes";
const { randomBytes } = pkg;
const mnemonic = Mnemonic.getInstance();
const strength = 256;
const wordlist = mnemonic.getWordlists("english");
const m = mnemonic.generateMnemonic(strength, randomBytes, wordlist);
console.log(m);
//pig candy kid mom organ candy power sound siren category matter kingdom screen crystal problem horror detail devote picture physical shine foot myth bachelor
