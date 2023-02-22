import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim === '' ||
      !message ||
      message.trim === ''
    ) {
      res.status(422).json({ message: 'Invalid input' });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    const connectionString = `mongodb+srv://${process.env.NEXT_PUBLIC_mongodb_username}:${process.env.NEXT_PUBLIC_mongodb_password}@${process.env.NEXT_PUBLIC_mongodb_clustername}.r5s0bwx.mongodb.net/${process.env.NEXT_PUBLIC_mongodb_database}?retryWrites=true&w=majority`;

    try {
      return res.status(201).json({ message: connectionString });
      // client = await MongoClient.connect(connectionString);
      // return res.status(201).json({ message: connectionString });
    } catch (e) {
      res.status(500).json({ message: 'Could not connect to DB' });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (e) {
      await client.close();
      res.status(500).json({ message: 'Storing message Failed' });
      return;
    }
    await client.close();

    res.status(201).json({ message: 'Success' });
  }
}
