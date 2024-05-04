import Scan from './components/scan/scan.component'
import Haul from './components/haul/haul.component'

import { AppContainer, HeaderContainer } from './App.styles'
import Hauls from './components/hauls/hauls.component'

function App() {
  return (
    <AppContainer>
      <HeaderContainer>
        <h1>Haul</h1>
        <p>
          Track your recent food haul, save it to your Hauls, create future haul
          lists based on previous Hauls, and more coming.
        </p>
      </HeaderContainer>

      <Scan />
      <Haul />
      <Hauls />
    </AppContainer>
  )
}

export default App
