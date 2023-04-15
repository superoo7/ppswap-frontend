import React from 'react'

export const PPScroll = () => {
  const [scrollHeight, setScrollHeight] = React.useState(100)
  React.useEffect(() => {
    const onScroll = () => setScrollHeight(100+window.pageYOffset);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
}, []);

  return (
    <div className="flex fixed right-0 top-48">
      <div className="flex inverted-p">
        <SemiCircle
          style={{
            borderLeft: 'none',
            borderRight: 'none',
            borderRadius: '25px 0 0 25px',
          }}
        />
        <Stick
          style={{
            height: `${scrollHeight}px`,
          }}
        />
      </div>
      <span className="m-1"></span>
      <div className="flex standard-p">
        <Stick
          style={{
            height: `${scrollHeight}px`,
          }}
        />
        <SemiCircle
          style={{
            borderLeft: 'none',
            borderRight: 'none',
            borderRadius: '0 25px 25px 0',
          }}
        />
      </div>
    </div>
  )
}

const Stick = ({ style }) => {
  return (
    <span
      style={{
        border: '1px solid #666',
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
        border: '1px solid #666',
        ...style,
      }}
    ></span>
  )
}
