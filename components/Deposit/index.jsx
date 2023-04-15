import React from 'react'
import { Button, Label, Select, TextInput } from 'flowbite-react'
import { useContract, useAccount, useProvider, useContractRead } from 'wagmi'
import { erc721ABI } from '@wagmi/core'
import { NoSSR } from '../NoSSR'
import lensPng from '@/public/lens.png'
import Image from 'next/image'
import Link from 'next/link'

// import dynamic from 'next/dynamic'
// const IDKitWidget = dynamic(
//   () => import('@worldcoin/idkit').then((mod) => mod.IDKitWidget),
//   { ssr: false }
// )
// import { SignInWithWorldID } from '@worldcoin/idkit'

const LENS_CONTRACT_ADDRESS = '0x7582177F9E536aB0b6c721e11f383C326F2Ad1D5'

export const DepositTab = () => {
  const { address } = useAccount()
  const { data: balanceOf, isLoading, isError } = useContractRead({
    address: '0x60Ae865ee4C725cd04353b5AAb364553f56ceF82',
    abi: erc721ABI,
    functionName: 'balanceOf',
    args: [address],
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const token = e.target.token.value
    const amount = e.target.amount.value
    console.log(token)
    console.log(amount)
  }

  // const handleWorldIdSuccess = (result) => {}

  return (
    <NoSSR>
      {/* <SignInWithWorldID onSuccess={handleWorldIdSuccess} /> */}
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? <div>Error</div> : balanceOf.toNumber() === 0 ? (
        <div>
          <p className="text-lg mb-4">Sorry your address is not eligible 🥺</p>
          <Link href="https://claim.lens.xyz/">
            <Button type="submit" outline={true} gradientDuoTone="purpleToBlue">
              Claim{'  '}
              <Image
                className="mx-1"
                src={lensPng}
                alt="Banana Dance"
                width={30}
                height={30}
              />
              {'  '}
              to PP
            </Button>
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div id="token-row">
            <div className="mb-2 block">
              <Label htmlFor="token" value="Token" />
            </div>
            <Select id="token" required={true}>
              <option>GHO</option>
              <option>BOB</option>
            </Select>
          </div>
          <div id="amount-row">
            <div className="mb-2 block">
              <Label htmlFor="amount" value="Amount" />
            </div>
            <TextInput
              id="amount"
              type="number"
              placeholder="100"
              required={true}
            />
          </div>
          <div className="pt-4">
            <Button type="submit" outline={true} gradientDuoTone="purpleToBlue">
              Deposit
            </Button>
          </div>
        </form>
      )}
    </NoSSR>
  )
}
