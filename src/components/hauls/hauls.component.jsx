import { useSelector } from 'react-redux'

import { HaulsContainer } from './hauls.styles'

const Hauls = () => {
  const hauls = useSelector(({ hauls }) => hauls)

  hauls && (
    <HaulsContainer>
      <h4>Hauls</h4>
    </HaulsContainer>
  )
}

export default Hauls
