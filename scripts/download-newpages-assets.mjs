import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const BASE = "https://bonanza-factory.co.kr";

const assets = [
  // TranSight (compliance's second product tab)
  ["/pub/images/img_tranSight01.svg", "images/subpages/img_transight01.svg"],
  ["/pub/images/img_tranSight01_m.svg", "images/subpages/img_transight01_m.svg"],
  ["/pub/images/img_tranSight02.svg", "images/subpages/img_transight02.svg"],
  ["/pub/images/img_tranSight03.svg", "images/subpages/img_transight03.svg"],
  ["/pub/images/img_tranSight04.svg", "images/subpages/img_transight04.svg"],

  // Extra (payment's addon services tab)
  ["/pub/images/img_extra01.svg", "images/subpages/img_extra01.svg"],
  ["/pub/images/img_extra02.svg", "images/subpages/img_extra02.svg"],
  ["/pub/images/img_extra03.svg", "images/subpages/img_extra03.svg"],
  ["/pub/images/img_extra04.svg", "images/subpages/img_extra04.svg"],
  ["/pub/images/img_extra05.svg", "images/subpages/img_extra05.svg"],
  ["/pub/images/img_extra06.svg", "images/subpages/img_extra06.svg"],
  ["/pub/images/logo_bonanza2.svg", "images/subpages/logo_bonanza2.svg"],

  // Document (authentication's e-document tab)
  ["/pub/images/img_document01.svg", "images/subpages/img_document01.svg"],
  ["/pub/images/img_document01_m.svg", "images/subpages/img_document01_m.svg"],
  ["/pub/images/img_document02.svg", "images/subpages/img_document02.svg"],
  ["/pub/images/img_document03.svg", "images/subpages/img_document03.svg"],
  ["/pub/images/img_document04.svg", "images/subpages/img_document04.svg"],
  ["/pub/images/logo_bonanza_plug.svg", "images/subpages/logo_bonanza_plug.svg"],
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
