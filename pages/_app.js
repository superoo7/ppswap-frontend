import '@/styles/globals.css'

import '../styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css'
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { polygonMumbai } from '@wagmi/chains'
import '@fortawesome/fontawesome-svg-core/styles.css' //importing font awesome css
import { config } from '@fortawesome/fontawesome-svg-core'
import { PPScroll } from '@/components/PPScroll'

config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const { chains, provider, webSocketProvider } = configureChains(
  [polygonMumbai],
  [publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: 'RainbowKit App',
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
})

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
        <PPScroll />
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
