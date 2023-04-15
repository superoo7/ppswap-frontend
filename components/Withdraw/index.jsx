import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'

export const WithdrawTab = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const note = e.target.note.value
    const recipient = e.target.recipient.value
  }

  return (
    <form onSubmit={handleSubmit}>
      <div id="note-row">
        <div className="mb-2 block">
          <Label htmlFor="note" value="Note" />
        </div>
        <TextInput id="note" type="text" placeholder="" required={true} />
      </div>
      <div id="recipient-row">
        <div className="mb-2 block">
          <Label htmlFor="recipient" value="Recipient Address" />
        </div>
        <TextInput id="recipient" type="text" placeholder="" required={true} />
      </div>
      <div className="pt-4">
        <Button type="submit" outline={true} gradientDuoTone="purpleToBlue">
          Submit
        </Button>
      </div>
    </form>
  )
}
