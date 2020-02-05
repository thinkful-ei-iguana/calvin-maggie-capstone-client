import React, { Component } from "react";
import ContentContext from "../../contexts/ContentContext";
// import LearningService from '../../services/learning-service';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import Result from "./Result";
import config from '../../config';
import TokenService from '../../services/token-service';
import LearningService from '../../services/learning-service';


// import "../../routes/DashboardRoute/DashboardRoute.css";

// dont trust


class Word extends Component {

  state = {
    isCorrect: null,
    correctCount: 0,
    incorrectCount: 0,
    totalScore: 0,
    currentGuess: ''
  }
  static contextType = ContentContext;

  static defaultProps = {
    currentWord: '',
    nextWord: '',
    correctCount: null,
    incorrectCount: null,
    totalScore: null
  }

  handleInput = (e) => {
    e.preventDefault();
    this.setState({
      currentGuess: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const authToken = TokenService.getAuthToken();
    const url = `${config.API_ENDPOINT}/language/guess`;
    let queryString = "?q=" + this.state.currentGuess;
    let newUrl = url + queryString;
    const guessJson = JSON.stringify({
      guess: this.state.currentGuess,
      currentWord: this.props.currentWord
    });

    return fetch(newUrl, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      body: guessJson
    })
      .then(res => res.json())
      .then((data) => {
        this.handleSetState(data);
        console.log('data from the post is', data);
      });
  }

  handleSetState = (data) => {
    this.setState({
      error: data.error,
      isCorrect: data.isCorrect,
      correctCount: data.correctCount,
      incorrectCount: data.incorrectCount,
      totalScore: data.totalScore
    });
  }

  showResult = () => {

    return <Result isCorrect={this.state.isCorrect} />;
  }

  render() {
    console.log('props is', this.props.nextWord);
    console.log('context is', this.context);
    return (
      <section id="translate-page-container">
        <h3>Translate this word:</h3>
        <h2>{this.props.currentWord}</h2>
        <form
          id="translation-guess-form"
          onSubmit={this.handleSubmit}>
          <input
            name="guess"
            type="text"
            required
            onChange={this.handleInput.bind(this)}
            id="translation-input"></input>
          <Button
            id="button-learning-show-result"
            type="submit"
            onClick={this.showResult}><div id="button-learning-show-result-text">Submit</div>
          </Button>
        </form>
        <Link
          to='/'
          className="button-to-dashboard"
          type="submit"><div className="button-to-dashboard-text">Dashboard</div></Link>
        <section id="learning-stats">
          <h5>Correct guesses: {this.state.correctCount}</h5>
          <h5>Incorrect guesses: {this.state.incorrectCount}</h5>
          <h4 id="total-score-learning">Total score: {this.state.totalScore}</h4>
        </section>
        {/* <div id='list-of-words-and-attempts'>
          {this.renderWords()}
        </div> */}
      </section>
    );
  }
}

export default Word;
