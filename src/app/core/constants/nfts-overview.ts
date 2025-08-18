import { PopularNftsComponent } from "../../features/market-overview/nfts-overview.component/popular-nfts.component/popular-nfts.component";
import { TrendingNftsComponent } from "../../features/market-overview/nfts-overview.component/trending-nfts.component/trending-nfts.component";

export const NFTS_OVERVIEW = [
  {
    label: 'Popular',
    icon: 'icons/trophy.svg',
    component: PopularNftsComponent,
  },
  {
    label: 'Trending',
    icon: 'icons/trending.svg',
    component: TrendingNftsComponent,
  }
]