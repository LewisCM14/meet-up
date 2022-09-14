import MeetUpList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some Address 5, 12345, Some City',
        description: 'This is a first meetup!'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some Address 15, 12345, Some City',
        description: 'This is a Second meetup!'
    }
]

const HomePage = (props) => {

    return (
        <MeetUpList meetups={props.meetups}/>
    )
};

// getStaticProps only available in the pages directory, executes code during build process
// an object always needs to be returned,
export async function getStaticProps() {
    return {
        props: {
            meetups: DUMMY_MEETUPS  // passes the meetups from the 'backend' via props.meetup
        },
        revalidate: 3600,  // provided page ahs incoming requests, re-builds the page every 10 seconds, ensure data remains up to date
    };
}

export default HomePage;