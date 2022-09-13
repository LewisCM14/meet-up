import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {

    // collects the entered meetup data returned from the meetupData prop on the form
    const addMeetupHandler = (enteredMeetupData) => {
        console.log(enteredMeetupData);
    }

    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    )
};

export default NewMeetupPage;