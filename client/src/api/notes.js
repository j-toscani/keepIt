export async function fetchList(path) {
  const gotData = fetch(path).then(response => response.json());
  const newData = await gotData;
  return newData;
}

export async function createNewEntry(path, data, token) {
  return fetch(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: token
    },
    body: JSON.stringify(data)
  });
}

export async function deleteEntry(path, id, token) {
  const deletePath = `${path}/${id}`;
  return fetch(deletePath, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: token
    }
  });
}
