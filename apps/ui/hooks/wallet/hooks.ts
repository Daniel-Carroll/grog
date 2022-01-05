// import { Currency, CurrencyAmount, JSBI, NATIVE, Token } from '@sushiswap/sdk'
// import { useActiveWeb3React } from '../useActiveWeb3React'

// /**
//  * Returns a map of the given addresses to their eventually consistent ETH balances.
//  */
//  export function useETHBalances(uncheckedAddresses?: (string | undefined)[]): {
//     [address: string]: CurrencyAmount<Currency> | undefined
//   } {
//     const { chainId } = useActiveWeb3React()
//     const multicallContract = useMulticall2Contract()
  
//     const addresses: string[] = useMemo(
//       () =>
//         uncheckedAddresses
//           ? uncheckedAddresses
//               .map(isAddress)
//               .filter((a): a is string => a !== false)
//               .sort()
//           : [],
//       [uncheckedAddresses]
//     )
  
//     const results = useSingleContractMultipleData(
//       multicallContract,
//       'getEthBalance',
//       addresses.map((address) => [address])
//     )
  
//     return useMemo(
//       () =>
//         addresses.reduce<{ [address: string]: CurrencyAmount<Currency> }>((memo, address, i) => {
//           const value = results?.[i]?.result?.[0]
//           if (value && chainId)
//             memo[address] = CurrencyAmount.fromRawAmount(NATIVE[chainId], JSBI.BigInt(value.toString()))
//           return memo
//         }, {}),
//       [addresses, chainId, results]
//     )
//   }
export {}