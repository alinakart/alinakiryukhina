export const site = {
  name: "Alina Kiryukhina",
  title: "Alina Kiryukhina | Artist & Painter",
  tagline: "Artist & Painter",
  email: "alina.kiryukhina.art@gmail.com",
  phone: "+7 996 778-10-39",
  location: "Saint Petersburg, Russia",
  instagram: "https://www.instagram.com/",
  description:
    "Fine artist and painter Alina Kiryukhina — portraits, figurative painting, and studies grounded in classical training from the Repin Academy of Arts.",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Alina" },
  { href: "/figurative", label: "Academic Training" },
  { href: "/portraits", label: "Commissioned portraits and genre paintings" },
  { href: "/studies", label: "Still Life" },
  { href: "/about-the-work", label: "About the Work" },
  { href: "/feature", label: "Feature" },
  { href: "/contact", label: "Contact" },
] as const;

export const heroSlides: {
  src: string;
  alt: string;
  objectPosition?: string;
}[] = [
  {
    src: "/artwork/site/hero/dad-artwork.jpg",
    alt: "Figurative painting of a man drinking from a bucket in winter",
    objectPosition: "center top",
  },
  {
    src: "/artwork/site/hero/mc-portrait.jpg",
    alt: "Seated portrait with red tapestry and pomegranates",
  },
  {
    src: "/artwork/site/hero/war-art.jpg",
    alt: "Figurative commemorative painting with veterans and children",
  },
  {
    src: "/artwork/site/hero/anton-artwork.jpg",
    alt: "Anton’s artwork — two figures resting in a grassy landscape",
    objectPosition: "center 48%",
  },
  {
    src: "/artwork/site/hero/still-life.jpg",
    alt: "Classical still life with fruit and glassware",
  },
];

export const categories = [
  {
    href: "/portraits",
    label: "Commissioned portraits and genre paintings",
    src: "/artwork/site/portraits/mc-portrait.jpg",
    alt: "Seated portrait painting",
  },
  {
    href: "/figurative",
    label: "Academic Training",
    src: "/artwork/site/figurative/dad-artwork.jpg",
    alt: "Figurative painting sample",
  },
  {
    href: "/studies",
    label: "Still Life",
    src: "/artwork/site/studies/still-life-1.jpg",
    alt: "Still life study sample",
  },
];

export const intro = {
  heading: "Alina Kiryukhina Artist & Painter",
  body: "Classically trained at the I.E. Repin Saint Petersburg Academy of Arts, Alina works in portraiture and figurative painting with a focus on atmosphere, memory, and the quiet weight of everyday human moments.",
};

export const featureLinks = [
  {
    domain: "1937china.com",
    title: "俄罗斯胜利纪念馆 · 美术作品展",
    titleEn: "Russian Victory Memorial Museum — Art Exhibition",
    excerpt:
      "Exhibition of Russian art works presented through the Russian Victory Memorial Museum collection in China.",
    slides: [
      {
        href: "https://www.1937china.com/kzgdata/clzl/ztzl/russia-art/",
        image: "/artwork/site/figurative/war-art.jpg",
        imageAlt:
          "Commemorative painting featured in Russian victory art exhibitions",
      },
    ],
  },
  {
    domain: "gallerix.ru",
    title: "Алина Кирюхина",
    titleEn: "Alina Kiryukhina on Gallerix",
    excerpt:
      "Artclub Gallerix profile — paintings, albums, exhibitions, and publications from Saint Petersburg.",
    slides: [
      {
        href: "https://in.gallerix.ru/alinak",
        image: "/artwork/site/studies/still-life-1.jpg",
        imageAlt: "Still life painting from Alina’s Gallerix portfolio",
      },
    ],
  },
  {
    domain: "beriozkagallery.ru",
    title: "Кирюхина Алина",
    titleEn: "Alina Kiryukhina at Beriozka Gallery",
    excerpt:
      "Artist page at Beriozka Gallery — education, exhibitions, and the childhood memory behind Father.",
    slides: [
      {
        href: "https://beriozkagallery.ru/kiryukhinaalina",
        image: "/artwork/site/figurative/dad-artwork.jpg",
        imageAlt: "Father — painting featured on the Beriozka Gallery artist page",
      },
    ],
  },
] as const;

