import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const BASE = "https://bonanza-factory.co.kr";

const assets = [
  // header / footer
  ["/pub/images/logo.svg", "images/logo.svg"],
  ["/pub/images/logo_b.svg", "images/logo_b.svg"],
  ["/pub/images/f_logo.svg", "images/f_logo.svg"],
  ["/pub/images/lang_arrow.svg", "images/lang_arrow.svg"],
  ["/pub/images/lang_arrow_b.svg", "images/lang_arrow_b.svg"],
  ["/pub/images/go_top_arrow_w.svg", "images/go_top_arrow_w.svg"],
  ["/pub/images/family_btn.svg", "images/family_btn.svg"],
  ["/pub/images/certi01.svg", "images/certi01.svg"],
  ["/pub/images/certi02.svg", "images/certi02.svg"],
  ["/pub/images/more_w.svg", "images/more_w.svg"],

  // hero (section1)
  ["/uploaded/board/banner/l_2d28537c08be83bc26524efc079e7fc70.jpg", "images/hero-desktop.jpg"],
  ["/uploaded/board/banner/m_2347f27a9f521b4411a970a79c008fe50.png", "images/hero-mobile.png"],
  ["/pub/images/icon_play.svg", "images/icon_play.svg"],
  ["/pub/images/icon_pause.svg", "images/icon_pause.svg"],

  // products (section2)
  ["/pub/images/m2_img01.svg", "images/m2_img01.svg"],
  ["/pub/images/m2_img02.svg", "images/m2_img02.svg"],
  ["/pub/images/m2_img03.svg", "images/m2_img03.svg"],
  ["/pub/images/m2_img04.svg", "images/m2_img04.svg"],
  ["/pub/images/m2_img05.svg", "images/m2_img05.svg"],
  ["/pub/images/m2_img06.svg", "images/m2_img06.svg"],
  ["/pub/images/m2_img07.svg", "images/m2_img07.svg"],
  ["/pub/images/m2_img08.svg", "images/m2_img08.svg"],
  ["/pub/images/m2_img09.svg", "images/m2_img09.svg"],
  ["/pub/images/m2_more_icon.svg", "images/m2_more_icon.svg"],
  ["/pub/images/m2_navi_arrow.svg", "images/m2_navi_arrow.svg"],

  // business (section3)
  ["/pub/images/m3_txtbg.png", "images/m3_txtbg.png"],
  ["/pub/images/m3_arrow.svg", "images/m3_arrow.svg"],
  ["/pub/images/m3_business01.jpg", "images/m3_business01.jpg"],
  ["/pub/images/m3_business02.jpg", "images/m3_business02.jpg"],
  ["/pub/images/m3_business03.jpg", "images/m3_business03.jpg"],
  ["/pub/images/m3_business04.jpg", "images/m3_business04.jpg"],
  ["/pub/images/m3_business05.jpg", "images/m3_business05.jpg"],
  ["/pub/images/m3_business06.jpg", "images/m3_business06.jpg"],
  ["/pub/images/m3_business01_hover.jpg", "images/m3_business01_hover.jpg"],
  ["/pub/images/m3_business02_hover.jpg", "images/m3_business02_hover.jpg"],
  ["/pub/images/m3_business03_hover.jpg", "images/m3_business03_hover.jpg"],
  ["/pub/images/m3_business04_hover.jpg", "images/m3_business04_hover.jpg"],
  ["/pub/images/m3_business05_hover.jpg", "images/m3_business05_hover.jpg"],
  ["/pub/images/m3_business01_m.jpg", "images/m3_business01_m.jpg"],
  ["/pub/images/m3_business02_m.jpg", "images/m3_business02_m.jpg"],
  ["/pub/images/m3_business03_m.jpg", "images/m3_business03_m.jpg"],
  ["/pub/images/m3_business04_m.jpg", "images/m3_business04_m.jpg"],
  ["/pub/images/m3_business05_m.jpg", "images/m3_business05_m.jpg"],

  // partners marquee (section4)
  ["/uploaded/board/partner/l_a431766b2629e4b9e49a7f67d13320420.png", "images/partners/partner01.png"],
  ["/uploaded/board/partner/l_d68d1b21dbdee0bcb30c7c9998d3d9f70.png", "images/partners/partner02.png"],
  ["/uploaded/board/partner/l_602e40500c3ac67bd24ffd69a334e4c90.png", "images/partners/partner03.png"],
  ["/uploaded/board/partner/l_f6e8d754af28418217bde7242c744af40.png", "images/partners/partner04.png"],
  ["/uploaded/board/partner/l_7a2f870bad6c6b2436639cf21db8a86b0.png", "images/partners/partner05.png"],
  ["/uploaded/board/partner/l_8b0df5a39fba8d4cf81f87aab0a16a850.png", "images/partners/partner06.png"],
  ["/uploaded/board/partner/l_db6c640ecf380cd7b07c2bfb9109912d0.png", "images/partners/partner07.png"],
  ["/uploaded/board/partner/l_64b4f62e67f4c3c29c4bf9f1ec4d03ab0.png", "images/partners/partner08.png"],
  ["/uploaded/board/partner/l_4ac40516f9e225c9da49a6d4c7c6bbad0.png", "images/partners/partner09.png"],
  ["/uploaded/board/partner/l_58b128952145dda3c45e210da3ca09f90.png", "images/partners/partner10.png"],
  ["/uploaded/board/partner/l_3ba5dfb56c073242166d3d5431a0b5720.png", "images/partners/partner11.png"],
  ["/uploaded/board/partner/l_d85c3797702373f53ea5514e3fc260d10.png", "images/partners/partner12.png"],
  ["/uploaded/board/partner/l_7298ad0ac093f63ef7d69e99a88714db0.png", "images/partners/partner13.png"],
  ["/uploaded/board/partner/l_ca6fffa60d8dc905983a3cb3b2bbec750.png", "images/partners/partner14.png"],
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
