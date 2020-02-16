import config from '../config'

const TokenService = {
  saveAuthToken (token) {
    window.sessionStorage.setItem(config.TOKEN_KEY, token)
  },
  saveUser (user) {
    window.sessionStorage.setItem('user', user)
  },
  getAuthToken () {
    return window.sessionStorage.getItem(config.TOKEN_KEY)
  },
  getUserToken () {
    return window.sessionStorage.getItem('user')
  },
  clearAuthToken () {
    window.sessionStorage.removeItem(config.TOKEN_KEY)
  },
  hasAuthToken () {
    return !!TokenService.getAuthToken()
  },
  logOut () {
    window.sessionStorage.clear()
    window.location.replace('/')
  }
}

export default TokenService
