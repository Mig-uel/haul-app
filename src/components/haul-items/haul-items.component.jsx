import { removeItem } from '../../store/items/itemsSlice'
import { useDispatch } from 'react-redux'

import { HaulItemsContainer } from './haul-items.styles'

const HaulItems = ({ item }) => {
  const dispatch = useDispatch()
  return (
    <HaulItemsContainer onClick={() => dispatch(removeItem(item))}>
      <h5>{item}</h5>
    </HaulItemsContainer>
  )
}

export default HaulItems
