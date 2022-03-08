const fetchData = async (url, _method = 'GET', data = {}) => {
  const headers = {
    'Content-Type': 'application/json',
  }

  switch (_method) {
    case 'POST':
    case 'PUT':
    case 'DELETE':
      return fetch(url, {
        method: _method,
        headers,
        body: JSON.stringify(data),
      }).then((respone) => respone.json())
    case 'GET':
      return fetch(url, {
        method: _method,
        headers,
      }).then((respone) => respone.json())
  }
}
