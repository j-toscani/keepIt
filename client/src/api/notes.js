export async function fetchList(path, token) {
  const gotData = fetch(path, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  }).then(response => response.json());
  const newData = await gotData;
  return newData;
}

export async function createNewEntry(path, data, token) {
  return fetch(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
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
      Authorization: `Bearer ${token}`
    }
  });
}
