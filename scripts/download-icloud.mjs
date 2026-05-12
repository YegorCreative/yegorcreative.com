/**
 * Downloads all photos from an iCloud shared album link.
 * Usage:  node scripts/download-icloud.mjs
 *
 * Photos land in:  Assets/Photos/
 */

import { createWriteStream, mkdirSync } from "fs";
import { pipeline } from "stream/promises";
import path from "path";

const ALBUM_TOKEN = "00424VSWbteHSnF31ltK4pwVA";
const OUT_DIR = new URL("../Assets/Photos/", import.meta.url).pathname;

mkdirSync(OUT_DIR, { recursive: true });

// ── 1. Discover the correct iCloud partition server ─────────────────────────
async function findPartition() {
  for (let n = 0; n <= 66; n++) {
    const host = `p${String(n).padStart(2, "0")}-sharedstreams.icloud.com`;
    const url = `https://${host}/${ALBUM_TOKEN}/sharedstreams/webstream`;
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: "https://www.icloud.com",
        },
        body: JSON.stringify({ streamCtag: null }),
        signal: AbortSignal.timeout(8000),
      });

      if (res.status === 330) {
        // iCloud returns 330 with a redirect host
        const body = await res.json();
        if (body?.["X-Apple-MMe-Host"]) {
          console.log(`Redirected to: ${body["X-Apple-MMe-Host"]}`);
          return body["X-Apple-MMe-Host"].replace(/\/+$/, "");
        }
      }

      if (res.ok) {
        console.log(`Found partition: ${host}`);
        return host;
      }
    } catch {
      // next
    }
  }
  throw new Error("Could not find partition server. Album may be private or expired.");
}

// ── 2. Fetch stream metadata ────────────────────────────────────────────────
async function fetchStream(host) {
  const res = await fetch(
    `https://${host}/${ALBUM_TOKEN}/sharedstreams/webstream`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Origin: "https://www.icloud.com",
      },
      body: JSON.stringify({ streamCtag: null }),
    }
  );
  if (!res.ok) throw new Error(`webstream ${res.status}`);
  return res.json();
}

// ── 3. Fetch download URLs for all photos ──────────────────────────────────
async function fetchAssetURLs(host, photoGuids) {
  const res = await fetch(
    `https://${host}/${ALBUM_TOKEN}/sharedstreams/webasseturls`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Origin: "https://www.icloud.com",
      },
      body: JSON.stringify({ photoGuids }),
    }
  );
  if (!res.ok) throw new Error(`webasseturls ${res.status}`);
  return res.json();
}

// ── 4. Download a single file ───────────────────────────────────────────────
async function download(url, dest) {
  const res = await fetch(url, { signal: AbortSignal.timeout(60_000) });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  await pipeline(res.body, createWriteStream(dest));
}

// ── Main ────────────────────────────────────────────────────────────────────
(async () => {
  console.log("Finding iCloud partition server…");
  const host = await findPartition();

  console.log("Fetching album metadata…");
  const stream = await fetchStream(host);

  const photos = stream.photos ?? [];
  if (!photos.length) {
    console.error("No photos found in album.");
    process.exit(1);
  }
  console.log(`Found ${photos.length} photo(s). Fetching download URLs…`);

  const guids = photos.map((p) => p.photoGuid);
  const assetData = await fetchAssetURLs(host, guids);

  // Build guid → best URL map
  const urlMap = {};
  for (const [guid, derivatives] of Object.entries(assetData.items ?? {})) {
    // Pick the highest-resolution derivative
    const best = Object.values(derivatives).sort(
      (a, b) => (b.width ?? 0) - (a.width ?? 0)
    )[0];
    if (best?.url) urlMap[guid] = best.url;
  }

  console.log(`Downloading to ${OUT_DIR}…`);
  let i = 1;
  for (const photo of photos) {
    const url = urlMap[photo.photoGuid];
    if (!url) {
      console.warn(`  [skip] no URL for ${photo.photoGuid}`);
      continue;
    }

    // Determine extension from URL or caption
    const ext = (photo.caption ?? "").match(/\.(jpe?g|png|heic|webp)$/i)?.[1]
      ?? url.match(/\.(jpe?g|png|heic|webp)/i)?.[1]
      ?? "jpg";

    const filename = `photo-${String(i).padStart(3, "0")}.${ext.toLowerCase()}`;
    const dest = path.join(OUT_DIR, filename);
    process.stdout.write(`  [${i}/${photos.length}] ${filename} … `);
    try {
      await download(url, dest);
      console.log("✓");
    } catch (err) {
      console.log(`✗ ${err.message}`);
    }
    i++;
  }

  console.log("\nDone! Photos saved to Assets/Photos/");
})();
