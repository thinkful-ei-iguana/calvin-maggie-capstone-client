import config from "../config";
import TokenService from "./token-service";

const LearningService = {
  getWords() {
    return fetch(`${config.API_ENDPOINT}/language`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          words: data.words,
          totalScore: data.language.total_score
        });
      });
  },

  getWord() {
    return fetch(`${config.API_ENDPOINT}/language/head`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  postGuess(guess) {
    const authToken = TokenService.getAuthToken();
    const guessJson = JSON.stringify({
      guess: guess
    });
    const url = `${config.API_ENDPOINT}/language/guess`;

    return fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${authToken}`
      },
      body: guessJson
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default LearningService;
