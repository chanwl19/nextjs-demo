import MeetupDetail from "../../components/meetups/MeetupDetail"
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

export default function MeetupDetails(props) {
  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail   
        image={props.meetupData.image} 
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </>
  )
}

export async function getStaticPaths(){
  const connectedClient = await MongoClient.connect('mongodb+srv://dbuser:PAss!23456789@cluster0.zuqxwi9.mongodb.net/meetups');
  const db = connectedClient.db();
  const meetupsCollection = db.collection('meetups'); 
  //Only return id
  const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();
  connectedClient.close();

  return {
    fallback: 'blocking', //Path contain all meetupId value
    paths: meetups.map(meetup => ({params: {
      meetupId: meetup._id.toString()
    }}))
    // paths: [
    //   { 
    //     params: {
    //       meetupId: 'm1', 
    //   }},
    //   { 
    //     params: {
    //       meetupId: 'm2', 
    //   }}
    // ]
  }
}

export async function getStaticProps(context){
  const meetupId = context.params.meetupId;
  const connectedClient = await MongoClient.connect('mongodb+srv://dbuser:PAss!23456789@cluster0.zuqxwi9.mongodb.net/meetups');
  const db = connectedClient.db();
  const meetupsCollection = db.collection('meetups'); 
  //Only return id
  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId)
  })
  connectedClient.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        image: selectedMeetup.data.image, 
        title: selectedMeetup.data.title, 
        address: selectedMeetup.data.address,
        description: selectedMeetup.data.description
      }
    }
  }
}
