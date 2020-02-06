import React, { Component } from "react";
import Word from "../../components/Learning/Word";
import config from "../../config";
import TokenService from "../../services/token-service";
import ContentContext from "../../contexts/ContentContext";

class LearningRoute extends Component {
  state = {
    wordCorrectCount: 0,
    wordIncorrectCount: 0,
    nextWord: "",
    totalScore: 0
  };

  static contextType = ContentContext;

  componentDidMount() {
    return fetch(`${config.API_ENDPOINT}/language/head`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log("data learning is", data);
        this.handleSetState(data);
      });
  }

  handleSetState = data => {
    return this.setState({
      nextWord: data.nextWord,
      wordCorrectCount: data.wordCorrectCount,
      wordIncorrectCount: data.wordIncorrectCount,
      totalScore: data.totalScore
    });
  };

  getWord() {
    console.log(
      "this.state.wordcorrectcount in learning route is",
      this.state.wordCorrectCount
    );
    if (this.state.nextWord !== "") {
      return (
        <section>
          <Word
            nextWord={this.state.nextWord}
            wordCorrectCount={this.state.wordCorrectCount}
            wordIncorrectCount={this.state.wordIncorrectCount}
            totalScore={this.state.totalScore}
          />
        </section>
      );
    }
    return <div></div>;
  }

  render() {
    return <section>{this.getWord()}</section>;
  }
}

export default LearningRoute;
