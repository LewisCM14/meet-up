import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// getStaticProps only available in the pages directory, executes code during build process
// an object always needs to be returned,
export async function getStaticProps() {
  // uses the connect method with user details to reach out to my cluster
  const client = await MongoClient.connect(
    "mongodb+srv://LewisMartin:ZvugwAgALap1JEuR@cluster0.b9flzdy.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db(); // connect to the database

  const meetupsCollection = db.collection("meetups"); // drills down into the meetups collection of the meetups database
  const meetups = await meetupsCollection.find().toArray(); // collects all the documents in the collection, organized into an array

  client.close();

  return {
    props: {
      // passes the meetups from the 'backend' via props.meetup
      meetups: meetups.map((meetup) => ({
        // iterates over the meetups and converts the id object to a string
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 3600, // provided page ahs incoming requests, re-builds the page every 10 seconds, ensure data remains up to date
  };
}

export default HomePage;
