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
  { href: "/portraits", label: "Portrait Painting" },
  { href: "/studies", label: "Still Life and Studies" },
  { href: "/about", label: "About Alina" },
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
    label: "Portrait Painting",
    src: "/artwork/site/portraits/nastya-portrait.jpg",
    alt: "Portrait painting sample",
  },
  {
    href: "/figurative",
    label: "Figurative Painting",
    src: "/artwork/site/figurative/dad-artwork.jpg",
    alt: "Figurative painting sample",
  },
  {
    href: "/studies",
    label: "Still Life and Studies",
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
    href: "https://www.1937china.com/kzgdata/clzl/ztzl/russia-art/",
    domain: "1937china.com",
    title: "俄罗斯胜利纪念馆 · 美术作品展",
    titleEn: "Russian Victory Memorial Museum — Art Exhibition",
    excerpt:
      "Exhibition of Russian art works presented through the Russian Victory Memorial Museum collection in China.",
    image: "/artwork/site/figurative/war-art.jpg",
    imageAlt: "Commemorative painting featured in Russian victory art exhibitions",
  },
  {
    href: "https://in.gallerix.ru/alinak",
    domain: "gallerix.ru",
    title: "Алина Кирюхина",
    titleEn: "Alina Kiryukhina on Gallerix",
    excerpt:
      "Artclub Gallerix profile — paintings, albums, exhibitions, and publications from Saint Petersburg.",
    image: "/artwork/site/studies/still-life-1.jpg",
    imageAlt: "Still life painting from Alina’s Gallerix portfolio",
  },
  {
    href: "https://beriozkagallery.ru/kiryukhinaalina",
    domain: "beriozkagallery.ru",
    title: "Кирюхина Алина",
    titleEn: "Alina Kiryukhina at Beriozka Gallery",
    excerpt:
      "Artist page at Beriozka Gallery — education, exhibitions, and the childhood memory behind Father.",
    image: "/artwork/site/figurative/dad-artwork.jpg",
    imageAlt: "Father — painting featured on the Beriozka Gallery artist page",
  },
] as const;

export const featureDocuments = [
  {
    href: "https://1drv.ms/w/c/8ed1f8c72b37f09c/IQDKXHyb4v6VQJro5hW_8ip7AVMwM2vMYC9W553WdklP9mk?e=H4kTZa&nav=eyJoIjoiMTkxNzI2NzczMiJ9",
    title: "Featured document I",
    label: "OneDrive document",
  },
  {
    href: "https://1drv.ms/w/c/8ed1f8c72b37f09c/IQDKXHyb4v6VQJro5hW_8ip7AVMwM2vMYC9W553WdklP9mk?e=b6c0wd&nav=eyJoIjoiNTk5ODg2NTY1In0",
    title: "Featured document II",
    label: "OneDrive document",
  },
  {
    href: "https://1drv.ms/w/c/8ed1f8c72b37f09c/IQDKXHyb4v6VQJro5hW_8ip7AVMwM2vMYC9W553WdklP9mk?e=x4rjGT&nav=eyJoIjoiMTE3MTQxNjg4NCJ9",
    title: "Featured document III",
    label: "OneDrive document",
  },
  {
    href: "https://1drv.ms/w/c/8ed1f8c72b37f09c/IQDKXHyb4v6VQJro5hW_8ip7AVMwM2vMYC9W553WdklP9mk?e=V9eA7p&nav=eyJoIjoiMTc1NjIzNTczMSJ9",
    title: "Featured document IV",
    label: "OneDrive document",
  },
] as const;

export const aboutTheWork = {
  heading: "About The Work",
  paragraphs: [
    "Having a portrait painted is a collaborative process between sitter and artist.",
    "The finished work becomes a lasting record of that encounter — something with a life of its own, and a focal point for years to come.",
  ],
  href: "/about-the-work",
  image: "/artwork/site/process/studio-session.jpg",
};

