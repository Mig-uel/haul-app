import { useState } from 'react'

import { AppContainer, HeaderContainer, Title } from './App.styles'

function App() {
  return (
    <AppContainer>
      <HeaderContainer>
        <h1>Haul App</h1>
        <p>
          Track your recent food haul, save it to your Haul list, create future
          haul lists based on previous hauls, and more coming.
        </p>
      </HeaderContainer>
    </AppContainer>
  )
}

export default App
