import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { spotDetailThunk } from "../../store/spot";
import { spotReviewsThunk } from "../../store/review";
import { useParams } from "react-router-dom";
import "./SpotDetails.css";
import OpenModalButton from '../OpenModalButton'
import PostReviewModal from "../PostReviewModal";
import DeleteReviewModal from "../DeleteReviewModal";
import CreateBookingModal from "../CreateBookingModal";

export default function SpotDetail() {
  const { spotId } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user)
  const spot = useSelector((state) => state.spot.singleSpot);
  const reviews = useSelector((state) => state.review.reviews);

  useEffect(() => {
    dispatch(spotDetailThunk(spotId));
  }, [dispatch]);

  useEffect(() => {
    dispatch(spotReviewsThunk(spotId));
  }, [dispatch]);

  if (!spot) {
    return <div>Loading Spot...</div>;
  }

  if (!reviews) {
    return <div>Loading Reviews...</div>;
  }

  const handleReserveClickOwner = () => {
    if (!user)  {
      return alert("You must log in to book a spot!");
    }
    if (user.id == spot.ownerId)
      return alert("You cannot book your own spot!");
  };

  const convertDate = (date) => {
    const newDate = new Date(date)
    const options = { month: 'long', year: 'numeric' };
    const convertedDate = newDate.toLocaleString('en-US', options);
    return convertedDate

  }

  return (
    <div className="spot-container">
      <div className="name"> {spot.name}</div>
      <div className="location">
        {" "}
        {spot.city}, {spot.state}, {spot.country}{" "}
      </div>
      <div className="images-container">
        <div>
          <img
          className="preview-image"
            src={
              spot.spotImages &&
              spot.spotImages.find((image) => image.preview).url
            }
            alt="Preview Image of Spot"
          />
        </div>
        <div className="other-images">
          {spot.spotImages &&
            spot.spotImages
              .filter((image) => !image.preview)
              .map((image) => (
                <img className="other-image" key={image.id} src={image.url} alt="Image of spot" />
              ))}
        </div>
      </div>
      <div className="belowImages">
        <div className="belowImages-info">
          <div className="hostInfo">
            Hosted by {spot.Owner && spot.Owner.firstName}{" "}
            {spot.Owner && spot.Owner.lastName}{" "}
          </div>
          <div className="description"> {spot.description}</div>
        </div>
        <div className="reserve-container">
          <div className="price-reviews">
            <div className="price">${spot.price} night</div>
            <div className={spot.numReviews === 0 ? "noReviews" : "reviews"}>
              {spot.numReviews === 0 ? (
                <div className="noReviews">
                  <i className="fa-solid fa-star"></i>
                  <div className="newListing">New</div>
                </div>
              ) : (
                <div className="reviews">
                <div className="starRating">
                  <i className="fa-solid fa-star"></i>
                  {spot.avgStarRating}
                </div>
                <div className="dot">·</div>
                  {spot.numReviews === 1 ? <div className="reviewCount">{spot.numReviews} review</div> : <div className="reviewCount">{spot.numReviews} reviews</div>}
                </div>
              )}
            </div>
          </div>
          <div className="reserveButton">
          {user && user.id !== spot.ownerId ? 
               <OpenModalButton
               buttonText="Reserve"
               modalComponent={<CreateBookingModal spot={spot} />}
               /> : <button onClick={handleReserveClickOwner}>
               Reserve Now
             </button>}
          </div>
        </div>
      </div>
      <div className="reviewsContainer">
        <div className={spot.numReviews === 0 ? "noReviews" : "mainReviews"}>
            {spot.numReviews === 0 ? (
              <div className="noReviewsContainer">
                 <div className="noReviews">
                 <i className="fa-solid fa-star"></i>
                 <div className="newListing">New</div>
               </div>
               {user && user.id !== spot.ownerId 
               && <div className="beTheFirst">Be the first to post a review!</div>
               }
               </div>
               
            ) : (
                <div className="mainReviews">
                <div className="starRating">
                <i className="fa-solid fa-star"></i>
                {spot.avgStarRating}
                </div>
                <div className="dot">·</div>
                  {spot.numReviews === 1 ? <div className="reviewCount">{spot.numReviews} review</div> : <div className="reviewCount">{spot.numReviews} reviews</div>}
                </div>
            )}
        </div>
        <div className="postYourReview">
              {user && user.id !== spot.ownerId && (!reviews.find((review) => review.userId === user.id)) && 
               <OpenModalButton
               buttonText="Post Your Review"
               modalComponent={<PostReviewModal spot={spot} user={user} />}
               />}
        </div>
        {reviews &&
          reviews.map((review) => (
            <div className="individualReview" key={`review-${review.id}`}>
              <div className="reviewUser">{review.User.firstName}</div>
              <div className="createdAt">{convertDate(review.createdAt)}</div>
              <div className="reviewDescription">{review.review}</div>
              {user && review.userId === user.id 
              && <OpenModalButton
              buttonText="Delete"
                modalComponent={<DeleteReviewModal spot={spot} review={review}
                 />}
              />
              }
            </div>
          )).reverse()}
      </div>
    </div>
)}
