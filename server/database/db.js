import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ac-hmtapzn-shard-00-00.rdofdzo.mongodb.net:27017,ac-hmtapzn-shard-00-01.rdofdzo.mongodb.net:27017,ac-hmtapzn-shard-00-02.rdofdzo.mongodb.net:27017/?ssl=true&replicaSet=atlas-auetkt-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    });
    console.log("Database Connected Succesfully");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

export default Connection;