export const academArtFeature = {
  domain: "academart.com",
  title: "Kiryukhina A",
  titleEn: "4th year study, Repin Academy — AcademArt",
  excerpt:
    "Academy studies from Alina’s fourth year at the I.E. Repin Institute, presented on AcademArt.",
  slides: [
    {
      href: "https://academart.com/works/kiryukhina-a?from=%2Facademy%2F3520",
      image: "/artwork/site/figurative/academart-figure-drawing.jpg",
      imageAlt: "Academy figure drawing by Alina Kiryukhina on AcademArt",
      objectPosition: "center 28%",
    },
    {
      href: "https://academart.com/works/kiryukhina-a-4?from=%2Facademy%2F3520",
      image: "/artwork/site/figurative/academart-green-portrait.jpg",
      imageAlt:
        "Portrait of a girl on a green background by Alina Kiryukhina on AcademArt",
      objectPosition: "center top",
    },
  ],
} as const;

export const aboutTheWork = {
  heading: "About The Work",
  paragraphs: [
    "Having a portrait painted is a collaborative process\nbetween sitter and artist.",
    "The finished work becomes a lasting record of that encounter —\nsomething with a life of its own,\nand a focal point for years to come.",
  ],
  href: "/about-the-work",
  image: "/artwork/site/process/about-the-work-banner-3.jpg",
};

export const aboutAlina = {
  heading: "About Alina",
  lead: "Alina Kiryukhina is a fine artist and painter based in Saint Petersburg, Russia.",
  paragraphs: [
    "She trained at the I.D. Shadr Sverdlovsk Art College in Yekaterinburg, Russia (Fine Artist, Painting; Teacher, 2016) and at the I.E. Repin Saint Petersburg Academy of Arts, Russia (Fine Artist, Easel Painting, 2022).",
    "Her practice spans commissioned portraits, figurative painting, academic studies, and still life. She also teaches private students aged 8–40 and instructs at Global Art Studio.",
    "Alina created decorative painting for Orthodox churches, including the Church of the Icon of the Mother of God “The All-Tsaritsa” in Krasnodar, Russia.",
  ],
  education: [
    {
      school: "I.D. Shadr Sverdlovsk Art College, Yekaterinburg, Russia",
      detail: "Fine Artist, Painting; Teacher (2016)",
    },
    {
      school: "I.E. Repin Saint Petersburg Academy of Arts, Saint Petersburg, Russia",
      detail: "Fine Artist, Easel Painting (2022)",
    },
  ],
  exhibitions: [
    "2015 — Plein Air Exhibition, I.D. Shadr Art College, Yekaterinburg, Russia",
    "2016 — The Path to Mastery, Ernst Neizvestny Museum, Yekaterinburg, Russia",
    "2017 — Painting Exhibition, Pushkinskiye Gory Museum, Russia",
    "2018 — Exhibition of works from the painting collection, Academy of Arts, Saint Petersburg, Russia",
    "2018 — Participant in the Minakov Competition and Exhibition, Family Values, Saint Petersburg, Russia",
    "2019 — Participant in the Plein Air and Painting Exhibition, Gorki Leninskiye, Russia",
    "2019 — Exhibition of works from the painting collection, Academy of Arts, Saint Petersburg, Russia",
    "2020 — Participant in Art Start: The Best Young Artists of St. Petersburg, Saint Petersburg, Russia",
    "2021 — Participant in Art Start: The Best Young Artists of St. Petersburg, Hermitage, Vyborg, Russia",
    "2022 — Nochlezhka, Moscow, Russia",
    "2022 — Youth, Union of Artists, Saint Petersburg, Russia",
    "2022 — Dedication to Victory, I.E. Repin Saint Petersburg Academy of Arts, Moscow, Russia",
    "2023 — Figurative Art, Kasteyev Museum, Kazakhstan",
    "2023 — Exhibition of Diploma Works by Graduates of Art Universities, Tretyakov Gallery, Moscow, Russia",
    "2023 — Leningrad–Saint Petersburg: A Dialogue of Eras, Moscow, Russia",
    "2024 — Victory, Vyborg, Russia",
    "2024 — Exhibition of reproductions of works from Victory, Beijing, China",
    "2024 — À la Russe, Beriozka Gallery, Saint Petersburg, Russia",
    "2024 — Art Moscow, Moscow, Russia",
  ],
  publications: [
    "Catalogue of Works from the Gorki Leninskiye Museum Collection",
    "Family Values Exhibition Catalogue",
    "Leningrad–Saint Petersburg: A Dialogue of Eras Exhibition Catalogue (2023)",
    "Youth Exhibition Catalogue, Union of Artists, Saint Petersburg (2023)",
  ],
  images: {
    primary: "/artwork/site/about/alina-portrait.jpg",
    academy: "/artwork/site/about/alina-academy.jpg",
    painting: "/artwork/site/about/alina-live-model.jpg",
    pleinAir: "/artwork/site/about/alina-plein-air.jpg",
    diploma: "/artwork/site/about/alina-diploma.jpg",
    exhibited: "/artwork/site/about/alina-plein-air-duo.jpg",
  },
  exhibitionCarousel: [
    {
      src: "/artwork/site/about/exhibitions/art-exhibited.jpg",
      alt: "Alina’s work on view in a gallery exhibition",
    },
    {
      src: "/artwork/site/about/exhibitions/alina-and-her-diploma.jpg",
      alt: "Alina with her diploma painting",
    },
    {
      src: "/artwork/site/about/exhibitions/alina-and-dad.jpg",
      alt: "Alina and her father with the Father painting",
    },
    {
      src: "/artwork/site/about/exhibitions/diploma-covered.jpg",
      alt: "Diploma painting prepared and wrapped",
    },
    {
      src: "/artwork/site/about/exhibitions/art-exhibited-plate.jpg",
      alt: "Exhibition wall label for Alina Kiryukhina",
    },
    {
      src: "/artwork/site/about/exhibitions/alina-and-diploma.jpg",
      alt: "Alina with large canvases in the academy studio",
    },
    {
      src: "/artwork/site/about/exhibitions/art-prepped-to-ship.jpg",
      alt: "Alina with artwork prepared for shipping",
    },
  ],
};

