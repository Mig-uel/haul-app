import { useState } from 'react'
import { Scanner } from '@alzera/react-scanner'

import { ScannerContainer, CameraContainer } from './scan.styles'

const Scan = () => {
  const [scannedData, setScannedData] = useState('')
  const [active, setActive] = useState(false)
  const [error, setError] = useState(null)

  return (
    <ScannerContainer>
      {active && (
        <CameraContainer>
          <Scanner
            onScan={(data) => {
              setScannedData(data)
              setActive((active) => !active)
            }}
            decoderOptions={{ formats: ['ean_13'] }}
            onError={(e) => setError(e)}
          />
        </CameraContainer>
      )}
      {scannedData && <p>Scanned Data: {scannedData}</p>}
      {error && <p>Error: {error}</p>}

      <button onClick={() => setActive((active) => !active)}>Scan Haul</button>
    </ScannerContainer>
  )
}

export default Scan
