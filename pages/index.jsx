import MeetUpList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';
import Head from 'next/head';

//Receive as props
export default function HomePage(props) {

    return (
    <>
        <Head>
            <title>React Next Meetups</title>
            <meta name="description" content="Brows a hugh list of highly active React Next Meetups" />
        </Head>
        <MeetUpList meetups={props.meetups}/>
    </>
  )
}

//If you want to update data on each request comes in
// export async function getServerSideProps(context){
//     const req = context.req;
//     const res = context.res;

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

//Reserve name 
//Problem only render data at build, may be oudated add revalidate
export async function getStaticProps(){
    //fetch data from API
    const connectedClient = await MongoClient.connect('mongodb+srv://dbuser:PAss!23456789@cluster0.zuqxwi9.mongodb.net/meetups');
    const db = connectedClient.db();
    const meetupsCollection = db.collection('meetups'); 
    const meetups = await meetupsCollection.find().toArray();
    connectedClient.close();

    return {
        //Has to name props
        props: {
            meetups: meetups.map(meetup => (
                {
                title: meetup.data.title,
                address: meetup.data.address,
                image: meetup.data.image,
                id: meetup._id.toString()

                }
            ))
        },
        revalidate: 10 //Wait 10s and regnerate if there are request
    }
}
