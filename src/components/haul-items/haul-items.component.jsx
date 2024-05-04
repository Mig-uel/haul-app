import { removeItem } from '../../store/items/itemsSlice'
import { useDispatch } from 'react-redux'
import { useGetItemQuery } from '../../store/api/apiSlice.js'
import BarLoader from 'react-spinners/BarLoader.js'

import { FaTrash } from 'react-icons/fa'
import {
  HaulItemInfoContainer,
  HaulItemContainer,
  HaulItemTitle,
} from './haul-items.styles'

const HaulItems = ({ item }) => {
  const dispatch = useDispatch()
  const { data, isLoading, isSuccess, isError, error } = useGetItemQuery(item)
  data && console.dir(data)

  return (
    <HaulItemContainer>
      {isLoading ? (
        <BarLoader />
      ) : (
        <HaulItemInfoContainer>
          <HaulItemTitle>{data.product.product_name}</HaulItemTitle>
          <p>{data.product.code}</p>
          <FaTrash onClick={() => dispatch(removeItem(item))} />
        </HaulItemInfoContainer>
      )}
    </HaulItemContainer>
  )
}

export default HaulItems
