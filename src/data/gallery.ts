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
    id: "portrait-kurta",
    title: "Formal portrait",
    category: "Portrait",
    image: "/images/portrait/portrait-kurta.jpg",
    imageAlt: "Portrait of V. Muraleedharan in a white kurta",
    credit: "Supplied portrait",
    isPlaceholder: false,
  },
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
    credit: "Supplied portrait — also used as site background wash",
    isPlaceholder: false,
  },
  {
    id: "portrait-2011",
    title: "Portrait, 2011",
    category: "Portrait",
    image: "/images/portrait/wikimedia.jpg",
    imageAlt: "Photograph of V. Muraleedharan, then BJP Kerala unit president",
    credit: "Kiran Gopi / Wikimedia Commons (CC BY-SA 3.0)",
    isPlaceholder: false,
  },
  {
    id: "atm-kerala",
    title: "Kerala landscape — thematic",
    category: "Community visits",
    image: "/images/atmosphere/kerala-1.jpg",
    imageAlt: "Thematic photograph of a Kerala landscape used as atmospheric context",
    credit: "Unsplash — thematic placeholder, not an official event photograph",
    isPlaceholder: true,
  },
  {
    id: "atm-india",
    title: "National context — thematic",
    category: "Official events",
    image: "/images/atmosphere/india-1.jpg",
    imageAlt: "Thematic photograph representing national public life",
    credit: "Unsplash — thematic placeholder",
    isPlaceholder: true,
  },
];
