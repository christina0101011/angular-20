import { Erc20Token } from './top-erc20-tokens-list';

export interface TrendingErc20TokensInterface {
  gainers: Array<Erc20Token & { rank: number; contract_address: string }>;
  losers: Array<Erc20Token & { rank: number; contract_address: string }>;
}
