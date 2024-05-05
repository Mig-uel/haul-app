import { useSelector } from 'react-redux'
import HaulItems from '../haul-items/haul-items.component'

import { HaulContainer } from './haul.styles'

const Haul = () => {
  const items = useSelector(({ items }) => items)

  return (
    <>
      {items.length > 0 && <h2 style={{ marginTop: '50px' }}>Scanned Items</h2>}
      <HaulContainer>
        {items.map((item) => (
          <HaulItems key={item} item={item} />
        ))}
      </HaulContainer>
      {items.length > 0 && <button>Create Haul</button>}
    </>
  )
}

export default Haul
