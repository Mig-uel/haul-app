import { useSelector } from 'react-redux'
import { addItem } from '../../store/items/itemsSlice'

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

// {scannedData &&
//   items.map((item) => {
//     return (
//       <p key={item} onClick={() => dispatch(removeItem(item))}>
//         {item}
//       </p>
//     )
//   })}

export default Haul
