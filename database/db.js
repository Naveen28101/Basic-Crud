import mongoose from "mongoose";

const Connection = async (username, password) => {
  // const URL=`mongodb+srv://${username}:${password}@crud-app.ebdlfl2.mongodb.net/`;
  const URL = `mongodb+srv://${username}:${password}@crud-app.z8kwxv3.mongodb.net/?retryWrites=true&w=majority`;

  try {
    mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log(`Error generated while connecting the database is ${error}`);
  }
};

export default Connection;
