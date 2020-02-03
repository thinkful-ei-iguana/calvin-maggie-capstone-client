import config from '../config'
import TokenService from './token-service'

const DashboardService = {

  getWords() {
    let authToken = TokenService.getAuthToken();
    return fetch(`${config.API_ENDPOINT}/language`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${authToken}`

      }
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  // postLogin({ username, password }) {
  //   return fetch(`${config.API_ENDPOINT}/auth/token`, {
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/json',
  //     },
  //     body: JSON.stringify({ username, password }),
  //   })
  //     .then(res =>
  //       (!res.ok)
  //         ? res.json().then(err => Promise.reject(err))
  //         : res.json()
  //     )
  // },

}

export default DashboardService;
