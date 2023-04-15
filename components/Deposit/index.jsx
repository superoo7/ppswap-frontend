import React from 'react'
import { Button, Label, Select, TextInput } from 'flowbite-react'

export const DepositTab = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const token = e.target.token.value
    const amount = e.target.amount.value
  }
  return (
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
            Submit
        </Button>
      </div>
    </form>
  )
}
