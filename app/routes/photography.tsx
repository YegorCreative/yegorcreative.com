import { Nav } from "~/components/Nav";
import { Footer } from "~/components/Footer";
import { useReveal } from "~/hooks/useReveal";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "Photography | YegorCreative" },
  {
    name: "description",
    content:
      "Photography portfolio of Yegor Hambaryan — portraits, landscapes, brand and editorial work.",
  },
];

// iCloud album — Assets/iCloud Photos from Yegor Hambaryan/
const BASE = "/iCloud%20Photos%20from%20Yegor%20Hambaryan";
const PHOTOS: { src: string; alt: string }[] = [
  { src: `${BASE}/APC_0041-hdr.jpg`,                                                              alt: "HDR Photography"     },
  { src: `${BASE}/IMG_3549.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_3559.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_3567-1.jpg`,                                                                 alt: "Photography"         },
  { src: `${BASE}/IMG_3567.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_3570.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_3751.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_4158.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_4183.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_4198.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_4206.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_4233.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_4256.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_4270.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_4290.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_4398.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_4483.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_4503.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_4506.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_4522.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_4550.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_4574.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_4609.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_4611.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_4850.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_5095.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_5129.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_5139.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_5146.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_5189.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_5219-1.jpg`,                                                                 alt: "Photography"         },
  { src: `${BASE}/IMG_5219.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_5229.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_5390.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_5404.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_5408.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_5461.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_5469.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_5505.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_5506.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_5524.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_5639.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_5704.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_5708.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_5765.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_5771.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_5776.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_5974.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_6479.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_6556.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_6644.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_6647.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_6653.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_6655.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_6665.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_6686.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_6699.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_6707.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_6721.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_6724.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_6732.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_6736.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_6759.jpg`,                                                                   alt: "Photography"         },
  { src: `${BASE}/IMG_6917.JPG`,                                                                   alt: "Photography"         },
  { src: `${BASE}/dji_fly_20260323_163906_232_1774306202197_photo_optimized.jpg`,                  alt: "Aerial Photography"  },
  { src: `${BASE}/dji_fly_20260323_163952_235_1774306200678_photo_optimized.jpg`,                  alt: "Aerial Photography"  },
  { src: `${BASE}/dji_fly_20260323_164256_243_1774306197105_photo_optimized.jpg`,                  alt: "Aerial Photography"  },
  { src: `${BASE}/dji_fly_20260323_164448_256_1774306189442_photo_optimized.jpg`,                  alt: "Aerial Photography"  },
  { src: `${BASE}/dji_fly_20260326_150434_70_1774559687703_photo_optimized.jpg`,                   alt: "Aerial Photography"  },
  { src: `${BASE}/dji_fly_20260327_163546_134_1774651069855_photo_optimized.jpg`,                  alt: "Aerial Photography"  },
  { src: `${BASE}/dji_fly_20260327_163758_142_1774651883573_photo_optimized.jpg`,                  alt: "Aerial Photography"  },
  { src: `${BASE}/dji_fly_20260327_164500_169_1774651554603_photo_optimized.jpg`,                  alt: "Aerial Photography"  },
  { src: `${BASE}/dji_fly_20260327_164802_180_1774651911374_photo_optimized.jpg`,                  alt: "Aerial Photography"  },
  { src: `${BASE}/dji_fly_20260329_162220_194_1774822962199_photo_optimized.jpg`,                  alt: "Aerial Photography"  },
  { src: `${BASE}/dji_fly_20260329_162904_212_1774823598953_photo_optimized.jpg`,                  alt: "Aerial Photography"  },
  { src: `${BASE}/dji_fly_20260329_162946_219_1774823598945_photo_optimized.jpg`,                  alt: "Aerial Photography"  },
  { src: `${BASE}/dji_fly_20260402_104946_224_1775152278983_photo_optimized.jpg`,                  alt: "Aerial Photography"  },
  { src: `${BASE}/dji_fly_20260402_105128_235_1775153236232_photo_optimized.jpg`,                  alt: "Aerial Photography"  },
  { src: `${BASE}/dji_fly_20260402_110338_287_1775153291717_photo_optimized.jpg`,                  alt: "Aerial Photography"  },
  { src: `${BASE}/dji_fly_20260402_164532_336_1775173610495_photo_optimized.jpg`,                  alt: "Aerial Photography"  },
  { src: `${BASE}/dji_fly_20260402_164942_353_1775173946269_photo_optimized.jpg`,                  alt: "Aerial Photography"  },
];

export default function PhotographyPage() {
  useReveal();

  return (
    <>
      <Nav />

      <main>
        {/* ── Page hero ─────────────────────────────────────── */}
        <section className="page-hero">
          <div className="container">
            <span className="label">Portfolio</span>
            <h1>
              The <span>Work</span>.
            </h1>
            <p>
              A curated selection of photography spanning portraits, landscapes,
              brand campaigns, and editorial projects.
            </p>
          </div>
        </section>

        {/* ── Masonry gallery ───────────────────────────────── */}
        <section className="gallery-section">
          <div className="container">
            <div className="masonry reveal-stagger">
              {PHOTOS.map((photo, i) => (
                <div key={i} className="masonry-item">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="masonry-overlay">
                    <span>+</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
