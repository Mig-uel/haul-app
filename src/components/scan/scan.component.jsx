import { useState } from 'react'
import { Scanner } from '@alzera/react-scanner'

import { useSelector, useDispatch } from 'react-redux'
import { addItem, removeItem } from '../../store/items/itemsSlice'

import { ScannerContainer, CameraContainer } from './scan.styles'

const Scan = () => {
  const [scannedData, setScannedData] = useState('')
  const [active, setActive] = useState(false)
  const [error, setError] = useState(null)

  const items = useSelector(({ items }) => items)
  const dispatch = useDispatch()

  return (
    <ScannerContainer>
      {active && (
        <CameraContainer>
          <Scanner
            onScan={(data) => {
              setScannedData(data)
              dispatch(addItem(+data))
              setActive((active) => !active)
            }}
            decoderOptions={{ formats: ['ean_13'] }}
            onError={(e) => setError(e)}
          />
        </CameraContainer>
      )}

      {/* {console.log(error)} */}
      {/* {error && <p>Error: {error.error}</p>} */}
      <button onClick={() => setActive((active) => !active)}>Scan Haul</button>
    </ScannerContainer>
  )
}

export default Scan
