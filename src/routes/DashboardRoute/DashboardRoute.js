import React, { Component } from "react";
import WordsToPractice from "../../components/Dashboard/WordsToPractice";
import UserContext from "../../contexts/UserContext";
// import Context from '../../contexts/Context';
import { Link } from "react-router-dom";
import config from "../../config";
import TokenService from "../../services/token-service";

class DashboardRoute extends Component {
  state = {
    words: []
  };

  static contextType = UserContext;

  componentDidMount() {
    this.getWords();
  }

  getWords() {
    return fetch(`${config.API_ENDPOINT}/language`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log("data is", data.words);
        this.setState({
          words: data.words
        });
      });
  }

  render() {
    let words = this.state.words;
    console.log("words is", words);
    console.log("look at dashboard line 46+ for text fixing");
    return (
      <section>
        {/* <UserContext.Consumer>
          {user => (
            <Context.Consumer>
              {context => ( */}
        {/* add the following commented out lines into the line above as appropriate, this is only for testing purposes */}
        <section id="dashboard-container">
          <ul>
            <li>
              <h2>Test language 1</h2>
              <h4 id="welcome-message">original 1</h4>
              <span className="correct-answers">correct answer count: 0</span>
            </li>
          </ul>
          {/* {this.context.user.name} is learning Maori! */}
          <Link to="/learn" id="button-lets-learn" type="submit">
            <div id="learn-button-text">Start practicing</div>
            {/* Let's learn! */}
          </Link>
          <h3 id="words-header-dashboard">Words to practice</h3>
          {/* Words that you're learning: */}
          {/* <WordsToPractice user={user} context={context} /> */}
          <WordsToPractice words={words} />
          <section className="stats">
            <p id="total-score-dashboard">'Total correct answers: 7'</p>
            {/* Total score: */}
          </section>
        </section>
        {/* )}
            </Context.Consumer>
          )}
        </UserContext.Consumer> */}
      </section>
    );
  }
}

export default DashboardRoute;
