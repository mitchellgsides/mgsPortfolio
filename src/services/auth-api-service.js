import config from '../config'
import fetch from 'node-fetch'

const AuthApiService = {
  postLogin (userName, password) {
    const credentials = {
      userName,
      password
    }
    return fetch(`${config.REACT_APP_API_ENDPOINT}/api/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(credentials)
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    )
  },
  postUser (userName, fullName, password) {
    const user = {
      userName,
      fullName,
      password
    }
    return fetch(`${config.REACT_APP_API_ENDPOINT}/api/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
  }
}

export default AuthApiService
