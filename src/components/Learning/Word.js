import React, { Component } from "react";
// import ContentContext from "../../contexts/ContentContext";
// import LearningService from '../../services/learning-service';
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import Result from "./Result";
import config from "../../config";
import TokenService from "../../services/token-service";
import WordsToPracice from "../Dashboard/WordsToPractice";

// import "../../routes/DashboardRoute/DashboardRoute.css";

// dont trust

class Word extends Component {
  state = {
    currentWord: "",
    isCorrect: null,
    wordCorrectCount: 0,
    wordIncorrectCount: 0,
    totalScore: 0,
    nextWord: "",
    currentGuess: "",
    answer: null
  };
  // static contextType = ContentContext;

  // static defaultProps = {
  //   nextWord: "",
  //   wordCorrectCount: 0,
  //   wordIncorrectCount: 0,
  //   totalScore: 0
  // };
  constructor(props) {
    super(props);

    this.state.currentWord = this.props.nextWord;
    this.state.nextWord = this.props.nextWord;
    this.state.wordCorrectCount = this.props.wordCorrectCount;
    this.state.wordIncorrectCount = this.props.wordIncorrectCount;
    this.state.totalScore = this.props.totalScore;
  }

  handleInput = e => {
    e.preventDefault();
    this.setState({
      currentGuess: e.target.value
    });
  };

  // handleGetWord = () => {};

  handleSubmit = e => {
    e.preventDefault();

    console.log("this.props.nextword in Word handle is", this.props.nextWord);
    console.log("this.state.nextword in Word handle is", this.state.nextWord);
    console.log(
      "this.state.currentword in Word handle is",
      this.state.currentWord
    );

    const authToken = TokenService.getAuthToken();
    const url = `${config.API_ENDPOINT}/language/guess`;
    // let queryString = "?q=" + this.state.currentGuess;
    // + queryString;
    let newUrl = url;
    const guessJson = JSON.stringify({
      guess: this.state.currentGuess
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
        console.log("data is post", data);
        this.handleSetState(data);
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
    console.log(
      "what is this.state.nextword out of the raw res",
      this.state.nextword
    );
  };

  setIsCorrect = () => {
    this.setState({
      isCorrect: null,
      currentWord: this.state.nextWord
    });
    console.log(this.props, "handlegetword");
    // this.props.handleGetWord();
    console.log(
      "this.props.nextword in Word after setiscorrect is",
      this.props.nextWord
    );
    console.log(
      "this.state.nextword in Word after setiscorrect is",
      this.state.nextWord
    );
    console.log(
      "this.state.currentword in Word after setiscorrect is",
      this.state.currentWord
    );
  };

  render() {
    console.log("props is", this.state);
    // console.log("context is", this.context);
    return (
      <section id="translate-page-container">
        <div className="learning_stats">
          <h4 className="learning_correct">
            You have answered this word correctly {this.state.wordCorrectCount}{" "}
            times.
          </h4>
          <h4 className="learning_incorrect">
            You have answered this word incorrectly{" "}
            {this.state.wordIncorrectCount} times.
          </h4>
        </div>
        <section className="DisplayScore">
          <p>Your total score is: {this.state.totalScore}</p>
        </section>
        {this.state.isCorrect === true && (
          <section id="correct-answer-feedback" className="DisplayFeedback">
            <h2>You were correct! :D</h2>
            <p>
              The correct translation for {this.state.currentWord} was{" "}
              {this.state.answer} and you chose {this.state.currentGuess}!
            </p>
          </section>
        )}
        {this.state.isCorrect === false && (
          <>
            <section id="incorrect-answer-feedback">
              <h2>Good try, but not quite right :(</h2>
            </section>
            <section className="DisplayFeedback">
              <p>
                The correct translation for {this.state.currentWord} was{" "}
                {this.state.answer} and you chose {this.state.currentGuess}!
              </p>
            </section>
          </>
        )}
        {this.state.isCorrect === null && (
          <form id="translation-guess-form" onSubmit={this.handleSubmit}>
            <h2>Translate the word:</h2>
            <span>{this.state.currentWord}</span>
            <label htmlFor="learn-guess-input">
              What's the translation for this word?
            </label>
            <input
              type="text"
              name="guess"
              required
              onChange={this.handleInput.bind(this)}
              id="learn-guess-input"
            ></input>

            <Button
              id="button-show-form"
              type="submit"
              onClick={this.setIsCorrect}
            >
              Submit your answer
            </Button>
          </form>
        )}
        <Link to="/" className="button-to-dashboard" type="submit">
          <div className="button-to-dashboard-text">Dashboard</div>
        </Link>
      </section>
    );
  }
}

export default Word;
