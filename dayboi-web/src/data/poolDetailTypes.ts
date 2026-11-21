import type {LocalSiteConfig} from './locality/types';
export type PoolVariant = 'public' | 'residential';
export type VerificationState = 'verified' | 'unverified' | 'unavailable' | 'updating' | 'documented';
export interface PoolPhoto {
  src: string; alt: string; caption: string; width: number; height: number;
  illustration?: boolean;
  kind?: string; label?: string;
}
export interface PoolCourse {
  id?: string;
  title: string; audience: string; description: string; href: string;
  image: string; imageAlt: string; imagePosition?: string;
}
export interface PoolStyle {
  title: string; href: string; image: string; imageAlt: string;
}
export interface PoolDetailData {
  site?: LocalSiteConfig;
  province?: {name:string;href:string};
  contacts?: {operators:Record<string,any>[];instructors:Record<string,any>[]};
  id: string; slug: string; name: string; shortName: string; areaName: string; areaHref?: string;
  variant: PoolVariant; canonical: string; title: string; description: string; updatedAt: string;
  address: string; oldAddress: string; category: string;
  hotline: string; phoneHref: string; zaloHref: string;
  hero: PoolPhoto & { mobileSrc: string };
  heroDescription: string;
  noIndex?: boolean;
  galleryTitle?: string;
  badges: { icon: string; label: string }[];
  quickFacts: { icon: string; label: string; value: string; note?: string }[];
  photos: PoolPhoto[];
  galleryIllustrations: PoolPhoto[];
  galleryNote: string;
  facilities: { label: string; status: VerificationState; note: string }[];
  facilityNote: string;
  courses: PoolCourse[];
  courseIntro: string;
  styles: PoolStyle[];
  instructor?: {
    name: string; qualification: string; description: string; image?: string; imageAlt?: string;
    sourceUrl?: string; points: string[];
  };
  location: {
    mapsSearchUrl: string; regionEmbedUrl?: string; note: string;
    directions: { label: string; text: string }[];
  };
  preparation: { title: string; description: string }[];
  preparationImage: string;
  tuition: { label: string; value: string; note?: string }[];
  tuitionNote: string;
  guideTitle: string; guideIntro: string;
  guide: { id: string; title: string; paragraphs: string[]; bullets?: string[] }[];
  testimonials: { name: string; quote: string; source: string; date?: string; image?: string; rating?: number }[];
  faqs: { question: string; answer: string }[];
  nearby: { name: string; href: string; description: string }[];
  accessNote?: string;
  sources: { title: string; url?: string; note: string }[];
}
