import React, { Component } from "react";
import Word from "../../components/Learning/Word";
import config from "../../config";
import TokenService from "../../services/token-service";
import ContentContext from "../../contexts/ContentContext";

class LearningRoute extends Component {
  state = {
    wordCorrectCount: 0,
    wordIncorrectCount: 0,
    nextWord: '',
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
        console.log('data learning is', data);
        this.handleSetState(data);
      })
      .then(() => console.log("state state", this.state));
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
    if (this.state.nextWord !== '') {
      return <Word
        nextWord={this.state.nextWord}
        wordCorrectCount={this.state.correctCount}
        wordIncorrectCount={this.state.incorrectCount}
        totalScore={this.state.totalScore}
      />;
    }
    return <div></div>;
  }

  render() {
    return (
      <section>
        {this.getWord()}
      </section>
      // <section>
      //    <NextWord />
      //    <Result />
      // </section>
    );
  }
}

export default LearningRoute;
