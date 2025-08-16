export const MENU = [
  {
    label: 'Market',
    icon: '/icons/market.svg',
    link: '/market'
  },
  {
    label: 'Accounts',
    icon: 'icons/accounts.svg',
    link: '/accounts',
    decentralized: [
      {
        label: 'Main',
        link: '/decentralized',
        icon: 'icons/wallet.svg',
        amount: 45204
      },
      {
        label: 'name',
        link: '/decentralized',
        icon: 'icons/wallet.svg',
        amount: 45204
      }
    ],
    centralized: [
      {
        label: 'Binance',
        link: '/centralized',
        icon: 'icons/exchange.svg',
        amount: 45204
      }
    ]
  },
  {
    label: 'Tax Hub',
    icon: 'icons/taxes.svg',
    link: '/taxes'
  }
]

export const MARKET_TABS = [
  {
    label: 'Tokens',
    link: 'tokens'
  },
  {
    label: 'NFTs',
    link: 'nfts'
  }
]