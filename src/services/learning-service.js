import config from '../config'
import TokenService from './token-service'


// have not built this out yet, dont trust data here

const LearningService = {

  getWords: () => {
    return fetch(`${config.API_ENDPOINT}/language`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log('data is', data);
        this.setState({
          words: data.words,
          totalScore: data.language.total_score
        })
      }
      );
  },

  getWord: () => {
    return fetch(`${config.API_ENDPOINT}/language/head`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          currentWord: data.original,
          nextWord: data.next,
          correctCount: data.correct_count,
          incorrectCount: data.incorrect_count,
          totalScore: data.total_score
        })

      })
  },

  postGuess: (guess) => {
    return fetch(`${config.API_ENDPOINT}/language/guess`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(guess)
    })
      .then(res => {
        console.log('res is', res);
        res.json()
      });

  }

}

export default LearningService;
