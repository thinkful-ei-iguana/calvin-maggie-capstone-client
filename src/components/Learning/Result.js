import React, { Component } from "react";
// import Context from "../../contexts/Context";
// import LearningService from '../../services/learning-service';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import "./Learning.css";
import Word from "./Word";

// dont trust

class Result extends Component {

  // static contextType = Context;
  // static defaultProps = {
  //   // context: {},
  //   // user: {}
  //   words: []
  // }

  // renderWords() {
  //   let wordArr = this.props.words;
  //   let wordArrToRender = [];
  //   for (let i = 0; i < wordArr.length; i++) {
  //     wordArrToRender.push(
  //       <div className="dashboard-individual-word-container">
  //         <p className="word-dashboard">{wordArr[i].original}</p>
  //         <p className="attempts-dashboard">correct attempts:
  //       <br />
  //           incorrect attempts:</p>
  //       </div>
  //     )
  //   }

  //   console.log(wordArr);
  //   console.log('wordarrtorender', wordArrToRender)
  //   return wordArrToRender;
  // }
  // displayResultMessage() {
  //   <h2 id="good-try-message">Good try, but...</h2>
  // }

  showNextWord = () => {
    return <Word />
  }

  displayResultMessage = () => {

  }


  render() {

    return (
      <div>
        {this.displayResultMessage}
        <h3>The correct translation of WORD was TRANSLATION and you guessed ANSWER.</h3>
        <Button
          id="button-learning-next"
          type="submit"
          onClick={this.showNextWord}><div id="button-learning-next-text">Next word</div></Button>
        <Link
          to='/'
          className="button-to-dashboard"
          type="submit"><div className="button-to-dashboard-text">Dashboard</div></Link>
        <h4>Total score:</h4>
      </div>
    );
  }
}

export default Result;
