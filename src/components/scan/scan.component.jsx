import { useState } from 'react'
import { Scanner } from '@alzera/react-scanner'

// store
import { useLazyGetItemQuery } from '../../store/api/apiSlice'

// styles
import { ScannerContainer, CameraContainer } from './scan.styles'

const Scan = () => {
  const [active, setActive] = useState(false)
  const [trigger] = useLazyGetItemQuery()

  return (
    <ScannerContainer>
      {active && (
        <CameraContainer>
          <Scanner
            onScan={(data) => {
              setActive((active) => !active)
              trigger(data)
            }}
            decoderOptions={{ formats: ['ean_13'] }}
          />
        </CameraContainer>
      )}

      <button onClick={() => setActive((active) => !active)}>
        Scan A Haul
      </button>
    </ScannerContainer>
  )
}

export default Scan
