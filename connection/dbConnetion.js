import mongoose from "mongoose";

const DbConnection = () => {
  const connection = mongoose
    .connect('mongodb+srv://dreamsschool:dreamsschool@cluster0.mwhhuiu.mongodb.net/dreamsSchool?retryWrites=true&w=majority')
    .then((err, dataBase) => {
      console.log("database Connected !");
    })
    .catch((err) => {
      throw err;
    });
};
export default DbConnection;
