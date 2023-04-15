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
              borderRadius: '50px 0 0 50px',
            }}
          />
          <Stick />
        </div>
        <span className="m-2"></span>
        <div className="flex standard-p">
          <Stick />
          <SemiCircle
            style={{
              borderLeft: 'none',
              borderRight: 'none',
              borderRadius: '0 50px 50px 0',
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
        height: '100px',
        border: '2px solid black',
        ...style,
      }}
    ></span>
  )
}

const SemiCircle = ({ style }) => {
  return (
    <span
      style={{
        height: '50px',
        width: '50px',
        border: '2px solid black',
        ...style,
      }}
    ></span>
  )
}