export const testimonials = [
  {
    quote:
      "When you see Alina’s art in person, you feel like it channels God’s gift. Her paintings breathe, taking your breath away.",
    attribution: "Private commission client",
  },
  {
    quote:
      "Her classical training shows in every sitting. The process was collaborative, and the finished painting exceeded what we hoped for.",
    attribution: "Portrait sitter",
  },
  {
    quote:
      "There is a depth in her figurative work that goes beyond likeness — memory, place, and atmosphere all sit inside the paint.",
    attribution: "Collector",
  },
];

export const galleries = {
  portraits: {
    title: "Commissioned portraits and genre paintings",
    intro:
      "Commissioned and studio portraits painted from life and reference, with attention to likeness, colour, and quiet presence.",
    works: [
      {
        title: "Natalia",
        images: [
          "/artwork/site/portraits/mc-portrait.jpg",
          "/artwork/site/portraits/mc-posing.jpg",
          "/artwork/site/portraits/mc-posing-2.jpg",
          "/artwork/site/portraits/mc-posing-3.jpg",
        ],
      },
      {
        title: "Mehmet",
        images: [
          "/artwork/site/portraits/mehmet-with-portrait.jpg",
          "/artwork/site/portraits/mehmet-in-progress.jpg",
          "/artwork/site/portraits/mehmet-conqueror.jpg",
          "/artwork/site/portraits/mehmet-sees-portrait.mp4",
        ],
      },
      {
        title: "Anastasia",
        images: [
          "/artwork/site/portraits/nastya-portrait-2.jpg",
          "/artwork/site/portraits/nastya-portrait.jpg",
          "/artwork/site/portraits/nastya-photo-2.jpg",
        ],
      },
      {
        title: "Portrait Miniatures",
        images: [
          "/artwork/site/portraits/mini-5.jpg",
          "/artwork/site/portraits/mini-1.jpg",
          "/artwork/site/portraits/mini-2.jpg",
          "/artwork/site/portraits/mini-4-cropped.jpg",
          "/artwork/site/portraits/mini-6-wide.jpg",
        ],
      },
      {
        title: "Alexander's Mother",
        images: [
          "/artwork/site/portraits/sasha-mom.jpg",
          "/artwork/site/portraits/sasha-mom-photo.jpg",
        ],
      },
      {
        title: "Anton and his Father",
        images: [
          "/artwork/site/portraits/anton-artwork.jpg",
          "/artwork/site/portraits/anton-photo.jpg",
        ],
      },
      {
        title: "Natalya",
        images: [
          "/artwork/site/portraits/img-0526.jpg",
          "/artwork/site/portraits/img-0528.jpg",
          "/artwork/site/portraits/blue-dress-sketch.jpg",
        ],
      },
      {
        title: "Denis",
        images: [
          "/artwork/site/portraits/pirog-with-portrait.jpg",
          "/artwork/site/portraits/pirog-with-alina.jpg",
          "/artwork/site/portraits/pirog-photo.jpg",
        ],
      },
      {
        title: "Mehmet and his daughter Melisa",
        images: [
          "/artwork/site/portraits/mehmet-melisa-portrait.jpg",
          "/artwork/site/portraits/mehmet-melisa-with-sitter.jpg",
          "/artwork/site/portraits/mehmet-melisa-studio.jpg",
          "/artwork/site/portraits/mehmet-melisa-framing.jpg",
          "/artwork/site/portraits/mehmet-melisa-photo.jpg",
        ],
      },
    ],
  },
  figurative: {
    title: "Academic Training",
    intro:
      "Alina has gone through rigorous academic training in the only school in the world that preserved the centuries-old traditions of classical training for artists, the Repin Academy of Arts, Saint-Petersburg, Russia. She has not only acquired a deep understanding of shape and human anatomy, but of the craft of fine art displaying confident artistic expression.",
    quote:
      "My Diploma work is a reflection of my childhood. My father always wore a military uniform. We lived in a military settlement where you would see an old well and several Soviet-era Khrushchev apartment buildings. I wanted to convey the sensations and memories I experienced as a child: first snow, my Father, the Ural Mountains, and the cold.",
    works: [
      {
        title: "Together",
        images: [
          "/artwork/site/figurative/bridge-with-alina.jpg",
          "/artwork/site/figurative/railway-figures-2.jpg",
          "/artwork/site/figurative/bridge-studio.jpg",
          "/artwork/site/figurative/bridge-exhibited.jpg",
          "/artwork/site/figurative/bridge-wrapped.jpg",
        ],
      },
      {
        title: "First Snow",
        src: "/artwork/site/figurative/alina-academy-art.jpg",
      },
      {
        title: "Father",
        images: [
          "/artwork/site/figurative/dad-artwork.jpg",
          "/artwork/site/figurative/father-exhibited.jpg",
          "/artwork/site/figurative/father-with-alina-3.jpg",
        ],
      },
    ],
    diplomaVideo: {
      title: "Dedication to Father",
      src: "/artwork/site/figurative/dedication-to-father.mp4",
      layout: "landscape" as const,
    },
  },
  studies: {
    title: "Still Life",
    intro: "Still-life paintings from Alina’s studio practice.",
    works: [
      { title: "Still Life I", src: "/artwork/site/studies/still-life-1.jpg" },
      { title: "Still Life II", src: "/artwork/site/studies/still-life-2.jpg" },
      {
        title: "Still Life in Warm Tones",
        src: "/artwork/site/studies/still-life-iii-warm.jpg",
        layout: "landscape" as const,
      },
      {
        title: "Still Life IV",
        src: "/artwork/site/studies/still-life-iv-user.jpg",
        layout: "landscape" as const,
      },
    ],
  },
} as const;

