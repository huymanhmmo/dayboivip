export interface RegionLink {label:string;href:string;description?:string;icon?:string;hasVenues?:boolean;}
export interface LocalNavLink {label:string;href?:string;description?:string;icon?:string;}
export interface LocalNavSection {title:string;links:RegionLink[];}
export interface LocalNavItem extends LocalNavLink {sections?:LocalNavSection[];more?:RegionLink;}
export interface LocalSiteConfig {
  id:string;name:string;parentName:string;hubHref:string;parentHref:string;lang:'vi'|'en';
  navigation:LocalNavItem[];venueLinks:RegionLink[];courseLinks:RegionLink[];nearby:RegionLink[];
  listingHref:string;mapsHref:string;actionLabel:string;actionHref:string;
  contact?:{name:string;qualification?:string;hotline:string;phoneHref:string;zaloHref?:string};
}
export interface RegionVenue {
  id:string;name:string;address:string;area:string;category:string;access:string;accessType:'public'|'residential'|'unknown';environment:string;
  services:string;detail:string;missing:string;image:string;imageAlt:string;imageNote:string;
  detailHref?:string;mapsHref:string;sourceHref?:string;sourceLabel?:string;
  venueContact?:Record<string,any>;instructors:Record<string,any>[];searchText:string;
}
export interface RegionPageData {
  lang:'vi'|'en';level:'province'|'commune'|'area';id:string;name:string;shortName:string;parentName:string;
  title:string;description:string;canonical:string;noindex:boolean;alternateUrl?:string;
  breadcrumbs:{label:string;href?:string}[];image:string;eyebrow:string;lead:string;reviewedAt:string;
  venues:RegionVenue[];nearbyOnly:boolean;groups:{id:string;label:string;description?:string;href?:string}[];
  communes:RegionLink[];related:RegionLink[];providers:Record<string,any>[];
  previous:string[];localAdvice:string;localNotes?:{label:string;value:string}[];faqs:{question:string;answer:string}[];
  site:LocalSiteConfig;schema:Record<string,any>;
}
