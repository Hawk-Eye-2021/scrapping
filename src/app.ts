import scrapInfobae from "./sources/infobae";
import scrapTwitter from "./sources/twitter";
import dotenv from "dotenv";

dotenv.config();

// scrapInfobae()
scrapTwitter()

// tslint:disable-next-line:no-empty no-bitwise
setInterval(() => {}, 1 << 30);