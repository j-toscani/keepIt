const { getCollection } = require("../db");
const ObjectId = require("mongodb").ObjectId;

const collectionName = "users";

async function setNewUser(user) {
  const userCollection = await getCollection(collectionName);
  await userCollection.insertOne(user);
  return user;
}

async function getUserFromDB(user) {
  const userCollection = await getCollection(collectionName);
  const foundUser = await userCollection.findOne(
    { email: user.email },
    { email: 1 }
  );
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
exports.getUserFromDB = getUserFromDB;
exports.deleteUser = deleteUser;
