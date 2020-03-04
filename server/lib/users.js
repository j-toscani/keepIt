const { getCollection } = require("../db");

const collectionName = "users";

async function setNewUser(user) {
  const userCollection = await getCollection(collectionName);
  const userInserted = await userCollection.insertOne(user);
  return userInserted.result.ok;
}

async function getUserByMail(mail) {
  const userCollection = await getCollection(collectionName);
  const foundUser = await userCollection.findOne({ email: mail }, { email: 1 });
  console.log(foundUser);
  return foundUser;
}

async function deleteUser(user) {
  const userCollection = await getCollection(collectionName);
  const deletedUser = await userCollection.deleteOne({
    email: user.email
  });
  return deletedUser;
}

exports.setNewUser = setNewUser;
exports.getUserByMail = getUserByMail;
exports.deleteUser = deleteUser;
