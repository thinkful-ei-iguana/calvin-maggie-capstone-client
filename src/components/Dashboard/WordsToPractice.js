import React, { Component } from "react";
import "../../routes/DashboardRoute/DashboardRoute.css";

class WordsToPractice extends Component {
  static defaultProps = {
    words: []
  };

  renderWords() {
    let wordArr = this.props.words;
    let wordArrToRender = [];
    for (let i = 0; i < wordArr.length; i++) {
      wordArrToRender.push(
        <li key={this.props.words[i].id} className="dashboard-individual-word-container">
          <h4 className="word-dashboard">{wordArr[i].original}</h4>
          correct answer count: {wordArr[i].correct_count}
          <br />
          incorrect answer count: {wordArr[i].incorrect_count}
          <br></br>
          <h4 className="attempts-dashboard">
          </h4>
        </li>
      );
    }
    return wordArrToRender;
  }

  render() {

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
