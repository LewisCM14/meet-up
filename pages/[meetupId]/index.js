import { MongoClient, ObjectId } from "mongodb";

import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  // passes the required props to the MeetupDetails component

  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
}

// informs getStaticProps for which items of [meetupId] to generate a page for
// indicates all supported paths have been defined, a path not declared returns 404
export async function getStaticPaths() {
  // uses the connect method with user details to reach out to my cluster
  const client = await MongoClient.connect(
    "mongodb+srv://LewisMartin:ZvugwAgALap1JEuR@cluster0.b9flzdy.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db(); // connect to the database

  const meetupsCollection = db.collection("meetups"); // drills down into the meetups collection of the meetups database

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray(); // collect the id value for each document in the collection

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

// accepts context to allow access to id in dynamic URL
export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  // uses the connect method with user details to reach out to my cluster
  const client = await MongoClient.connect(
    "mongodb+srv://LewisMartin:ZvugwAgALap1JEuR@cluster0.b9flzdy.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db(); // connect to the database

  const meetupsCollection = db.collection("meetups"); // drills down into the meetups collection of the meetups database

  const selectedMeetup = await meetupsCollection.findOne({ // matches the id passed in the URL to the meetup in the database
    _id: ObjectId(meetupId),
  }); 

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;
