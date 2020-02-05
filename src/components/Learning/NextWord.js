import React, { Component } from "react";
// import Context from "../../contexts/Context";
// import LearningService from '../../services/learning-service';
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import Result from "./Result";

// import "../../routes/DashboardRoute/DashboardRoute.css";

// dont trust

class NextWord extends Component {
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

  showResult = () => {
    return <Result />;
  };

  render() {
    // console.log('user context: ', this.props.user);
    // console.log('context context: ', this.props.context);
    return (
      <section id="translate-page-container">
        <h3>Translate this word:</h3>
        <h2>WORD</h2>
        {/* the h2 above should have the current word to be translated */}
        <form id="translation-guess-form" onSubmit={this.handleSubmit}>
          <input
            name="guess"
            type="text"
            required
            id="translation-input"
          ></input>
          <Button
            id="button-learning-show-result"
            type="submit"
            onClick={this.showResult}
          >
            <div id="button-learning-show-result-text">Submit</div>
          </Button>
        </form>
        <Link to="/" className="button-to-dashboard" type="submit">
          <div className="button-to-dashboard-text">Dashboard</div>
        </Link>
        <section id="learning-stats">
          <h5>Correct guesses: </h5>
          <h5>Incorrect guesses: </h5>
          <h4 id="total-score-learning">Total score:</h4>
        </section>
        {/* <div id='list-of-words-and-attempts'>
          {this.renderWords()}
        </div> */}
      </section>
    );
  }
}

export default NextWord;
