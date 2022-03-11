// const URL_API_PREFIX = 'http://hoithaodaithaoduong.com'
// const URL_API_PREFIX = 'http://127.0.0.1:8000'
const URL_API_PREFIX = ''
const fetchData = async (url, _method = 'GET', data = {}) => {
  const headers = {
    'Content-Type': 'application/json',
  }

  switch (_method) {
    case 'POST':
    case 'PUT':
    case 'DELETE':
      return fetch(URL_API_PREFIX + url, {
        method: _method,
        headers,
        body: JSON.stringify(data),
      }).then((respone) => respone.json())
    case 'GET':
      return fetch(URL_API_PREFIX + url, {
        method: _method,
        headers,
      }).then((respone) => respone.json())
  }
}
