import { MongoClient } from 'mongodb'

// /api/new-meetup

//Only post
export default async function handler(req,res){
    if (req.method === 'POST'){
        const data =req.body;
        //const {title, image, address, desription } = data;

        //Store in DB
        const connectedClient = await MongoClient.connect('mongodb+srv://dbuser:PAss!23456789@cluster0.zuqxwi9.mongodb.net/meetups');
        const db = connectedClient.db();

        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne({
            data
        });
        console.log(result);
        connectedClient.close();

        res.status(201).json({message: 'Meetup inserted!'});      
    }
}