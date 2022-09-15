// our-domain.com/new-meetup
import { Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const router = useRouter();

  // collects the entered meetup data returned from the meetupData prop on the form
  async function addMeetupHandler(enteredMeetupData) {
    // sends a POST request to the api file
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData), // db requires json data
      headers: {
        "Content-Type": "application/json",
      },
    });

    // collects the returned response
    const data = await response.json();
    console.log(data);

    // redirects user
    router.push("/");
  }

  return (
    <Fragment>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunities."
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}

export default NewMeetupPage;
