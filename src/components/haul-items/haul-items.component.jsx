import { removeItem } from '../../store/items/itemsSlice'
import { useDispatch, useSelector } from 'react-redux'

import {
  HaulItemInfoContainer,
  HaulItemContainer,
  HaulItemTitle,
} from './haul-items.styles'
import { FaTrash } from 'react-icons/fa'
import BarLoader from 'react-spinners/BarLoader.js'

const HaulItems = ({ item }) => {
  const isLoading = useSelector(({ loading }) => loading)
  const dispatch = useDispatch()
  console.log(isLoading)

  return (
    <HaulItemContainer>
      {isLoading ? (
        <BarLoader />
      ) : (
        <HaulItemInfoContainer>
          <HaulItemTitle>{item.product_name}</HaulItemTitle>
          <p>UPC: {item.code}</p>
          <p>Quantity: {item.qty}</p>
          <FaTrash onClick={() => dispatch(removeItem(item.id))} />
        </HaulItemInfoContainer>
      )}
    </HaulItemContainer>
  )
}

export default HaulItems
