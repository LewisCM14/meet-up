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

const HomePage = () => {
    return (
        <MeetUpList meetups={DUMMY_MEETUPS}/>
    )
};

export default HomePage;