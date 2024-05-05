import Scan from './components/scan/scan.component'
import Haul from './components/haul/haul.component'

import { AppContainer, HeaderContainer, ButtonsContainer } from './App.styles'
import Hauls from './components/hauls/hauls.component'
import { useState } from 'react'
import { useSelector } from 'react-redux'

function App() {
  const [active, setActive] = useState(false)
  const items = useSelector(({ items }) => items)

  return (
    <AppContainer>
      <HeaderContainer>
        <h1>Haul</h1>
        <p>
          Track your recent food haul, save it to your Hauls, create future haul
          lists based on previous Hauls, and more coming.
        </p>
      </HeaderContainer>

      <Haul />
      <Hauls />

      <ButtonsContainer>
        <button onClick={() => setActive((active) => !active)}>
          Scan Item
        </button>
        <button disabled={items.length > 0 ? '' : 'true'}>Create Haul</button>
      </ButtonsContainer>

      <Scan active={active} setActive={setActive} />
    </AppContainer>
  )
}

export default App
