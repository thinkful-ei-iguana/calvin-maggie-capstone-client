import React, { Component } from "react";
import Context from "../../contexts/ContentContext";
// import DashboardService from '../../services/dashboard-service';
import "../../routes/DashboardRoute/DashboardRoute.css";

class WordsToPractice extends Component {
  static contextType = Context;
  static defaultProps = {
    // context: {},
    // user: {}
    words: []
  };

  renderWords() {
    let wordArr = this.props.words;
    let wordArrToRender = [];
    for (let i = 0; i < wordArr.length; i++) {
      wordArrToRender.push(
        <li className="dashboard-individual-word-container">
          <h4 className="word-dashboard">{wordArr[i].original}</h4>
          correct answer count: {wordArr[i].correct_count}
          <br />
          incorrect answer count: {wordArr[i].incorrect_count}
          <br></br>
          <h4 className="attempts-dashboard">
            <p>{console.log("wordarrtorender", wordArrToRender)}</p>
            <p>{console.log("words to practice", this.words)}</p>
            {/* current score: {wordArr[i].total_score} */}
          </h4>
        </li>
      );
    }

    console.log(wordArr);
    console.log("wordarrtorender", wordArrToRender);
    return wordArrToRender;
  }

  render() {
    // console.log('user context: ', this.props.user);
    // console.log('context context: ', this.props.context);
    return (
      <section id="words-to-practice-container">
        <ul>
          <div id="list-of-words-and-attempts">{this.renderWords()}</div>
        </ul>
      </section>
    );
  }
}

export default WordsToPractice;
