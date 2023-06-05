import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {allSpotsThunk} from '../../store/spot'

export default function SpotsIndex () {
	const dispatch = useDispatch()
	const spots = useSelector(state => state.spot.allSpots)
    // console.log(spots)


	useEffect(() => {
		dispatch(allSpotsThunk())
	}, [dispatch])

return (
    <div>
      {spots && spots.map(spot => (
        <div key={`spot-${spot.id}`}>
          <h2>{spot.name}</h2>
          <p>City: {spot.city}, State: {spot.state}</p>
          <img src={spot.previewImage} alt="Spot Preview" />
        </div>
      ))}
    </div>
  );
}