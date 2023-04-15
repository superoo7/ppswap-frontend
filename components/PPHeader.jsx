import React from 'react'

export const PPHeader = () => {
  return (
    <div className="flex text-4xl">
      <div className="flex">
        <div className="flex inverted-p">
          <SemiCircle
            style={{
              borderLeft: 'none',
              borderRight: 'none',
              borderRadius: '25px 0 0 25px',
            }}
          />
          <Stick />
        </div>
        <span className="m-1"></span>
        <div className="flex standard-p">
          <Stick />
          <SemiCircle
            style={{
              borderLeft: 'none',
              borderRight: 'none',
              borderRadius: '0 25px 25px 0',
            }}
          />
        </div>
      </div>
    </div>
  )
}

const Stick = ({ style }) => {
  return (
    <span
      style={{
        height: '50px',
        border: '1px solid black',
        ...style,
      }}
    ></span>
  )
}

const SemiCircle = ({ style }) => {
  return (
    <span
      style={{
        height: '25px',
        width: '25px',
        border: '1px solid black',
        ...style,
      }}
    ></span>
  )
}