export const aboutAlina = {
  heading: "About Alina",
  lead: "Alina Kiryukhina is a fine artist and painter based in Saint Petersburg, Russia.",
  paragraphs: [
    "She trained at the I.D. Shadr Sverdlovsk Art College in Yekaterinburg (Fine Artist, Painting; Teacher, 2016) and at the I.E. Repin Saint Petersburg Academy of Arts (Fine Artist, Easel Painting, 2022).",
    "Her practice spans commissioned portraits, figurative painting, academic studies, and still life. She has also taught private students ages 4–18 and adults, instructed at Global Art Studio, and contributed decorative painting for Orthodox churches, including the Church of the Icon of the Mother of God “The All-Tsaritsa” in Krasnodar.",
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
      "Alina’s portraits hold a rare stillness — they feel observed, not staged, and the colour is always exacting.",
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
    title: "Portrait Painting",
    intro:
      "Commissioned and studio portraits painted from life and reference, with attention to likeness, colour, and quiet presence.",
    works: [
      {
        title: "Seated Portrait",
        images: [
          "/artwork/site/portraits/mc-portrait.jpg",
          "/artwork/site/portraits/mc-posing.jpg",
          "/artwork/site/portraits/mc-posing-2.jpg",
          "/artwork/site/portraits/mc-posing-3.jpg",
        ],
      },
      {
        title: "Horseman",
        images: [
          "/artwork/site/portraits/mehmet-sultan.jpg",
          "/artwork/site/portraits/mehmet-in-progress.jpg",
        ],
      },
      {
        title: "Nastya",
        images: [
          "/artwork/site/portraits/nastya-portrait-2.jpg",
          "/artwork/site/portraits/nastya-portrait.jpg",
          "/artwork/site/portraits/nastya-photo-2.jpg",
        ],
      },
      { title: "Portrait Miniature I", src: "/artwork/site/portraits/mini-1.jpg" },
      { title: "Portrait Miniature II", src: "/artwork/site/portraits/mini-2.jpg" },
      { title: "Portrait Miniature III", src: "/artwork/site/portraits/mini-3.jpg" },
      { title: "Portrait Miniature IV", src: "/artwork/site/portraits/mini-4.jpg" },
      { title: "Portrait Miniature V", src: "/artwork/site/portraits/mini-5.jpg" },
      {
        title: "Family Portrait",
        images: [
          "/artwork/site/portraits/sasha-mom.jpg",
          "/artwork/site/portraits/sasha-mom-photo.jpg",
        ],
      },
      {
        title: "Studio Portrait Session",
        src: "/artwork/site/portraits/studio-portrait-session.jpg",
      },
      {
        title: "Anton",
        images: [
          "/artwork/site/portraits/anton-artwork.jpg",
          "/artwork/site/portraits/anton-photo.jpg",
        ],
      },
      { title: "Academy Artwork 3", src: "/artwork/site/portraits/academy-3.jpg" },
    ],
  },
  figurative: {
    title: "Figurative Painting",
    intro:
      "Narrative and figurative works exploring memory, place, and the human figure — from diploma pieces to exhibition paintings.",
    works: [
      { title: "Father", src: "/artwork/site/figurative/dad-artwork.jpg" },
      { title: "Commemorative Group", src: "/artwork/site/figurative/war-art.jpg" },
      { title: "Horseman", src: "/artwork/site/figurative/mehmet-sultan.jpg" },
      { title: "Anton", src: "/artwork/site/figurative/anton-artwork.jpg" },
      { title: "Exhibition Work", src: "/artwork/site/figurative/exhibited-2.jpg" },
      { title: "Exhibition Work II", src: "/artwork/site/figurative/exhibited-7.jpg" },
      { title: "Academy Work", src: "/artwork/site/figurative/academy-work.jpg" },
      { title: "Academy Study", src: "/artwork/site/figurative/academy-2.jpg" },
      { title: "Academy Study II", src: "/artwork/site/figurative/academy-3.jpg" },
      { title: "Master Copy", src: "/artwork/site/figurative/master-copy.jpg" },
    ],
  },
  studies: {
    title: "Still Life and Studies",
    intro:
      "Still-life paintings and figure studies from Alina’s studio practice.",
    works: [
      { title: "Still Life I", src: "/artwork/site/studies/still-life-1.jpg" },
      { title: "Still Life II", src: "/artwork/site/studies/still-life-2.jpg" },
      {
        title: "Still Life III",
        src: "/artwork/site/studies/still-life-iii.jpg",
        layout: "landscape" as const,
      },
      {
        title: "Still Life IV",
        src: "/artwork/site/studies/still-life-iv.jpg",
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
      title: "Two Figures",
      src: "/artwork/site/studies/two-figures.jpg",
    },
    { title: "Master Copy", src: "/artwork/site/studies/master-copy.jpg" },
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
