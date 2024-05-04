import { useSelector } from 'react-redux'

import { HaulContainer } from './haul.styles'
import HaulItems from '../haul-items/haul-items.component'

const Haul = () => {
  const items = useSelector(({ items }) => items)

  return (
    <>
      <h2 style={{ marginTop: '50px' }}>My Haul Items</h2>
      <HaulContainer>
        {items.map((item) => (
          <HaulItems key={item} item={item} />
        ))}
      </HaulContainer>
    </>
  )
}

export default Haul
