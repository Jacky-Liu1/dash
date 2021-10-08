import React from 'react'
import { client } from "defi-sdk"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "./theme"
import "@fontsource/inter"
import { ChainId, DAppProvider } from '@usedapp/core'

import "./App.css"

import Router from './router'

client.configure({
  url: process.env.REACT_APP_ZERION_ENDPOINT,
  apiToken: process.env.REACT_APP_ZERION_API_TOKEN,
  hooks: {
    willSendRequest: request => {
      return request
    },
  },
})
Object.assign(window, { client })

const config = {
  readOnlyChainId: ChainId.Ropsten,
  readOnlyUrls: {
    [ChainId.Mainnet]: 'https://mainnet.infura.io/v3/62687d1a985d4508b2b7a24827551934',
    [ChainId.Ropsten]: `https://eth-ropsten.alchemyapi.io/v2/${process.env.REACT_APP_ALCHEMY_API_KEY}`
  },
}

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <DAppProvider config={config}>
        <Router />
      </DAppProvider>
    </ChakraProvider>
  )
}

export default App
