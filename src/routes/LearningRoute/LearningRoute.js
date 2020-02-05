import React, { Component } from 'react';
import Word from '../../components/Learning/Word';
import config from '../../config';
import TokenService from '../../services/token-service';
import ContentContext from '../../contexts/ContentContext';



class LearningRoute extends Component {

  state = {
    currentWord: 'placeholder',
    correctCount: 0,
    incorrectCount: 0,
    nextWord: 2,
    totalScore: 0
  }

  static contextType = ContentContext;



  componentDidMount() {

    return fetch(`${config.API_ENDPOINT}/language/head`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log('data learning is', data);
        this.handleSetState(data);
      })
      .then(() => console.log('state state', this.state))
  }

  handleSetState = (data) => {
    return this.setState({
      currentWord: data.currentWord,
      nextWord: data.nextWord,
      correctCount: data.correctCount,
      incorrectCount: data.incorrectCount,
      totalScore: data.totalScore
    })
  }

  render() {

    let currentWord = this.context.currentWord;
    let nextWord = this.context.nextWord;
    let correctCount = this.context.correctCount;
    let incorrectCount = this.context.incorrectCount;
    let totalScore = this.context.totalScore;
    return (
      <section>
        <Word
          currentWord={this.state.currentWord}
          nextWord={this.state.nextWord}
          correctCount={this.state.correctCount}
          incorrectCount={this.state.incorrectCount}
          totalScore={this.state.totalScore}
        />
      </section>
      // <section>
      //    <NextWord />
      //    <Result />
      // </section>
    );
  }
}

export default LearningRoute;
