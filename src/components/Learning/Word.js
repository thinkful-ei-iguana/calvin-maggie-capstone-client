import React, { Component } from "react";
// import ContentContext from "../../contexts/ContentContext";
// import LearningService from '../../services/learning-service';
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import Result from "./Result";
import config from "../../config";
import TokenService from "../../services/token-service";

// import "../../routes/DashboardRoute/DashboardRoute.css";

// dont trust

class Word extends Component {
  state = {
    isCorrect: null,
    wordCorrectCount: 0,
    wordIncorrectCount: 0,
    totalScore: 0,
    nextWord: '',
    currentGuess: '',
    answer: null
  }
  // static contextType = ContentContext;

  static defaultProps = {
    nextWord: "",
    wordCorrectCount: null,
    wordIncorrectCount: null,
    totalScore: null
  };
  constructor(props) {
    super(props);

    this.state.nextWord = this.props.nextWord;
    this.state.wordCorrectCount = this.props.wordCorrectCount;
    this.state.wordIncorrectCount = this.props.wordIncorrectCount;
    this.state.totalScore = this.props.totalScore;

    console.log('thisprops', this.props);
  }


  handleInput = e => {
    e.preventDefault();
    this.setState({
      currentGuess: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const authToken = TokenService.getAuthToken();
    const url = `${config.API_ENDPOINT}/language/guess`;
    let queryString = "?q=" + this.state.currentGuess;
    let newUrl = url + queryString;
    const guessJson = JSON.stringify({
      guess: this.state.currentGuess,
    });

    return fetch(newUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${authToken}`
      },
      body: guessJson
    })
      .then(res => res.json())
      .then(data => {
        this.handleSetState(data);
        console.log("data from the post is", data);
      });
  };

  handleSetState = data => {
    this.setState({
      isCorrect: data.isCorrect,
      wordCorrectCount: data.wordCorrectCount,
      wordIncorrectCount: data.wordIncorrectCount,
      totalScore: data.totalScore,
      nextWord: data.nextWord.original,
      answer: data.answer
    });
    console.log('state is set', this.state);
  };

  // showResult = () => {
  //   if (this.isCorrect === true) {
  //     console.log("You gave the correct answer!");
  //     return "You gave the correct answer!";
  //   } else {
  //     return <Result isCorrect={this.state.isCorrect} />;
  //   }
  // };

  render() {
    // console.log("props is", this.props.nextWord);
    // console.log("context is", this.context);
    return (
      <section id="translate-page-container">
        <div className="learning_stats">
          <h4 className="learning_correct">
            You have answered this word correctly {this.state.wordCorrectCount}{" "}
            times.
          </h4>
          <h4 className="learning_incorrect">
            You have answered this word incorrectly {this.state.wordIncorrectCount}{" "}
            times.
          </h4>
        </div>
        <p>Your total score is: {this.state.totalScore}</p>
        <form id="translation-guess-form" onSubmit={this.handleSubmit}>
          <label htmlFor="learn-guess-input">
            What's the translation for this word? <span>{this.state.nextWord}</span>
          </label>
          <input
            type="text"
            name="guess"
            required
            onChange={this.handleInput.bind(this)}
            id="learn-guess-input"
          ></input>
          <Button
            id="button-learning-show-result"
            type="submit"
            onClick={this.showResult}
          >
            <div id="button-learning-show-result-text">Submit your answer</div>
          </Button>
        </form>
        <Link to="/" className="button-to-dashboard" type="submit">
          <div className="button-to-dashboard-text">Dashboard</div>
        </Link>

      </section>
    );
  }
}

export default Word;
