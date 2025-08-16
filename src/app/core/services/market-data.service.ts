import { Erc20Token } from '@market-interfaces/top-erc20-tokens-list';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TrendingErc20TokensInterface } from '@market-interfaces/trending-erc20-tokens';

@Injectable({
  providedIn: 'root'
})
export class MarketDataService {
  private topErc20TokensListSubject = new BehaviorSubject<Erc20Token[] | null>(null);
  public topErc20TokensList$ = this.topErc20TokensListSubject.asObservable();
  
  private gainersERC20TokensListSubject = new BehaviorSubject<TrendingErc20TokensInterface  | null>(null);
  public gainersERC20TokensList$ = this.gainersERC20TokensListSubject.asObservable();
  
  private losersERC20TokensListSubject = new BehaviorSubject<TrendingErc20TokensInterface | null>(null);
  public losersERC20TokensList$ = this.losersERC20TokensListSubject.asObservable();

  private readonly baseUrl = 'https://deep-index.moralis.io/api/v2';
  private readonly apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjMyYWUwNjljLTQ1ODAtNDNhZi1hMDk4LTRmMTg5MGRhNTA2ZSIsIm9yZ0lkIjoiNDYzNDQxIiwidXNlcklkIjoiNDc2Nzg2IiwidHlwZUlkIjoiNThkNTk2NWUtZTUyOS00MDJkLWIwNmMtNDc5Njg3ZmY0MjM3IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3NTQ0MTc0MTUsImV4cCI6NDkxMDE3NzQxNX0.BpMWsyMBHbkkQ35rQ5jf8UqRmrw_hPeOHsue-rUpnLk';  // Replace with your key

  constructor(private http: HttpClient) {}
  
  fetchTopERC20TokensByMarketCap(): void {
    // Only fetch if we don't have cached data
    if (this.topErc20TokensListSubject.value && this.topErc20TokensListSubject.value.length > 0) {
      return;
    }

    const url = `${this.baseUrl}/market-data/erc20s/top-tokens`;
    const headers = new HttpHeaders({ 'X-API-Key': this.apiKey });

    this.http.get<Erc20Token[]>(url, { headers })
      .subscribe({
        next: (tokens) => this.topErc20TokensListSubject.next(tokens),
        error: (err) => console.error('Error fetching tokens:', err)
      });
  }
  
  fetchTrendingERC20Tokens(): void {
    // Only fetch if we don't have cached data
    // if (this.trendingERC20TokensSubject.value && this.trendingERC20TokensSubject.value.length > 0) {
    //   return;
    // }

    const url = `${this.baseUrl}/market-data/erc20s/top-movers`;
    const headers = new HttpHeaders({ 'X-API-Key': this.apiKey });

    this.http.get<TrendingErc20TokensInterface>(url, { headers })
      .subscribe({
        next: (tokens: any) => {
          this.gainersERC20TokensListSubject.next(tokens.gainers);
          this.losersERC20TokensListSubject.next(tokens.losers);
        },
        error: (err) => console.error('Error fetching tokens:', err)
      });
  }


}
