import "./CreateBookingModal.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useModal } from "../../context/Modal";
import { deleteReviewThunk } from "../../store/review";
import { spotDetailThunk } from "../../store/spot";
import { spotReviewsThunk } from "../../store/review";
import Calendar from "react-calendar";

function CreateBookingModal({ spot }) {
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();
  const dispatch = useDispatch();
  const history = useHistory();
  const [date, setDate] = useState(new Date());

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     setErrors({});
  //     return dispatch(deleteReviewThunk(review.id))
  //     .then(() => {
  //       closeModal();
  //       dispatch(spotDetailThunk(spot.id));
  //       dispatch(spotReviewsThunk(spot.id));
  //       })
  //       .catch(async (res) => {
  //         const data = await res.json();
  //         if (data && data.errors) {
  //           setErrors(data.errors);
  //         }
  //     }
  //       );
  //   };

  return (
    <>
      <div>
        <h1>Select your Booking Time</h1>
        <div>
          <Calendar onChange={setDate} value={date} selectRange={true} />
        </div>
        {date.length > 0 ? (
          <p>
            <span>Start:</span> {date[0].toDateString()}
            &nbsp; to &nbsp;
            <span>End:</span> {date[1].toDateString()}
          </p>
        ) : (
          <p>
            <span> Your selected dates:</span> {date.toDateString()}
          </p>
        )}
      </div>
    </>
    // <div className="deleteSpotContainer">
    //     <div className="deleteHeader">Confirm Delete</div>
    //     <div className="deleteText">Are you sure you want to delete this review?</div>
    //     <div>
    //         <button
    //         id="yesDelete"
    //         onClick={handleSubmit}
    //         >
    //             Yes (Delete Review)
    //         </button>
    //         <button
    //         id="noDelete"
    //         onClick={((e) => {
    //           closeModal();
    //           })}
    //         >
    //             No (Keep Review)
    //         </button>
    //     </div>
    // </div>
  );
}

export default CreateBookingModal;
