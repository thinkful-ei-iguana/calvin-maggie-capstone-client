import React, { Component } from "react";
import Word from "../../components/Learning/Word";
import config from "../../config";
import LearningService from "../../services/learning-service";
import ContentContext from "../../contexts/ContentContext";
// import "../../routes/DashboardRoute/DashboardRoute.css";
import "../../components/Learning/Learning.css";

class LearningRoute extends Component {
  state = {
    wordCorrectCount: 0,
    wordIncorrectCount: 0,
    nextWord: '',
    totalScore: 0
  };

  static contextType = ContentContext;

  componentDidMount() {
    LearningService.getWord()
      .then(data => {
        console.log('data learning is', data);
        this.handleSetState(data);
      })
      .then(() => {
        this.getWord();
      })
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
    console.log('this.state.wordcorrectcount in learning route is', this.state.wordCorrectCount);
    if (this.state.nextWord !== '') {
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
    return (
      <section>
        {this.getWord()}
      </section>
    );
  }
}

export default LearningRoute;
