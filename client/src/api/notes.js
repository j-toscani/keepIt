export async function fetchList(path) {
  const gotData = fetch(path).then(response => response.json());
  const newData = await gotData;
  return newData;
}

export async function createNewEntry(path, data) {
  return fetch(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
}

export async function deleteEntry(path, id) {
  const deleteUrl = path + "/" + id;
  return fetch(deleteUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  });
}
