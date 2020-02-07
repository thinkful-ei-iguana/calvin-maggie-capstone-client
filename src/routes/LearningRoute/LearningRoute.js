import React, { Component } from "react";
import Word from "../../components/Learning/Word";
import LearningService from "../../services/learning-service";
import "../../components/Learning/Learning.css";

class LearningRoute extends Component {
  state = {
    wordCorrectCount: 0,
    wordIncorrectCount: 0,
    nextWord: "",
    totalScore: 0
  };

  componentDidMount() {
    LearningService.getWord()
      .then(data => {
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
