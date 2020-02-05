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
  componentDidMount() {

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
    const guess = { guess: this.state.currentGuess };

    return fetch(newUrl, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      body: JSON.stringify(guess)
    })
      .then(res => res.json())
      .then((data) => {
        this.setState({ error: data.error });
        console.log('data from the post is', data);
        this.showResult();
      });
  }

  showResult = () => {
    console.log('hi there')
    // return <Result />;
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
          <h5>Correct guesses: {this.props.correctCount}</h5>
          <h5>Incorrect guesses: {this.props.incorrectCount}</h5>
          <h4 id="total-score-learning">Total score: {this.props.totalScore}</h4>
        </section>
        {/* <div id='list-of-words-and-attempts'>
          {this.renderWords()}
        </div> */}
      </section>
    );
  }
}

export default Word;
