import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {allSpotsThunk} from '../../store/spot'
import './SpotsIndex.css'

export default function SpotsIndex () {
	const dispatch = useDispatch()
	const spots = useSelector(state => state.spot.allSpots)
    // console.log(spots)


	useEffect(() => {
		dispatch(allSpotsThunk())
	}, [dispatch])

return (
    <div className='spots-container'>
      {spots && spots.map(spot => (
        <Link to={`/api/spots/${spot.id}`} key={`spot-${spot.id}`}>
        <div className='spot'>
          <img src={spot.previewImage} alt="Spot Preview" />
          <h2>{spot.name}</h2>
          <p>City: {spot.city}, State: {spot.state}</p>
          <p>${spot.price} night</p>
        </div>
        </Link>
      ))}
    </div>
  );
}