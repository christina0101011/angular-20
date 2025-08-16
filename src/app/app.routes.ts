import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found';
import { MarketOverviewComponent } from './features/market-overview/market-overview.component';
import { TaxHubComponent } from './features/tax-hub/tax-hub';
import { WalletsComponent } from './features/accounts/decentralizad/wallets/wallets';
import { TokensOverviewComponent } from './features/market-overview/tokens-overview.component/tokens-overview.component';
import { NftsOverviewComponent } from './features/market-overview/nfts-overview.component/nfts-overview.component';

export const routes: Routes = [
  { path: '', component: MarketOverviewComponent },
  { path: 'accounts', component: WalletsComponent },
  { path: 'market', 
    component: MarketOverviewComponent,
    children: [
      { path: 'tokens', component: TokensOverviewComponent },
      { path: 'nfts', component: NftsOverviewComponent},
      { path: '', redirectTo: 'tokens', pathMatch: 'full' }
    ],
   },
  // { path: 'accounts',
  //   children: [
      // { path: 'decentralized', component: ConnectWallet },
      // { path: 'centralized', component: AdminTeamsComponent },
  //   ],
  // },
  { path: 'taxes', component: TaxHubComponent },
  { path: '**', component: PageNotFoundComponent }
];
