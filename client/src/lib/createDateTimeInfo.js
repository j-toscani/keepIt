export default function createDateTimeInfo(data) {
  const timestamp = new Date(Date.now());
  const date = timestamp.toDateString();
  const dateTime =
    timestamp.getHours() +
    ":" +
    (timestamp.getMinutes() <= 9
      ? 0 + timestamp.getMinutes()
      : timestamp.getMinutes()) +
    ":" +
    (timestamp.getSeconds() <= 9
      ? 0 + timestamp.getSeconds()
      : timestamp.getSeconds());
  data["published"] = { date, dateTime };
  return data;
}
