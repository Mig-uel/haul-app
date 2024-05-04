import { useSelector } from 'react-redux'

import { HaulContainer } from './haul.styles'
import HaulItems from '../haul-items/haul-items.component'

const Haul = () => {
  const items = useSelector(({ items }) => items)

  console.log(items)
  return (
    <>
      {items.length > 0 && <h2 style={{ marginTop: '50px' }}>Scanned Items</h2>}
      <HaulContainer>
        {items.map((item) => (
          <HaulItems key={item.id} item={item.id} />
        ))}
      </HaulContainer>
    </>
  )
}

export default Haul
