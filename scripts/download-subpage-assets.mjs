import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const BASE = "https://bonanza-factory.co.kr";

const assets = [
  // hero visuals (svisual)
  ["/pub/images/svisual01.jpg", "images/subpages/svisual-about.jpg"],
  ["/pub/images/svisual0102.jpg", "images/subpages/svisual-subsidiary.jpg"],
  ["/pub/images/svisual0201.jpg", "images/subpages/svisual-compliance.jpg"],
  ["/pub/images/svisual0202.jpg", "images/subpages/svisual-payment.jpg"],
  ["/pub/images/svisual0203.jpg", "images/subpages/svisual-authentication.jpg"],
  ["/pub/images/svisual0204.jpg", "images/subpages/svisual-data.jpg"],
  ["/pub/images/svisual0205.jpg", "images/subpages/svisual-blockchain-ai.jpg"],
  ["/pub/images/svisual0301.jpg", "images/subpages/svisual-news.jpg"],
  ["/pub/images/svisual0302.jpg", "images/subpages/svisual-inquiry.jpg"],

  // about page
  ["/pub/images/about01.png", "images/subpages/about01.png"],
  ["/pub/images/icon_about01.svg", "images/subpages/icon_about01.svg"],
  ["/pub/images/icon_about02.svg", "images/subpages/icon_about02.svg"],
  ["/pub/images/icon_about03.svg", "images/subpages/icon_about03.svg"],
  ["/pub/images/icon_about04.svg", "images/subpages/icon_about04.svg"],
  ["/pub/images/bg_about02.png", "images/subpages/bg_about02.png"],

  // subsidiary page
  ["/pub/images/bg_subsidiary.png", "images/subpages/bg_subsidiary.png"],
  ["/pub/images/icon_link.svg", "images/subpages/icon_link.svg"],
  ["/uploaded/board/partner/l_36a8b1afd2df9fb8ab3f8ad9efccc1880.png", "images/subpages/subsidiary-bonanzalab.png"],
  ["/uploaded/board/partner/l_d168ce932c2d4a3418577d0894bb8e4a0.png", "images/subpages/subsidiary-plugnx.png"],
  ["/uploaded/board/partner/l_ba0c004438d692b2ea164848301bb5cc0.png", "images/subpages/subsidiary-traverse.png"],
  ["/uploaded/board/partner/l_1ce1986daf27340a24de76fe4f76efe60.png", "images/subpages/subsidiary-vice.png"],

  // compliance
  ["/pub/images/img_compliance01.svg", "images/subpages/img_compliance01.svg"],
  ["/pub/images/img_compliance01_m.svg", "images/subpages/img_compliance01_m.svg"],
  ["/pub/images/img_compliance02.svg", "images/subpages/img_compliance02.svg"],
  ["/pub/images/img_compliance03.svg", "images/subpages/img_compliance03.svg"],
  ["/pub/images/img_compliance05.svg", "images/subpages/img_compliance05.svg"],
  ["/pub/images/logo_bonanza.svg", "images/subpages/logo_bonanza.svg"],
  ["/pub/images/icon_compliance_wrap01.svg", "images/subpages/icon_compliance_wrap01.svg"],
  ["/pub/images/icon_compliance_wrap02.svg", "images/subpages/icon_compliance_wrap02.svg"],
  ["/pub/images/icon_compliance_wrap03.svg", "images/subpages/icon_compliance_wrap03.svg"],
  ["/pub/images/bg_compliance_wrap04.jpg", "images/subpages/bg_compliance_wrap04.jpg"],

  // payment
  ["/pub/images/img_payment01.svg", "images/subpages/img_payment01.svg"],
  ["/pub/images/img_payment01_m.svg", "images/subpages/img_payment01_m.svg"],
  ["/pub/images/img_payment02.svg", "images/subpages/img_payment02.svg"],
  ["/pub/images/img_payment03.png", "images/subpages/img_payment03.png"],
  ["/pub/images/img_payment04.svg", "images/subpages/img_payment04.svg"],
  ["/pub/images/logo_bonanza3.svg", "images/subpages/logo_bonanza3.svg"],
  ["/pub/images/logo_coocon.svg", "images/subpages/logo_coocon.svg"],

  // authentication
  ["/pub/images/img_authentication01.svg", "images/subpages/img_authentication01.svg"],
  ["/pub/images/img_authentication01_m.svg", "images/subpages/img_authentication01_m.svg"],
  ["/pub/images/img_authentication02.svg", "images/subpages/img_authentication02.svg"],
  ["/pub/images/img_authentication03.svg", "images/subpages/img_authentication03.svg"],
  ["/pub/images/img_authentication04.svg", "images/subpages/img_authentication04.svg"],
  ["/pub/images/logo_bonanza_plug1.svg", "images/subpages/logo_bonanza_plug1.svg"],
  ["/pub/images/icon_extra_service01.svg", "images/subpages/icon_extra_service01.svg"],
  ["/pub/images/icon_extra_service02.svg", "images/subpages/icon_extra_service02.svg"],

  // data
  ["/pub/images/img_data01.svg", "images/subpages/img_data01.svg"],
  ["/pub/images/img_data01_m.svg", "images/subpages/img_data01_m.svg"],
  ["/pub/images/img_data02.svg", "images/subpages/img_data02.svg"],
  ["/pub/images/img_data03.svg", "images/subpages/img_data03.svg"],
  ["/pub/images/img_data04.svg", "images/subpages/img_data04.svg"],
  ["/pub/images/logo_bonanza_lab.svg", "images/subpages/logo_bonanza_lab.svg"],
  ["/pub/images/img_data_benefit01.svg", "images/subpages/img_data_benefit01.svg"],
  ["/pub/images/img_data_benefit02.svg", "images/subpages/img_data_benefit02.svg"],
  ["/pub/images/img_data_benefit03.svg", "images/subpages/img_data_benefit03.svg"],

  // blockchain & ai
  ["/pub/images/img_blockchain01.svg", "images/subpages/img_blockchain01.svg"],
  ["/pub/images/img_blockchain02.svg", "images/subpages/img_blockchain02.svg"],
  ["/pub/images/logo_traverse.svg", "images/subpages/logo_traverse.svg"],
  ["/pub/images/icon_blockchain01.svg", "images/subpages/icon_blockchain01.svg"],
  ["/pub/images/icon_blockchain02.svg", "images/subpages/icon_blockchain02.svg"],
  ["/pub/images/icon_blockchain03.svg", "images/subpages/icon_blockchain03.svg"],

  // shared dl_half bullet
  ["/pub/images/icon_dotchk.svg", "images/subpages/icon_dotchk.svg"],

  // news board list
  ["/pub/images/icon_file.svg", "images/subpages/icon_file.svg"],
  ["/pub/images/arrow_pageone.svg", "images/subpages/arrow_pageone.svg"],
  ["/pub/images/arrow_pagetwo.svg", "images/subpages/arrow_pagetwo.svg"],

  // inquiry page
  ["/pub/images/bg_inquiry.jpg", "images/subpages/bg_inquiry.jpg"],
  ["/pub/images/ptn_inquiry.svg", "images/subpages/ptn_inquiry.svg"],
  ["/pub/images/txt_inquiry.svg", "images/subpages/txt_inquiry.svg"],
  ["/pub/images/arrow_link.svg", "images/subpages/arrow_link.svg"],
  ["/uploaded/board/partner/l_86c12b2ca62c3d8e82e513e3cf51eb850.png", "images/subpages/inquiry-bonanzafactory.png"],
  ["/uploaded/board/partner/l_3922ffdfe60b88481587cc81d46f8e2e0.png", "images/subpages/inquiry-bonanzalab.png"],
  ["/uploaded/board/partner/l_ae50bc89dab4f86b9454884b96ca20860.png", "images/subpages/inquiry-plugnx.png"],
  ["/uploaded/board/partner/l_484ee1516cb95580b6d235b459e96f210.png", "images/subpages/inquiry-traverse.png"],
  ["/uploaded/board/partner/l_60d3d8740f3f38df9da33fadb112ce940.png", "images/subpages/inquiry-vice.png"],
];

const CONCURRENCY = 4;

async function downloadOne([src, dest]) {
  const url = src.startsWith("http") ? src : BASE + src;
  const destPath = path.join("public", dest);
  await mkdir(path.dirname(destPath), { recursive: true });
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`FAILED ${res.status}: ${url}`);
      return;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(destPath, buf);
    console.log(`OK: ${dest} (${buf.length} bytes)`);
  } catch (err) {
    console.error(`ERROR: ${url} — ${err.message}`);
  }
}

async function run() {
  for (let i = 0; i < assets.length; i += CONCURRENCY) {
    const batch = assets.slice(i, i + CONCURRENCY);
    await Promise.all(batch.map(downloadOne));
  }
  console.log(`Done. ${assets.length} assets processed.`);
}

run();