export const stillLifeSection = {
  title: "Still Life",
  intro: "Still-life paintings from Alina’s studio practice.",
  works: galleries.studies.works,
} as const;

export const studiesSection = {
  title: "Studies",
  intro: "Academic studies and master copies.",
  works: [
    {
      title: "Two Nudes",
      src: "/artwork/site/studies/two-figures.jpg",
    },
    {
      title: "Modern Life",
      src: "/artwork/site/portraits/academy-3.jpg",
    },
    { title: "Master Copy", src: "/artwork/site/studies/master-copy.jpg" },
    {
      title: "Rembrandt Master Copy",
      images: [
        "/artwork/site/studies/rembrandt-copy.jpg",
        "/artwork/site/studies/rembrandt-close-up.jpg",
        "/artwork/site/studies/rembrandt-original.jpg",
      ],
    },
  ],
} as const;

export type GallerySlug = keyof typeof galleries;

export const instagramShots = [
  "/artwork/site/hero/dad-artwork.jpg",
  "/artwork/site/hero/mc-portrait.jpg",
  "/artwork/site/portraits/nastya-portrait.jpg",
  "/artwork/site/hero/war-art.jpg",
  "/artwork/site/studies/still-life-1.jpg",
  "/artwork/site/about/alina-live-model.jpg",
];
