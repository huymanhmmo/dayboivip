import type { PoolDetailData } from './poolDetailTypes';
import { laiThieuVenueCatalog } from './laiThieuVenueCatalog.js';
import { nhatAnPool } from './pool-detail/nhat-an';
import { buildPoolDetail } from './pool-detail/buildPoolDetail';
export { nhatAnPool };
export const poolDetailPages:PoolDetailData[]=laiThieuVenueCatalog.map(venue=>venue.id==='nhat-an'?nhatAnPool:buildPoolDetail(venue));
export function getPoolDetail(id:string):PoolDetailData {
  const pool=poolDetailPages.find(pool=>pool.id===id);
  if(!pool)throw new Error('Unknown pool detail id: '+id);
  return pool;
}
