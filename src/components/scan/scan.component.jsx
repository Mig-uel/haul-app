import { useState } from 'react'
import { Scanner } from '@alzera/react-scanner'

// store
import { useLazyGetItemQuery } from '../../store/api/apiSlice'

// styles
import { ScannerContainer, CameraContainer } from './scan.styles'

const Scan = ({ active, setActive }) => {
  const [trigger] = useLazyGetItemQuery()

  return (
    <ScannerContainer>
      {active && (
        <CameraContainer>
          <Scanner
            onScan={(data) => {
              trigger(data)
              setActive((active) => !active)
            }}
            decoderOptions={{ formats: ['ean_13'] }}
          />
        </CameraContainer>
      )}
    </ScannerContainer>
  )
}

export default Scan
