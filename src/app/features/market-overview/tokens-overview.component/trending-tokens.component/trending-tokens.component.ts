import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatSortModule, MatSort, Sort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { TrendingErc20TokensInterface } from '@market-interfaces/trending-erc20-tokens';
import { Erc20Token } from '@market-interfaces/top-erc20-tokens-list';
import { MarketDataService } from '@services/market-data.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-trending-tokens',
  imports: [MatTableModule, MatSortModule],
  templateUrl: './trending-tokens.component.html',
  styleUrl: './trending-tokens.component.scss'
})
export class TrendingTokensComponent implements OnInit, AfterViewInit {

  private _liveAnnouncer = inject(LiveAnnouncer);

  public topErc20TokensList = new MatTableDataSource();
  public displayedColumns: string[] = ['symbol', 'logo', 'name', 'day', 'week', 'price'];

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private marketDataService: MarketDataService) {}

  ngOnInit(): void {
    this.marketDataService.gainersERC20TokensList$
    .pipe(
      tap(tokens => {
        if (tokens) {
          // const processedList = tokens.map((token: any) => ({
          //   ...token,
          //   price_usd: Number(token.price_usd),
          //   price_24h_percent_change: Number(token.price_24h_percent_change),
          //   price_7d_percent_change: Number(token.price_7d_percent_change)
          // }));
          // this.topErc20TokensList.data = processedList;
        }
      })
    )
    .subscribe();

  // Will only fetch unless already fetched
  this.marketDataService.fetchTrendingERC20Tokens();
  }

  ngAfterViewInit(): void {
    this.topErc20TokensList.sort = this.sort;
    this.setCustomSortAccessors();
  }

  private setCustomSortAccessors(): void {
    this.topErc20TokensList.sortingDataAccessor = (data: unknown, property: string): string | number => {
      const item = data as Erc20Token;
      switch (property) {
        case 'day': return Number(item.price_24h_percent_change);
        case 'week': return Number(item.price_7d_percent_change);
        case 'price': return Number(item.price_usd);
        case 'symbol': return item.token_symbol?.toLowerCase() ?? '';
        case 'name': return item.token_name?.toLowerCase() ?? '';
        default: return (item as any)[property];
      }
    };
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort): void {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
