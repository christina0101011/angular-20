import { PopularTokensComponent } from "../../features/market-overview/tokens-overview.component/popular-tokens.component/popular-tokens.component";
import { TrendingTokensComponent } from "../../features/market-overview/tokens-overview.component/trending-tokens.component/trending-tokens.component";

export const TOKENS_OVERVIEW = [
  {
    label: 'Popular',
    icon: 'icons/trophy.svg',
    component: PopularTokensComponent,
  },
  {
    label: 'Gainers',
    icon: 'icons/trending.svg',
    component: TrendingTokensComponent,
  },
  {
    label: 'Losers',
    icon: 'icons/trending.svg',
    component: TrendingTokensComponent,
  }
]