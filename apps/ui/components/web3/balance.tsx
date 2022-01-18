import { useWeb3React } from '@web3-react/core';
import { useEffect, useState } from 'react';
import { formatEther } from '@ethersproject/units';

function Balance() {
    const { account, library, chainId } = useWeb3React()

  const [balance, setBalance] = useState(null)
  useEffect(() => {
    if (!!account && !!library) {
      let stale = false

      library
        .getBalance(account)
        .then((balance) => {
          if (!stale) {
            setBalance(formatEther(balance).substring(0,4))
          }
        })
        .catch(() => {
          if (!stale) {
            setBalance(null)
          }
        })

      return () => {
        stale = true
        setBalance(undefined
      }
    }
  }, [account, library, chainId]) // ensures refresh if referential identity of library doesn't change across chainIds

  return (
    <>
      <span>{balance === null ? 'Error' : balance ? `Ξ${balance}` : ''}</span>
    </>
  )
}

export default Balance;
