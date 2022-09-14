import MeetupDetail from "../../components/meetups/MeetupDetail";
import { Fragment } from "react";

const MeetupDetails = () => {

    // passes the required props to the MeetupDetails component

  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg"
      title="First Meetup"
      address="Some Street 5, Some City"
      description="This is a first meetup"
    />
  );
};

export default MeetupDetails;
