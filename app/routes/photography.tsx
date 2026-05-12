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

// All portfolio photos uploaded to Assets/
const PHOTOS: { src: string; alt: string }[] = [
  { src: "/Asset%201.png",                   alt: "Portrait"             },
  { src: "/Asset2.png",                      alt: "Creative work"        },
  { src: "/Asset%203.png",                   alt: "Photography"          },
  { src: "/Asset%204.png",                   alt: "Brand photography"    },
  { src: "/Asset5.png",                      alt: "Editorial"            },
  { src: "/Asset%206.png",                   alt: "Landscape"            },
  { src: "/Asset%207.png",                   alt: "Portrait"             },
  { src: "/Asset%209.png",                   alt: "Creative direction"   },
  { src: "/Asset10.png",                     alt: "Photography"          },
  { src: "/Asset11.png",                     alt: "Brand"                },
  { src: "/Asset12.png",                     alt: "Editorial"            },
  { src: "/Asset%2013.png",                  alt: "Portrait"             },
  { src: "/Asset%2014.png",                  alt: "Landscape"            },
  { src: "/Asset%2015.png",                  alt: "Creative work"        },
  { src: "/Asset%2020.png",                  alt: "Brand photography"    },
  { src: "/Asset%2021.png",                  alt: "Editorial"            },
  { src: "/Asset%2022.png",                  alt: "Portrait"             },
  { src: "/Asset%2023.png",                  alt: "Photography"          },
  { src: "/Asset%2024.png",                  alt: "Landscape"            },
  { src: "/Asset%2025.png",                  alt: "Creative direction"   },
  { src: "/Asset26.png",                     alt: "Brand"                },
  { src: "/Asset27.png",                     alt: "Portrait"             },
  { src: "/Asset28.png",                     alt: "Editorial"            },
  { src: "/Asset%2029.png",                  alt: "Photography"          },
  { src: "/Asset%2030.png",                  alt: "Landscape"            },
  { src: "/Asset%2031.png",                  alt: "Creative work"        },
  { src: "/portfolio.png",                   alt: "Portfolio"            },
  { src: "/portfolioVertical.png",           alt: "Portfolio vertical"   },
  { src: "/photo_2021-05-31_17-21-49.png",   alt: "Photography"          },
  { src: "/20181020215640_IMG_5003.png",      alt: "Photography"          },
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
