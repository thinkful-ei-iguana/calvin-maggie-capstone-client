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
  }

  renderWords() {
    let wordArr = this.props.words;
    let wordArrToRender = [];
    for (let i = 0; i < wordArr.length; i++) {
      wordArrToRender.push(
        <div className="dashboard-individual-word-container">
          <p className="word-dashboard">{wordArr[i].original}</p>
          <p className="attempts-dashboard">correct attempts: {wordArr[i].correct_count}
            <br />
            incorrect attempts: {wordArr[i].incorrect_count}
            <br />
            total score: {wordArr[i].correct_count}
          </p>
        </div>
      )
    }

    console.log(wordArr);
    console.log('wordarrtorender', wordArrToRender)
    return wordArrToRender;
  }

  render() {
    // console.log('user context: ', this.props.user);
    // console.log('context context: ', this.props.context);
    return (
      <section id='words-to-practice-container'>
        <div id='list-of-words-and-attempts'>
          {this.renderWords()}
        </div>
      </section>
    );
  }
}

export default WordsToPractice;
