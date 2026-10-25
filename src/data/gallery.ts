export type GalleryItem = {
  id: string;
  title: string;
  category: "Public meetings" | "Official events" | "Public interactions" | "Press" | "Community visits" | "Portrait";
  image: string;
  imageAlt: string;
  credit: string;
  isPlaceholder: boolean;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "portrait-mint",
    title: "Official portrait",
    category: "Portrait",
    image: "/images/portrait/portrait-mint.jpg",
    imageAlt: "Portrait of V. Muraleedharan in a mint green Nehru jacket",
    credit: "Supplied portrait",
    isPlaceholder: false,
  },
  {
    id: "portrait-studio",
    title: "Studio portrait",
    category: "Portrait",
    image: "/images/portrait/portrait-studio.jpg",
    imageAlt: "Studio portrait of V. Muraleedharan against a cream background",
    credit: "Supplied portrait",
    isPlaceholder: false,
  },
  {
    id: "portrait-painterly",
    title: "Portrait study",
    category: "Portrait",
    image: "/images/portrait/portrait-painterly.jpg",
    imageAlt: "Portrait of V. Muraleedharan in formal attire",
    credit: "Supplied portrait",
    isPlaceholder: false,
  },
  {
    id: "vm-speaking-podium",
    title: "Addressing the gathering",
    category: "Public meetings",
    image: "/images/gallery/vm-speaking-podium.jpg",
    imageAlt: "V. Muraleedharan speaking at a podium against saffron and green backdrop",
    credit: "Supplied photograph",
    isPlaceholder: false,
  },
  {
    id: "vm-teal-portrait",
    title: "Portrait",
    category: "Portrait",
    image: "/images/gallery/vm-teal-portrait.webp",
    imageAlt: "Portrait of V. Muraleedharan against a teal background",
    credit: "Supplied photograph",
    isPlaceholder: false,
  },
  {
    id: "vm-national-flags",
    title: "With the national flag",
    category: "Press",
    image: "/images/gallery/vm-national-flags.png",
    imageAlt: "V. Muraleedharan speaking with Indian national flags behind him",
    credit: "Supplied photograph",
    isPlaceholder: false,
  },
  {
    id: "vm-official-podium",
    title: "Official address",
    category: "Official events",
    image: "/images/gallery/vm-official-podium.webp",
    imageAlt: "V. Muraleedharan speaking at an official podium with India and Mauritius flags",
    credit: "Supplied photograph",
    isPlaceholder: false,
  },
  {
    id: "vm-public-programme",
    title: "Public programme",
    category: "Official events",
    image: "/images/gallery/vm-public-programme.jpg",
    imageAlt: "V. Muraleedharan with Prime Minister Narendra Modi at a public programme",
    credit: "Supplied photograph",
    isPlaceholder: false,
  },
];
