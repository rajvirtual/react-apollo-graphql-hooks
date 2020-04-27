import React, { useContext } from "react";
import useCheckInMutation from "../hooks/useCheckInMutation";
import { isLoggedIn } from "../services/service";
import { PetsContext } from "./../providers/refetchProvider";

export const CheckIn = ({ petId }) => {
  const refetch = useContext(PetsContext);

  const doCheckIn = useCheckInMutation();
  const checkIn = () => {
    doCheckIn(
      {
        variables: { petId: petId },
      },
      { refetchQueries: [`petsQuery`] }
    )
      .then((_) => {
        refetch();
      })
      .catch((e) => console.log(e));
  };

  if (!isLoggedIn()) {
    return null;
  }

  return (
    <>
      <button onClick={() => checkIn()} className="btn btn-link">
        Check In
      </button>
    </>
  );
};
