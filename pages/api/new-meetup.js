import { MongoClient } from "mongodb";

// POST api for new-meetup

async function handler(req, res) {
  // upon received post request collects the body.
  if (req.method === "POST") {
    // collects the info passed in the newMeetupForm (title, image, address, description)
    const data = req.body;

    // uses the connect method with user details to reach out to my cluster
    const client = await MongoClient.connect(
      "mongodb+srv://LewisMartin:ZvugwAgALap1JEuR@cluster0.b9flzdy.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();  // connect to the database

    const meetupsCollection = db.collection('meetups')  // drills down into the meetups collection of the meetups database

    // insert 1 document into the collection (add the meetup to the meetup's)
    const result = await meetupsCollection.insertOne(data);
    console.log(result);

    // close the db connection
    client.close();

    res.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default handler;
