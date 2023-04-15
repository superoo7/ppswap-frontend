import Header from '@/components/Header'
import React from 'react'
import { Tabs } from 'flowbite-react'
import { DepositTab } from '@/components/Deposit'
import { WithdrawTab } from '@/components/Withdraw'
import { SwapTab } from '@/components/Swap'

const StartPage = () => {
  return (
    <div>
      <Header />
      <div className="mt-4 mx-4">
        <Tabs.Group
          aria-label="Transaction Type"
          style="underline"
        >
          <Tabs.Item active title="Deposit">
            <DepositTab />
          </Tabs.Item>
          <Tabs.Item title="Withdraw">
            <WithdrawTab />
          </Tabs.Item>
          <Tabs.Item title="Swap">
            <SwapTab />
          </Tabs.Item>
        </Tabs.Group>
      </div>
    </div>
  )
}

export default StartPage
