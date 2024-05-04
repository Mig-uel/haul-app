import { useState } from 'react'
import { Scanner } from '@alzera/react-scanner'

import { useDispatch } from 'react-redux'
import { addItem } from '../../store/items/itemsSlice'

import { ScannerContainer, CameraContainer } from './scan.styles'

const Scan = () => {
  const [scannedData, setScannedData] = useState('')
  const [active, setActive] = useState(false)
  const [error, setError] = useState(null)

  const dispatch = useDispatch()

  return (
    <ScannerContainer>
      {active && (
        <CameraContainer>
          <Scanner
            onScan={(data) => {
              setScannedData(data)
              dispatch(addItem({ id: data }))
              setActive((active) => !active)
            }}
            decoderOptions={{ formats: ['ean_13'] }}
            onError={(e) => setError(e)}
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
